"""
Face-of-Light asset prep for the Katviz hero.
- Loads the frontal head shot (988)
- Runs DepthAnything-V2-Small (CPU) -> relative depth map
- Crops head+shoulders, produces matched color + depth textures
- Web-optimizes both
Outputs into site/face/.
"""
import os, sys, numpy as np
from PIL import Image, ImageOps, ImageFilter

SRC = r"C:\Users\Ronak\Downloads\1000000988.jpg"
OUT = r"C:\Users\Ronak\katviz-empire\site\face"
os.makedirs(OUT, exist_ok=True)

print("loading image...", flush=True)
img = ImageOps.exif_transpose(Image.open(SRC)).convert("RGB")
W, H = img.size
print("source size:", W, H, flush=True)

# --- crop head + shoulders (frontal selfie framing) ---
# head is roughly centered horizontally, upper-middle vertically
cx0, cx1 = 0.10, 0.90
cy0, cy1 = 0.10, 0.82
box = (int(W*cx0), int(H*cy0), int(W*cx1), int(H*cy1))
crop = img.crop(box)
cw, ch = crop.size
print("crop size:", cw, ch, flush=True)

# target ~1024 tall, keep aspect
TH = 1024
TW = int(cw * TH / ch)
TW -= TW % 2
color = crop.resize((TW, TH), Image.LANCZOS)

print("loading DepthAnything (cpu, first run downloads ~100MB)...", flush=True)
from transformers import pipeline
pipe = pipeline(task="depth-estimation",
                model="depth-anything/Depth-Anything-V2-Small-hf",
                device=-1)  # CPU: GTX1070 sm_61 incompatible with this torch
print("running depth...", flush=True)
res = pipe(color)
depth = res["depth"]  # PIL, mode L, near=bright
depth = depth.resize((TW, TH), Image.LANCZOS)

d = np.asarray(depth).astype(np.float32)
d = (d - d.min()) / (max(d.max() - d.min(), 1e-6))  # 0..1, 1=near

# slight smoothing to kill depth speckle, keep structure
depth_s = Image.fromarray((d*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))

color.save(os.path.join(OUT, "color.jpg"), "JPEG", quality=88, optimize=True)
depth_s.save(os.path.join(OUT, "depth.jpg"), "JPEG", quality=90, optimize=True)

# also save a full-frame depth for reference/QC
print("near/far stats:", float(d.min()), float(d.max()), "mean", float(d.mean()), flush=True)
print("WROTE", os.path.join(OUT, "color.jpg"), color.size, flush=True)
print("WROTE", os.path.join(OUT, "depth.jpg"), depth_s.size, flush=True)
print("DONE", flush=True)
