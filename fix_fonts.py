import re

filepath = r"C:\Users\Nitesh\Downloads\gog\quantnexa\src\app\globals.css"
with open(filepath, "r", encoding="utf-8") as f:
    css = f.read()

# Replace the simple Inter/JetBrains import with the full Google Fonts import
full_google_fonts = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Rajdhani:wght@500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Zilla+Slab:wght@400;500;600;700&family=Anton&family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500;700&display=swap');"

# Remove the old one if it exists
css = re.sub(r"@import url\('https://fonts\.googleapis\.com/css2\?family=Inter:wght@300;400;500;600;700&family=JetBrains\+Mono:wght@400;500&display=swap'\);\n?", "", css)

# Add the new one at the top (before tailwindcss)
css = full_google_fonts + "\n" + css

# Fix the --font-* declarations in @theme to use double quotes
css = re.sub(r"--font-sans: 'Inter', sans-serif;", '--font-sans: "Inter", sans-serif;', css)
css = re.sub(r"--font-display: 'Rajdhani', sans-serif;", '--font-display: "Rajdhani", sans-serif;', css)
css = re.sub(r"--font-slab: 'Zilla Slab', serif;", '--font-slab: "Zilla Slab", serif;', css)
css = re.sub(r"--font-anton: 'Anton', sans-serif;", '--font-anton: "Anton", sans-serif;', css)
css = re.sub(r"--font-cyber: 'Clash Display', 'Inter', system-ui, sans-serif;", '--font-cyber: "Clash Display", "Inter", system-ui, sans-serif;', css)
css = re.sub(r"--font-mono: 'JetBrains Mono', ui-monospace, monospace;", '--font-mono: "JetBrains Mono", ui-monospace, monospace;', css)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(css)

print("Fixed font imports and theme quotes.")
