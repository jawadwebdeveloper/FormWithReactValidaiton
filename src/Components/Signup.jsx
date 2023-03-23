import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import useForm from "./useForm";
import Validation from "./Validation";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";


function Signup({submitform}) {

  const  showAlert = () => {
    Swal.fire({
        title: "Thanks You Click me",
        text: "Good Luck",
        icon: "success",
        confirmButtonText: "OK",
      })
}

 const {handleChange , handleFormSubmit , inputval , errors} = 
 useForm(submitform)

 

//  const {handleChange , handleFormSubmit , inputval , errors} = useForm(
//     submitform
//  )

 useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);   


 const [isHover, setIsHover] = useState(false);

 
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const CustomStyle = {
    FormStyle: {
      background: "#FEFCFF",
      borderRadius: "2%",
    //   marginTop: "15%",
      padding: "10% 5% 10% 5%",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #fff",
    },
    btn: {
      // border'2px solid' : '',
      padding: "2% 7% 2% 7%",
      margin: "5% 5% 0% 35%",
      // boxShadow:isHover? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)":'',
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    btnn: {
      background:"#04007F",
      padding: "2% 7% 2% 7%",
      margin: "5% 5% 0% 35%",
      // boxShadow:isHover? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)":'',
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    svgg: {
      color: "#fff",
      width: "15%",
      height: "15%",
      marginLeft: "40%",
      marginBottom:"5%",
    //   border: isHover ? '' : "",
      marginTop: "10%",
      transform: isHover ? "scale(1.5)" : "",
    },
    
  
  };



 

//   body{
  
//     background-color:#04007F
//   }

  return (
    <div style={{background:"#04007F"}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            {/* <h2
              className="text-center"
              style={{ color: "#fff", }}
            > */}
              
              <svg
              onClick={showAlert}
                style={CustomStyle.svgg}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"></path>
              </svg>
            {/* </h2> */}
            {/* <form action="" style={CustomStyle.FormStyle} data-aos="zoom-in"> */}
            <form action="" style={CustomStyle.FormStyle} data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
              <label for="" class="form-label mb-3">

             

             <svg
                 
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
                </svg>{" "}
                
                User Name
              </label>
              <input
                type="text"
                class="form-control"
                id=""
                placeholder="Enter the Name"
                name="username"
                value={inputval.username}
                onChange={handleChange}
              />
                {errors.username && <p  style={{color:"red"}}>{errors.username}</p>}
              <label for="" class="form-label mt-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                </svg>
                Email address
              </label>
              <input
                type="email"
                id=""
                className="form-control"
                placeholder="name@example.com"
                name="email"
                value={inputval.email}
                onChange={handleChange}
              />
              
              {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

              <label for="" class="form-label mt-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"></path>
                  </g>
                </svg>
                Password
              </label>
              <input
                type="password"
                class="form-control input"
                id=""
                placeholder="Passowrd"
                name="password"
                value={inputval.password}
                onChange={handleChange}
              />
              
              {errors.password && <p  style={{color:"red"}}>{errors.password}</p>}
              <label for="" class="form-label mt-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"></path>
                  </g>
                </svg>
                Confirum Password
              </label>
              <input
                type="password"
                class="form-control input"
                id=""
                placeholder="Confurim Passowrd"
                name="confmpassword"
                value={inputval.confmpassword}
                onChange={handleChange}  
                />
                {errors.confmpassword && <p  style={{color:"red"}}>{errors.confmpassword}</p>}

               
                  <button
                      type="submit"
                      className="btn btn-primary "
                      style={CustomStyle.btn}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleFormSubmit}
                      
                      
                  >Submit</button>
               
                  
            </form>
            <button
                      className="btn btn-primary "
                      style={CustomStyle.btnn}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={showAlert}
                      
                      
                  >Click Me</button>

            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
