import os
import re
import glob

# Search in src/components and src/app
search_paths = [
    'src/components/**/*.jsx',
    'src/components/**/*.tsx',
    'src/app/**/*.jsx',
    'src/app/**/*.tsx'
]

files = []
for path in search_paths:
    files.extend(glob.glob(path, recursive=True))

pattern = re.compile(r"import\s+(\w+)\s+from\s+['\"](?:\.\./)+([^'\"]+\.(?:png|jpg|jpeg|svg|webp))['\"];?")

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = pattern.sub(r"const \1 = '/\2';", content)
    
    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Refactored: {filepath}")

print("Done.")
