import { toast } from "react-toastify"


export const validateLogin = (email, password )=>{

    const errors = []

    if(!email){
        errors.push("Please add your email")
      }
      if(!password){
        errors.push("Please add your password")
      }

      return errors
}