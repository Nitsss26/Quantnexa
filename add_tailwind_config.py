import re

# Read globals.css
with open(r"C:\Users\Nitesh\Downloads\gog\quantnexa\src\app\globals.css", "r", encoding="utf-8") as f:
    globals_css = f.read()

# Tailwind v4 theme block
theme_css = """
@theme {
  --color-primary: #34D562;
  --color-primary-dark: #28a74b;
  --color-primary-glow: rgba(52, 213, 98, 0.5);
  --color-dark: #050505;
  --color-dark-card: #0A0A0A;
  --color-dark-border: #222222;
  --color-neon-green: #22ff66;
  --color-neon-emerald: #00ff88;
  --color-cyber-bg: #020703;
  --color-cyber-card: #050b08;
  --color-cyber-border: #0b3d1f;
  --color-cyber-text: #a3b8cc;
  --color-cyber-glow: rgba(34, 255, 102, 0.15);
  
  --font-sans: 'Inter', sans-serif;
  --font-display: 'Rajdhani', sans-serif;
  --font-slab: 'Zilla Slab', serif;
  --font-anton: 'Anton', sans-serif;
  --font-cyber: 'Clash Display', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  
  --animate-spin-slow: spin 10s linear infinite;
  --animate-pulse-slow: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-float: float 6s ease-in-out infinite;
  --animate-scan: scan 4s linear infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
@keyframes scan {
  0% { background-position: 0% 0%; }
  100% { background-position: 0% 100%; }
}
"""

# Extract styles from index.html
with open(r"C:\Users\Nitesh\Downloads\gog\index.html", "r", encoding="utf-8") as f:
    index_html = f.read()

styles_match = re.search(r'<style>(.*?)</style>', index_html, re.DOTALL)
index_styles = styles_match.group(1) if styles_match else ""

# Remove body rule from index_styles to avoid conflicting with existing ones
index_styles = re.sub(r'body\s*{[^}]+}', '', index_styles, count=1)

# Combine all
final_css = globals_css + "\n" + theme_css + "\n" + index_styles

with open(r"C:\Users\Nitesh\Downloads\gog\quantnexa\src\app\globals.css", "w", encoding="utf-8") as f:
    f.write(final_css)

print("Added tailwind configuration and index styles to globals.css")
