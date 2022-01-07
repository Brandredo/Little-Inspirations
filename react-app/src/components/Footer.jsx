import "../CSS/Footer.css";
import { FaFacebook, FaEnvelope, FaCopyright} from "react-icons/fa";


function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer-section">
                
                
                <ul className="flex social-links">

                    <li>
                        <a href="https://www.facebook.com/Little-Inspirations-Family-Child-Care-1481974792049748">
                            <span><FaFacebook className="social-button"/></span>
                        </a>
                    </li>
                    
                    <li>
                        <a href="mailto:LittleInspirationsCare@gmail.com">
                            <span><FaEnvelope className="social-button"/></span>
                        </a>
                    </li>
                    
                    

                </ul>

                <div className="copyright">
                <FaCopyright className="inline"/>
                <span className="copyright-detail ml-2">Created by Brandon Figueredo</span>

                </div>
                
                
        
            </footer>
        </div>
    )
}
          
export default Footer
