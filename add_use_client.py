import os
import glob

search_paths = [
    'src/components/**/*.jsx',
    'src/components/**/*.tsx',
    'src/app/**/*.jsx',
    'src/app/**/*.tsx'
]

files = []
for path in search_paths:
    files.extend(glob.glob(path, recursive=True))

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if not content.startswith('"use client"'):
        new_content = '"use client";\n' + content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Added 'use client' to: {filepath}")

print("Done.")
