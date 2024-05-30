export const  checkValidate=(username,password)=>{
 
    console.log("va;idate")
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(username);
    const passwordValidate= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     if(!emailValidate) return "Email is not Valid";
     if(!passwordValidate) return "Password is not valid ";
     return null; 
}