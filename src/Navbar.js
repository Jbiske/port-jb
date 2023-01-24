import { Children } from "react"


export default function Navbar(){
    const path = window.location.pathname

    return(<nav className="nav">
        <a href='/' className="site-title">Joshua Biske </a>
        <ul>
            <CustomLink href='about'>About</CustomLink>
            <CustomLink href='current'>Current Works</CustomLink>

            <CustomLink href='contact'>Contact</CustomLink>
        </ul>


    </nav>
    )

}



function CustomLink({href,children, ...props}){ 
    const path = window.location.pathname
    return (
    
    <li className={path ===href ? "active": ""}><a href={href} {...props}>{children}
    </a>

        
    </li>
    
    )

}