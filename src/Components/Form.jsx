import React, { useState } from 'react'
import Signup from './Signup'
import SubmitionForm from './SubmitionForm';

function Form() {

    const [formissubmit , setFormissubmit] = useState(false);
    const submitform = ()=>{
        setFormissubmit(true);
    }
  return (
    <div>
        {/* {!formissubmit ? <Signup submitform={submitform}/> : <SubmitionForm/> } */}
        {!formissubmit ? <Signup submitform={submitform}/> : <SubmitionForm />  }
       
    
    </div>
  )
}

export default Form