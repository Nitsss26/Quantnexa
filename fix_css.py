import os

filepath = r"C:\Users\Nitesh\Downloads\gog\quantnexa\src\app\globals.css"
with open(filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

imports = []
others = []

for line in lines:
    if line.strip().startswith("@import"):
        imports.append(line)
    else:
        others.append(line)

# Sort imports so @import "tailwindcss" is first if present
tailwindcss_import = None
for imp in imports:
    if "tailwindcss" in imp:
        tailwindcss_import = imp
        break

if tailwindcss_import:
    imports.remove(tailwindcss_import)
    imports.insert(0, tailwindcss_import)

final_lines = imports + others

with open(filepath, "w", encoding="utf-8") as f:
    f.writelines(final_lines)

print("Fixed CSS imports")
