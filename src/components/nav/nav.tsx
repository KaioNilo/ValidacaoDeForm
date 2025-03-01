import { Button , NavLogo } from "components";
import { Link } from "react-router-dom";


export function Nav() {
    return (
        <nav className="w-full h-20 bg-gray-200 border-b border-gray-400">

            <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between px-5">

                <NavLogo/>

                <div className="flex items-center gap-5">
                    <Link to="/dashboard">
                        <Button variant="default">Dashboard</Button>
                    </Link>

                    <Link to="/write-now">
                        <Button variant="primary">Escrever agora</Button>
                    </Link>
                </div>


 
            </div>

        </nav>
    );
}