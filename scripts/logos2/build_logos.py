"""Builds transparent, dark-site-ready logo PNGs into public/images/logos.
No white tiles: every mark is background-free. Dark wordmarks are lightened;
coloured emblems keep their own colours."""
from PIL import Image
import os

ROOT = 'C:/Users/HP/code/shantanu-portfolio/'
RAW = ROOT + 'scripts/logos2/raw/'
OLD = ROOT + 'scripts/pdf-assets/logos/'
OUT = ROOT + 'public/images/logos/'
OFFWHITE = (242, 239, 232)

def trim(im, pad=4):
    bb = im.split()[-1].point(lambda v: 255 if v > 14 else 0).getbbox()
    if bb:
        im = im.crop((max(0, bb[0] - pad), max(0, bb[1] - pad), min(im.width, bb[2] + pad), min(im.height, bb[3] + pad)))
    return im

def unmix_white(im):
    """Logo drawn on an opaque white background -> true transparency, colours recovered."""
    px = im.convert('RGB')
    out = Image.new('RGBA', px.size)
    src, dst = px.load(), out.load()
    for y in range(px.height):
        for x in range(px.width):
            r, g, b = src[x, y]
            a = 1 - min(r, g, b) / 255
            if a < 0.04:
                dst[x, y] = (0, 0, 0, 0)
                continue
            f = tuple(max(0, min(255, round((c - (1 - a) * 255) / a))) for c in (r, g, b))
            dst[x, y] = f + (round(a * 255),)
    return out

def white_from_luma(im):
    """White logo on opaque dark background -> off-white ink, alpha from brightness."""
    l = im.convert('L')
    out = Image.new('RGBA', l.size, OFFWHITE + (255,))
    out.putalpha(l)
    return out

def lighten_dark(im, thr=0.32, x_from=0.0):
    """Pixels that would vanish on a dark page become off-white; colours with energy stay."""
    im = im.convert('RGBA')
    px = im.load()
    x0 = int(im.width * x_from)
    for y in range(im.height):
        for x in range(x0, im.width):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
            if lum < thr:
                px[x, y] = OFFWHITE + (a,)
    return im

def save(im, name, maxw=520):
    im = trim(im)
    if im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    os.makedirs(OUT, exist_ok=True)
    im.save(OUT + name + '.png', optimize=True)
    print(name, im.size, os.path.getsize(OUT + name + '.png') // 1024, 'KB')

RGBA = lambda p: Image.open(p).convert('RGBA')

# Institutions and organisations
dyp = Image.open(RAW + 'dypcoe.png').convert('L').resize((480, 480), Image.LANCZOS).point(lambda v: max(0, min(255, round((v - 70) * 255 / 130))))
dyp_img = Image.new('RGBA', dyp.size, OFFWHITE + (255,))
dyp_img.putalpha(dyp)
save(dyp_img, 'dypcoe')
save(lighten_dark(RGBA(RAW + 'tfi.png'), 0.32), 'tfi')
save(RGBA(RAW + 'samagra.png'), 'samagra')
save(lighten_dark(RGBA(RAW + 'wharton.png'), 0.30, x_from=0.2), 'wharton')
save(RGBA(RAW + 'kennesaw.png'), 'kennesaw', 360)
save(lighten_dark(RGBA(RAW + 'keysight.png'), 0.32), 'keysight', 420)
save(RGBA(RAW + 'hero.png'), 'hero', 420)

# From the earlier downloads
save(white_from_luma(Image.open(ROOT + 'scripts/pdf-assets/logos/raw/mu.bin')), 'mu')
arai = Image.open(ROOT + 'scripts/pdf-assets/logos/raw/arai.bin').convert('RGBA')
save(arai, 'arai')  # already white on transparent
save(lighten_dark(unmix_white(Image.open(ROOT + 'scripts/pdf-assets/logos/raw/saeindia.png')), 0.36), 'saeindia')

# Client marks (Wikimedia SVG renders, already transparent)
for name, thr in [('tesla', 0), ('tata', 0.30), ('mahindra', 0), ('jio', 0), ('bpcl', 0), ('iocl', 0.22), ('bhel', 0), ('vinfast', 0.30)]:
    im = RGBA(OLD + name + '.png')
    save(lighten_dark(im, thr) if thr else im, name, 360)

# Contact sheet on the dark page colour for review
names = ['mu', 'arai', 'saeindia', 'dypcoe', 'tfi', 'samagra', 'wharton', 'kennesaw', 'keysight', 'hero', 'tesla', 'tata', 'mahindra', 'jio', 'bpcl', 'iocl', 'bhel', 'vinfast']
sheet = Image.new('RGB', (1900, 150 * ((len(names) + 4) // 5) + 20), (13, 14, 11))
for i, n in enumerate(names):
    t = RGBA(OUT + n + '.png')
    t.thumbnail((340, 120))
    sheet.paste(t, (10 + (i % 5) * 375, 10 + (i // 5) * 150), t)
sheet.save('C:/Users/HP/AppData/Local/Temp/logos_final.png')
