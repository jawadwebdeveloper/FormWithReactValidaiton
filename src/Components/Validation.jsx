import React from 'react'

function Validation(inputval) {

    let errors={};

    if(!inputval.username){
        errors.username="Name is required.";
    }
    if(!inputval.email){
        errors.email="email is required.";
    } else if(!/\S+@\S+\.\S+/.test(inputval.email)){
        
        errors.email="email is invalied."; 
    }
    if(!inputval.password){
        errors.password="Password is required.";
    }
    else if(inputval.password.length < 5){
        errors.password="password must be more then 5 chracters"
    }
    if(!inputval.confmpassword ){
        errors.confmpassword="Confirum password is required"
    }
    else if(inputval.confmpassword !== inputval.password ){
        errors.confmpassword="password didn't match"
    }

  return errors;
}

export default Validation