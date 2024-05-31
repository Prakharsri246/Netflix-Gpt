import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    //Gradient in Tailwind css
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix-logo"
      ></img>
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12 " alt="user-icon" src={user?.photoURL} />
          <button className="font-bold text-white  " onClick={handleSignOut}>
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
