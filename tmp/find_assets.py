import re

with open('/tmp/target.js', 'r', encoding='utf-8') as f:
    text = f.read()

images = set(re.findall(r'/images/[a-zA-Z0-9_\-\.]+\.(?:jpg|png|svg|webp)', text))
print("IMAGES:")
for img in sorted(images):
    print(img)
