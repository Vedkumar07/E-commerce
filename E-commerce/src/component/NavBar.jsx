import { Link } from "react-router-dom";


export function Header(){
    return<div>
        <Link to="/">LandingPage </Link>
        <Link to="/auth">auth </Link>
        <Link to="/product">Product </Link>
        <Link to="/cart">cart </Link>
    </div>
}