import { Link } from "react-router-dom";

export default function AboutPageLink() {

    return(
        <div className="about-link">
            <Link to="/about">
                <p>Click me to go to About Page</p>
            </Link>
        </div>
    );
}