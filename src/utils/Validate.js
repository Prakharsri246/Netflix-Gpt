export const  checkValidate=(email,password)=>{
 

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);
    const passPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    const passwordValidate= passPattern.test(password);

     if(isValid === false) return "Email is not Valid";
     if(passwordValidate === false) return "Password is not valid " ;
    
    return null;
}