import { Link } from "react-router-dom";


export function Header(){
    return<div>
        <Link to="/">LandingPage </Link>
        <Link to="/auth">auth </Link>
        <Link to="/buisnessauth">Buisness </Link>
        <Link to="/Account">Account</Link>
    </div>
}