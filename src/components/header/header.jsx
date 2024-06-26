import { Link } from "react-router-dom";
import "./header.css"
import { React } from "react";

export default function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"></img></Link>
                <Link to="/movies/popular" className="link"><span>Popular</span></Link>
                <Link to="/movies/top_rated" className="link"><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" className="link"><span>Upcoming</span></Link>
            </div>
        </div>
    )
}