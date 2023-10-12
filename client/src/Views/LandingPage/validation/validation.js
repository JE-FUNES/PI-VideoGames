
  const Validation = (user) => { 
        const errors = {}
        
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
            errors.email = 'Wrong syntax.';
            }
            if(!user.email){ 
                errors.email = 'Complete your email, please.'
            }
            if(user.email.length >= 35){
                errors.email = 'The email cannot be more than 35 characters.'
                // El password debe tener entre 6 y 10 caracteres en ingles: The password must be between 6 and 10 characters.
            }
    
            if (user.password.length < 6 || user.password.length > 10){
                errors.password = 'Must be between 6 and 10 characters'
            }
            else if (!/\d/.test(user.password)) {
            errors.password = 'The password must contain at least 1 number.'
             }
    return errors;
        };
        
export default Validation;