# Katviz — Brand Guidelines
*Prism Noir · v2.0*

**Light, bent to your will.**

---

## 1. Essence

| Element | Answer |
|---|---|
| **Name** | Katviz |
| **Idea** | Refraction — a white beam enters the prism; a spectrum leaves. Raw input goes in, a polished spectrum of deliverables comes out. |
| **Vibe** | AI-lab luxury. What an AI research lab would look like if it hired a fashion house. Dark, precise, expensive. |
| **Personality** | Clever, confident, calm. Short sentences. Knows more than it says. |
| **One-line** | AI-powered 3D visuals and automation, built by someone who does both. |

---

## 2. Logo

Files in `logo/`:

| File | Use |
|---|---|
| `katviz-mark.svg` | Primary mark, transparent. Anywhere on a dark surface. |
| `katviz-avatar.svg` | Social avatar / app icon. Mark on the void, 1:1, rounded. |
| `katviz-favicon.svg` | Simplified silhouette — survives 16px. Browser tabs, tiny icons. |

**The mark reads three ways:** a **prism** (the machine) · a **white beam** entering it (your raw input) · a **spectral fan** leaving it (the full range of deliverables). One beam in, every wavelength out.

**Wordmark:** "KATVIZ" set in **Geist** (700), tracked +2, in solid `--chrome` — with the spectral gradient clip allowed at display sizes only. Outline to paths before using as a final logo asset.

**Rules**
- Clear space: keep at least the height of the prism's base edge around the mark.
- Never recolor the spectral gradient. Never stretch. Never rotate the beam direction — light always enters from the left.
- Never place the transparent mark on light surfaces; use the avatar version instead.
- Below ~32px, use the favicon version.

---

## 3. Color

Full tokens in `tokens.css`. The system is **a near-black noir carrying the full spectral range — green through magenta — iridescence is never flat.**

| Token | Hex | Role |
|---|---|---|
| Void | `#0A0A0E` | Background, the dark chamber |
| Panel | `#121218` | Cards |
| Panel 2 | `#1A1A24` | Raised cards, inputs |
| Line | `#26262F` | Borders, hairlines |
| Green | `#3BF0A6` | Spectral accent — growth; also the "available / go" status signal |
| Cyan | `#6BE4FF` | Spectral accent — precision |
| Violet | `#9D7BFF` | Spectral accent — the signature |
| Magenta | `#FF6BC1` | Spectral accent — energy |
| Chrome | `#EDEDF2` | Primary text |
| Silver | `#9B9BA8` | Secondary text |

**Accessibility:** Chrome on Void is the text pairing (≈17:1, AAA). Silver passes AA+ (≈7:1). All four spectral accents pass 4.5:1 on Void, but they live as **gradients, chromatic edges, and split glows** — never flat single-color fills on large areas, and never as small text below 4.5:1. The spectral gradient may be clipped to text **only at ≥24px**, always with a solid `--chrome` fallback declared first. `--dim` (#62626E) is decorative only.

---

## 4. Type

| Role | Font | Notes |
|---|---|---|
| Display / wordmark | **Geist** (600/700) | Headlines at 600 — cleaner than 700-everywhere. 700 is reserved for the wordmark and lockups. Geist runs tighter than a grotesk: ease wide tracking on big all-caps settings. |
| Body | **Geist** (400/500) | Paragraphs, UI. One family across display and body keeps the lab-luxury feel seamless. |
| Mono | **Geist Mono** (400/500) | Specs, labels, code. The instrument readout. |

Both are free (Google Fonts / OFL). Load with preconnect to `fonts.googleapis.com` and `fonts.gstatic.com` (crossorigin), `display=swap`, and real fallback stacks.

---

## 5. Voice

Write like a physicist who moonlights as a creative director. Precise, then surprising.

| Do | Don't |
|---|---|
| "Your listings look flat. We fix that." | "We leverage AI to optimize visual assets." |
| "One photo in. Twenty campaign shots out." | "Our synergistic approach empowers stakeholders." |
| Short sentences. Active voice. | Corporate jargon. Fluff. |
| Refraction metaphors, used sparingly. | Mixed metaphors, magic-speak, hype. |
| One accent symbol max (◆). | Emoji storms. |

---

## 6. Quick reference

```
Void   #0A0A0E   Panel  #121218   Line    #26262F
Green  #3BF0A6   Cyan   #6BE4FF   Violet  #9D7BFF   Magenta #FF6BC1
Chrome #EDEDF2   Silver #9B9BA8   Dim     #62626E
Gradient: 110deg green -> cyan -> violet -> magenta (display text >= 24px only)
Display: Geist 600/700 · Body: Geist 400/500 · Mono: Geist Mono 400/500
```
