 const validateRegForm = (email , pass, pass2) => {


    const error = {}
    // eslint-disable-next-line
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email)) {
      error.email = "Invalid email" ;
    }
    if(!pass.trim())
    {
      error.password = "This field is required"
    }
     else if(pass.length < 4)
    {
        error.password = "Password must have at least 4 letters"
    }
    

    if (!pass2.trim()) {
      error.confirmPassword =
          "This field is required";
    }
    else if (pass !== pass2 )
    {
        error.confirmPassword =
          "Passwords do not match";
    }
   
    return error
  };
  const validateLoginForm = (email , pass) => {


    const error = {}
    // eslint-disable-next-line
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email)) {
      error.email = "Invalid email" ;
    }
    if(!pass.trim())
    {
      error.password = "This field is required"
    }
     else if(pass.length < 4)
    {
        error.password = "Password must have at least 4 letters"
    }
    
    return error
  };

  export {validateRegForm, validateLoginForm}