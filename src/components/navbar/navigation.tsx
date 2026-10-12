import { NavLink } from "react-router-dom"

interface Props {
    isOpen?: boolean;
    pathname: string;
    href: string;
    children: React.ReactNode;
    active?: boolean;
    isLogoutBtn?: boolean;
}

const Navigation = ({isOpen, pathname, href, children, active, isLogoutBtn = false}: Props) => {
    
    return (
        <>
            {
                !isLogoutBtn ?
                    <NavLink to={href} className={({isActive}) => isActive ? "overflow-clip p-3 rounded-2xl bg-bleu-9 w-full flex items-center justify-start gap-2" : "overflow-clip p-3 rounded-2xl w-full flex items-center justify-start gap-2 transition duration-200 ease-in-out hover:bg-bleu-3/50"}>
                        {children}
                        <p className={`text-lg text-gris-12 font-normal whitespace-nowrap transition duration-200 ease-out ${active ? "font-bold": "font-normal"} ${!isOpen ? "hidden" : "block"}`}>{pathname}</p>
                    </NavLink>
                :
                    <button className={"cursor-pointer overflow-clip p-3 rounded-2xl w-full flex items-center justify-start gap-2 transition duration-200 ease-in-out hover:bg-rouge"}>
                        {children}
                        <p className={`text-lg text-gris-12 font-medium whitespace-nowrap transition duration-200 ease-out ${active ? "font-bold": "font-normal"} ${!isOpen ? "hidden" : "block"}`}>{pathname}</p>
                    </button>
            } 
        </>
    )
}

export default Navigation
