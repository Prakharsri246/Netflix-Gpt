import React ,{useEffect} from "react";
import { signOut ,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser , removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    //Subscribing to auth change -- 
const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //User Sign ,Sign up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        //When user is logout
        dispatch(removeUser);
        navigate("/")
      }
    });
    //unsubscribe onAuth change - whenever components unmount
    return ()=> unsubscribe();
  }, []);
  return (
    //Gradient in Tailwind css
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src={LOGO}
        alt="Netflix-logo"
      ></img>
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12 " alt="user-icon" src={user?.photoURL} />
          <button className="font-bold text-white hover:bg-red-900 bg-red-600 cursor-pointer rounded-lg mx-2 px-4" onClick={handleSignOut}>
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
