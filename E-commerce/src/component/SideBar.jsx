import { Link } from "react-router-dom"
export function SideBar(){
    return<div className="flex flex-col">
        <Link to="/ProductListed">ProductListed</Link>
        <Link to="/ProductListing">ProductListing</Link>
    </div>
}