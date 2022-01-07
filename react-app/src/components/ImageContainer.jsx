import "../CSS/ImageContainer.css";
import { Link } from "react-router-dom";

function ImageContainer() {
    return (


        <div className="layout-container-grid">

            <div className="flex justify-center image-container-outer w-100">
                <div className="image-container">
                    <img className="front-image rounded-3xl w-100" src="https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Photo of children" />
                    
                    <div className="front-image-text">
                        <h1 className="image-header-text">Our Little Inspirations.</h1>
                        <Link to="/signup" className="flex justify-center signup-button-link">
                            <p className="join-today-text rounded-full">Join Today</p>
                        </Link>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default ImageContainer
