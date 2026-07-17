import os

def fix_navbar():
    path = r"C:\Users\Nitesh\Downloads\gog\quantnexa\src\components\tech\Navbar.jsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    content = content.replace("from 'react-router-dom';", "from 'next/navigation';")
    content = content.replace("useLocation", "usePathname")
    content = content.replace("useNavigate", "useRouter")
    content = content.replace("location.pathname", "pathname")
    content = content.replace("navigate(", "router.push(")
    content = content.replace("const location = usePathname();", "const pathname = usePathname();")
    content = content.replace("const navigate = useRouter();", "const router = useRouter();")
    content = content.replace("href: '/tech'", "href: '/'")
    content = content.replace("setActiveItem('/tech')", "setActiveItem('/')")
    content = content.replace("=== '/tech'", "=== '/'")
    content = content.replace("=== '/tech/'", "=== '/'")
    content = content.replace("navigate('/tech')", "router.push('/')")
    content = content.replace("href=\"/tech\"", "href=\"/\"")
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

def fix_footer():
    path = r"C:\Users\Nitesh\Downloads\gog\quantnexa\src\components\tech\Footer.jsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
        
    content = content.replace("from 'react-router-dom';", "from 'next/navigation';")
    content = content.replace("useLocation", "usePathname")
    content = content.replace("useNavigate", "useRouter")
    content = content.replace("location.pathname", "pathname")
    content = content.replace("navigate(", "router.push(")
    content = content.replace("const location = usePathname();", "const pathname = usePathname();")
    content = content.replace("const navigate = useRouter();", "const router = useRouter();")
    content = content.replace("href: '/tech'", "href: '/'")
    content = content.replace("setActiveItem('/tech')", "setActiveItem('/')")
    content = content.replace("=== '/tech'", "=== '/'")
    content = content.replace("=== '/tech/'", "=== '/'")
    content = content.replace("navigate('/tech')", "router.push('/')")
    content = content.replace("href=\"/tech\"", "href=\"/\"")
    content = content.replace("!== '/tech'", "!== '/'")

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

def fix_tech_layout():
    path = r"C:\Users\Nitesh\Downloads\gog\quantnexa\src\components\tech\TechLayout.jsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    content = content.replace("import { Outlet } from 'react-router-dom';", "")
    content = content.replace("export default function TechLayout() {", "export default function TechLayout({ children }) {")
    content = content.replace("<Outlet />", "{children}")

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

fix_navbar()
fix_footer()
fix_tech_layout()
print("Fixed routing")
