import { useAuthenticated } from "../../hook/useAuth"


const Layout = ({children}) => {
    useAuthenticated();
    
    return (
        <>
            {children}
        </>
    )
}

export default Layout