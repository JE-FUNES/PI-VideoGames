
const Validation = (user) => { 
    const errors = {}
    
        if(!user.login){ 
            errors.login = 'Completa tu nombre por favor.'
        }
        else if(user.login.length >= 10){
            errors.login = 'El nombre no puede tener más de 10 caracteres.'
        }
return errors;
    };
    
export default Validation;