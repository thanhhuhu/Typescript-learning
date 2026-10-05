import { useAuth } from "../../contexts/AuthContext";

function Header () {
    const {user, logout} = useAuth ();
    return (
        <header>    
            <div>
                <span>
                    Xin chao {user?.name}
                </span>
                <button onClick={logout}>
                    Logout
                </button>
            </div>
        </header>
    )
}
export default Header;