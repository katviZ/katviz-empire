# Katviz — Brand Guidelines
*Grimoire Nocturne · v1.0*

**AI is the wand. You are the wizard.**

---

## 1. Essence

| Element | Answer |
|---|---|
| **Name** | Katviz — *Cat* (curious, agile, independent) + *Wizard* (mastery, arcane craft) |
| **Tagline** | *"AI is the wand. You are the wizard."* |
| **Vibe** | Mysterious but approachable. Premium but not cold. Tech-forward but human. |
| **Personality** | Clever, confident, calm. Speaks in short sentences. A wise cat who knows more than it says. |
| **One-line** | AI-powered 3D visuals and automation, built by someone who does both. |

---

## 2. Logo

Three files in `logo/`:

| File | Use |
|---|---|
| `katviz-mark.svg` | Primary mark, transparent. Web headers, decks, anywhere on dark. |
| `katviz-avatar.svg` | Social avatar / app icon. Mark on the void, 1:1, rounded. |
| `katviz-favicon.svg` | Simplified mark that survives 16px. Browser tabs, tiny icons. |

**The mark reads three ways at once:** a wand (the vertical), a cat-ear crescent (upper arm), and a shooting-star trail ending in a star (lower arm) — together they form a **K**.

**Rules**
- Clear space: keep at least the height of the star around the mark.
- Never recolor the gradients. Never stretch. Never add a drop shadow on light backgrounds — use the avatar version instead.
- Below ~32px, always use the favicon version.

---

## 3. Color

Full tokens in `tokens.css`. Core palette:

| Token | Hex | Role |
|---|---|---|
| Arcane Violet | `#7C3AED` | Primary — the signature |
| Bio Cyan | `#00E5FF` | AI glow — the "K", links, highlights |
| Spellspark Pink | `#FF6B9D` | Accent — sparse, for surprise |
| Alchemist Gold | `#FFD700` | Results, stars, the payoff |
| The Void | `#0A0A14` | Background |
| Starlight | `#E2E8F0` | Primary text on dark |

**Accessibility (do not skip):**
- Body text = Starlight on Void (passes AAA).
- **Gold and Cyan fail as text on white/light.** Use them as fills, borders, or glows only. For colored text on a light surface, use `--cyan-dark` / `--gold-dark`.

---

## 4. Type

| Role | Font | Notes |
|---|---|---|
| Display | **Space Grotesk** (700) | Headlines, wordmark. Tight tracking. |
| Serif | **Playfair Display** (700 italic) | Taglines, pull quotes only. |
| Body | **Inter** (400/500) | Paragraphs, UI. |
| Mono | **JetBrains Mono** (400) | Specs, labels, code. |

All four are free (Google Fonts / OFL). Do not substitute paid fonts (e.g. SF Pro).

---

## 5. Voice

Write like a wizard who knows magic but chooses to speak plainly.

| Do | Don't |
|---|---|
| "Your listings look flat. We fix that." | "We leverage AI to optimize visual assets." |
| "I built this." | "We believe we can deliver value." |
| Short sentences. Active voice. | Corporate jargon. Fluff. |
| Confident, warm, calm. | Arrogant or cold. |
| One accent emoji max (⭐). | 🔥🎯🚀💯 emoji storms. |

---

## 6. Quick reference

```
Primary    #7C3AED   Cyan    #00E5FF   Pink   #FF6B9D
Gold       #FFD700   Void    #0A0A14   Text   #E2E8F0
Display: Space Grotesk · Body: Inter · Serif: Playfair · Mono: JetBrains Mono
```
