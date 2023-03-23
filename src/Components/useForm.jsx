import React, { useEffect, useState } from 'react'
import Validation from "./Validation";

import Swal from "sweetalert2";
function useForm(submitform) {

    const [errors , setErrors ] = useState({});
 const [detailCorect , setDetailCorect] = useState(false);
  const [inputval, setInputval] = useState({
    username: "",
    email: "",
    password: "",
    confmpassword: "",
  });

  const handleChange= (event)=>{
    console.log("🚀 ~ file: Signup.jsx:20 ~ handleChange ~ handleChange:", handleChange)
    setInputval({
        ...inputval,
        [event.target.name]: event.target.value,
    })

  }

  // Swal.fire({
  //   title: "Success",
  //   text: "Alert successful",
  //   icon: "success",
  //   confirmButtonText: "OK",
  // }).then(function () {
  //   handleFormSubmit()
  //   });



  const handleFormSubmit = (event) => {
    
    event.preventDefault();
    setErrors(Validation(inputval));
    setDetailCorect(true)
  };
  


    useEffect(()=>{
        if(Object.keys(errors).length === 0 && detailCorect){
           submitform(true); 
        }
    },[errors])





  return {handleChange , handleFormSubmit , inputval , errors}
}

export default useForm