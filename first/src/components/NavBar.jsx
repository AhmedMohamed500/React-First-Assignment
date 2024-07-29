
// import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        
        <div>
            <ul className="bg-indigo-950 font-bold flex justify-around items-center p-4 fixed top-0 left-0 right-0	">
            <h1 className="text-white">START FRAMEWORK</h1>

            <li>
                <a className="text-white" >About</a>
            </li>
            <li>
                <a className="text-white" >Portofolio</a>
            </li>
            <li>
                <a className="text-white" >Contact</a>
            </li>
        </ul>

        </div>
    )
}
