import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../content/forUserContext";

function AltNavbar() {
  const globalUser = useContext(UserContext);

  const signOut = (e) => {
    console.log("testing signing out");
    globalUser.setUser(null);
  };

  return (
    <div className="flex nav-container shadow-md">
      <div className="p-2 flex-none block px-2 m-2">
        <Link to="/" className="web-app-title">
          Little Inspirations
        </Link>
      </div>

      <div className="p-2 flex-1 flex justify-between px-2 mx-2 w-100">
        <div className="links-container">
          <ul className="flex list-none mt-2">
            <li className="rounded-md">
              <Link to="/" className="hover:text-white p-2 mt-2">
                Home
              </Link>
            </li>

            <li className="rounded-md">
              <Link to="/about" className="hover:text-white p-2 mt-2 ">
                About
              </Link>
            </li>

            <li className="rounded-md">
              <Link to="/contact" className="hover:text-white p-2 mt-2 ">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="account-control-container">
          <div className="action-buttons">
            <ul className="flex list-none m-2">
              <li className="rounded-md">
                <Link
                  to="/account"
                  className="login-control hover:text-white p-2 mt-2 "
                >
                  Account
                </Link>
              </li>

              <li className="rounded-md">
                <a onClick={signOut} href="">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AltNavbar;
