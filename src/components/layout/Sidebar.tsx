import { Link } from "react-router-dom";
function Sidebar () {
    return (
        <aside className="sidebar">

            <nav> 
                <Link to ="/dashboard">
                    Dashboard
                </Link>
                <Link to ="/tasks">
                    Tasks
                </Link>
                <Link to ="/profile">
                    Profile
                </Link>
            </nav>
        </aside>
    )
}
export default Sidebar;