import os
from PIL import Image, ImageFilter

def process_logo(input_path, output_path, target_color, is_white=False):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    # Create a mask for the text pixels
    # In the dark logo, the text is dark brown/bronze #3a2718: (58, 39, 24)
    # In the white logo, the text is cream/white #f5f1e8: (245, 241, 232)
    text_mask = Image.new("L", (width, height), 0)
    mask_pixels = text_mask.load()
    
    for x in range(width):
        for y in range(640, 780):
            r, g, b, a = pixels[x, y]
            if a > 30:
                if is_white:
                    # Look for cream/white-ish pixels (high brightness, low saturation)
                    # or pixels close to (245, 241, 232)
                    dist = abs(r - 245) + abs(g - 241) + abs(b - 232)
                    if dist < 60 or (r > 200 and g > 200 and b > 200 and abs(r - g) < 20 and abs(g - b) < 20):
                        mask_pixels[x, y] = 255
                else:
                    # Look for dark brown/bronze pixels close to (58, 39, 24)
                    dist = abs(r - 58) + abs(g - 39) + abs(b - 24)
                    if dist < 60 or (r < 100 and g < 80 and b < 60):
                        mask_pixels[x, y] = 255
                        
    # Dilate the mask slightly to make the text thicker/bolder
    # We can do this by applying a MaxFilter
    dilated_mask = text_mask.filter(ImageFilter.MaxFilter(3)) # 3x3 max filter dilates by 1 pixel
    dilated_pixels = dilated_mask.load()
    
    # Create the output image
    new_img = img.copy()
    new_pixels = new_img.load()
    
    for x in range(width):
        for y in range(height):
            # If it's in the text region and part of the dilated mask, recolor it
            if y >= 640 and y < 780 and dilated_pixels[x, y] > 0:
                # Set to target color with full opacity
                r_target, g_target, b_target = target_color
                new_pixels[x, y] = (r_target, g_target, b_target, 255)
            elif y >= 640 and y < 780:
                # For any other pixel in the text region, if it's anti-aliased text (semi-transparent dark/white),
                # let's make it transparent or blend it to avoid ghosting
                r, g, b, a = pixels[x, y]
                if is_white:
                    if r > 180 and g > 180 and b > 180:
                        # Semi-transparent text pixel, make it transparent
                        new_pixels[x, y] = (r, g, b, 0)
                else:
                    if r < 120 and g < 100 and b < 80:
                        # Semi-transparent text pixel, make it transparent
                        new_pixels[x, y] = (r, g, b, 0)
                        
    new_img.save(output_path, "PNG")
    print(f"Processed {input_path} -> {output_path}")

# Target color for dark logo text: deeper bronze #8A6428: (138, 100, 40)
# or premium gold #B88746: (184, 135, 70)
# Let's use the premium gold #B88746 (184, 135, 70) or deeper bronze #8A6428 (138, 100, 40)
# The prompt says: Use premium gold shade: #B88746 or deeper bronze: #8A6428
# Let's make it the deeper bronze #8A6428 for the dark logo to maintain contrast on cream background.
# For the white logo, let's make it white (255, 255, 255) or premium gold (184, 135, 70) for contrast on dark background.
# Wait, let's make the white logo text pure white/cream (255, 255, 255) but much bolder and sharper so it's super visible on dark footer.
process_logo("src/assets/gnt-logo.png", "src/assets/gnt-logo.png", (138, 100, 40), is_white=False)
process_logo("src/assets/gnt-logo-white.png", "src/assets/gnt-logo-white.png", (255, 255, 255), is_white=True)
