import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSiginForm, setIsSiginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  //UseRef
  const email = useRef(null);
  const password = useRef(null);

  const toggleSiginForm = () => {
    setIsSiginForm(!isSiginForm);
  };
  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSiginForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" +  errorMessage)
          
        });
    } //Sign In Logic
    else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" +  errorMessage)
  });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src=" https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg
        "
          alt="login-baground"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSiginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSiginForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 "
        />

        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="py-4 text-lg font-bold text-red-600">{errorMessage}</p>
        <button
          className="p-4  my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSiginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSiginForm}>
          {" "}
          {isSiginForm
            ? "Are you new to Netflix? Sign Up Now"
            : "Already Registered ? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
