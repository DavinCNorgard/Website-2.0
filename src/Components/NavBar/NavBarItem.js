import { Link } from "react-router-dom"

export default function NavBarItem({ to, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active":"inactive"}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
