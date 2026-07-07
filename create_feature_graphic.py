from PIL import Image, ImageDraw, ImageFont
import os

WIDTH, HEIGHT = 1024, 500
BASE_DIR = r"C:\Users\josue\OneDrive\Escritorio\APP-MOVIL-CONDUCCION-LOGO-PRACTIQUEMOSCL\APP-MOVIL-CONDUCCION-LOGO-PRACTIQUEMOSCL\assets\images"
OUTPUT = r"C:\Users\josue\OneDrive\Escritorio\APP-MOVIL-CONDUCCION-LOGO-PRACTIQUEMOSCL\APP-MOVIL-CONDUCCION-LOGO-PRACTIQUEMOSCL\feature_graphic.png"

img = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# --- Gradient background ---
colors = [
    (12, 29, 77),    # #0c1d4d
    (29, 78, 216),   # #1d4ed8
    (37, 99, 235),   # #2563eb
    (30, 64, 175),   # #1e40af
]
for y in range(HEIGHT):
    ratio = y / HEIGHT
    idx = ratio * (len(colors) - 1)
    i = int(idx)
    t = idx - i
    if i + 1 < len(colors):
        r = int(colors[i][0] + (colors[i+1][0] - colors[i][0]) * t)
        g = int(colors[i][1] + (colors[i+1][1] - colors[i][1]) * t)
        b = int(colors[i][2] + (colors[i+1][2] - colors[i][2]) * t)
    else:
        r, g, b = colors[-1]
    draw.line([(0, y), (WIDTH, y)], fill=(r, g, b, 255))

# --- Decorative orb elements (like in the splash) ---
orbs = [
    (80, 60, 80, (59, 130, 246, 50)),
    (720, 40, 60, (251, 191, 36, 40)),
    (100, 380, 50, (96, 165, 250, 35)),
    (780, 350, 70, (251, 191, 36, 35)),
    (450, 420, 40, (147, 197, 253, 40)),
    (600, 100, 35, (253, 224, 71, 35)),
]
for ox, oy, osize, ocolor in orbs:
    orb_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    orb_draw = ImageDraw.Draw(orb_layer)
    orb_draw.ellipse([ox - osize//2, oy - osize//2, ox + osize//2, oy + osize//2], fill=ocolor)
    img = Image.alpha_composite(img, orb_layer)
    draw = ImageDraw.Draw(img)

# --- Load logo ---
logo_path = os.path.join(BASE_DIR, "logo-completo-header.png")
if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert("RGBA")
    # resize logo to fit width
    logo_w = 340
    logo_h = int(logo.height * (logo_w / logo.width))
    logo = logo.resize((logo_w, logo_h), Image.LANCZOS)
    img.paste(logo, (WIDTH // 2 - logo_w // 2, 25), logo)

# --- Tagline ---
try:
    font_tag = ImageFont.truetype("arialbd.ttf", 22)
except:
    font_tag = ImageFont.load_default()

tagline = "Examen de Conducir Chile"
bbox = draw.textbbox((0, 0), tagline, font=font_tag)
tw = bbox[2] - bbox[0]
draw.text(((WIDTH - tw) // 2, 155), tagline, fill=(251, 191, 36, 255), font=font_tag)

# --- Feature items (icons + text) ---
features = [
    ("📝", "Test Diario", 50, 260),
    ("📚", "Temario", 200, 260),
    ("🧠", "Test Inteligente", 380, 260),
    ("✅", "Test Básico", 530, 260),
    ("🔥", "Test Avanzado", 680, 260),
    ("📂", "Por Categorías", 830, 260),
]

try:
    font_icon = ImageFont.truetype("seguiemj.ttf", 32)
except:
    font_icon = ImageFont.load_default()
try:
    font_feat = ImageFont.truetype("arialbd.ttf", 14)
except:
    font_feat = ImageFont.load_default()

for icon, text, x, y in features:
    # Draw rounded rect background
    padding = 60
    rw = padding * 2
    rh = 65
    rect_x = x - padding
    rect_y = y - 10
    
    # semi-transparent white background
    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.rounded_rectangle(
        [rect_x, rect_y, rect_x + rw, rect_y + rh],
        radius=12,
        fill=(255, 255, 255, 30)
    )
    img = Image.alpha_composite(img, overlay)
    draw = ImageDraw.Draw(img)
    
    # Icon
    try:
        draw.text((x - 10, y + 2), icon, fill=(255, 255, 255, 255), font=font_icon)
    except:
        pass
    
    # Text
    draw.text((x - len(text)*3, y + 38), text, fill=(255, 255, 255, 255), font=font_feat)

# --- Bottom badge ---
try:
    font_badge = ImageFont.truetype("arialbd.ttf", 16)
except:
    font_badge = ImageFont.load_default()
badge_text = "Practica con cientos de preguntas oficiales • Aprobado por la comunidad"
bbox = draw.textbbox((0, 0), badge_text, font=font_badge)
btw = bbox[2] - bbox[0]
# background pill for badge
badge_y = 370
badge_pad = 20
badge_overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
badge_overlay_draw = ImageDraw.Draw(badge_overlay)
badge_overlay_draw.rounded_rectangle(
    [(WIDTH - btw) // 2 - badge_pad, badge_y - 8, (WIDTH + btw) // 2 + badge_pad, badge_y + 22],
    radius=20,
    fill=(251, 191, 36, 30)
)
img = Image.alpha_composite(img, badge_overlay)
draw = ImageDraw.Draw(img)
draw.text(((WIDTH - btw) // 2, badge_y), badge_text, fill=(251, 191, 36, 220), font=font_badge)

# --- Download text ---
try:
    font_dl = ImageFont.truetype("arialbd.ttf", 18)
except:
    font_dl = ImageFont.load_default()
dl_text = "¡Disponible en Google Play!"
bbox = draw.textbbox((0, 0), dl_text, font=font_dl)
dlw = bbox[2] - bbox[0]
draw.text(((WIDTH - dlw) // 2, 420), dl_text, fill=(255, 255, 255, 200), font=font_dl)

# --- Footer ---
try:
    font_footer = ImageFont.truetype("arial.ttf", 11)
except:
    font_footer = ImageFont.load_default()
footer_text = "Desarrollado por WebMakerChile"
bbox = draw.textbbox((0, 0), footer_text, font=font_footer)
fw = bbox[2] - bbox[0]
draw.text(((WIDTH - fw) // 2, 470), footer_text, fill=(255, 255, 255, 100), font=font_footer)

# Save
img = img.convert("RGB")
img.save(OUTPUT, "PNG")
print(f"Feature graphic saved to {OUTPUT}")
print(f"Size: {os.path.getsize(OUTPUT)} bytes")
