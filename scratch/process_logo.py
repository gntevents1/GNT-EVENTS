"""
Process the new uploaded GNT logo:
1. Crop to the oval content (remove excess whitespace).
2. Save as gnt-logo.png (for navbar - cream/light backgrounds).
3. Create gnt-logo-white.png variant: make the outer background transparent,
   and invert/lighten the inner cream fill + border colors so it works on dark backgrounds.
"""
from PIL import Image

SRC = "C:/Users/kumar/.gemini/antigravity/brain/c2ee1286-4e5f-4c8f-9133-e79ef43b960b/media__1781632396678.png"

def make_dark_logo(src_path, out_path):
    """
    For navbar (cream background):
    - Remove the outer cream background (make it transparent).
    - Keep the oval + its cream interior + gold border + text as-is.
    """
    img = Image.open(src_path).convert("RGBA")
    pixels = img.load()
    w, h = img.size

    # The outer background is a uniform cream ~(239,234,225) / #efe9e1 area
    # We need to make it transparent while keeping the oval intact.
    # Strategy: flood-fill from corners to make the outer area transparent.

    # Sample the background color from corner
    bg = pixels[5, 5][:3]
    print(f"Background color: RGB{bg}")

    # Make outer background transparent using a tolerance-based approach
    # from all edges inward
    threshold = 25  # color distance threshold for "is background"

    visited = set()
    queue = []

    # Seed from all edge pixels
    for x in range(w):
        queue.append((x, 0))
        queue.append((x, h - 1))
    for y in range(h):
        queue.append((0, y))
        queue.append((w - 1, y))

    while queue:
        x, y = queue.pop()
        if (x, y) in visited:
            continue
        if x < 0 or x >= w or y < 0 or y >= h:
            continue
        visited.add((x, y))

        r, g, b, a = pixels[x, y]
        dist = abs(r - bg[0]) + abs(g - bg[1]) + abs(b - bg[2])
        if dist < threshold and a > 0:
            pixels[x, y] = (0, 0, 0, 0)
            # Add neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if (nx, ny) not in visited:
                    queue.append((nx, ny))

    # Crop to content bounding box
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    img.save(out_path, "PNG")
    print(f"Dark logo saved: {out_path} ({img.size[0]}x{img.size[1]})")
    return img


def make_white_logo(dark_logo_img, out_path):
    """
    For footer (dark background):
    - Take the transparent-background version.
    - Convert the cream interior fill of the oval to transparent.
    - Keep the gold border and gold text, and make the interior text/shapes brighter.
    """
    img = dark_logo_img.copy()
    pixels = img.load()
    w, h = img.size

    # The interior of the oval is cream-ish (~239-245, 230-240, 220-230).
    # The gold border/text is darker golden (~180-200, 140-170, 60-120).
    # We want to:
    # 1. Make cream interior transparent
    # 2. Keep gold elements but make them slightly lighter/brighter for dark bg visibility

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a < 10:
                continue

            # Check if pixel is cream/light background (inside oval)
            is_cream = (r > 215 and g > 210 and b > 200 and
                       abs(r - g) < 25 and abs(g - b) < 25)

            if is_cream:
                # Make transparent
                pixels[x, y] = (0, 0, 0, 0)
            else:
                # For gold/brown elements, brighten them for dark background
                # Scale up brightness while maintaining hue
                factor = 1.25
                nr = min(255, int(r * factor))
                ng = min(255, int(g * factor))
                nb = min(255, int(b * factor))
                pixels[x, y] = (nr, ng, nb, a)

    img.save(out_path, "PNG")
    print(f"White logo saved: {out_path} ({w}x{h})")


# Run
print("Processing new logo...")
dark = make_dark_logo(SRC, "src/assets/gnt-logo.png")
make_white_logo(dark, "src/assets/gnt-logo-white.png")
print("Done!")
