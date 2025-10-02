"use strict";
const userValidator = {
    validateRegister : function(formData){
        let errors = [];

        let fullName = formData.get("fullName");
        let username = formData.get("username");
        let password = formData.get("password");
        let password2 = formData.get("password2");

        if (fullName.length < 3 || username.length < 3){
            errors.push("The first name and the username should have more than 3 characters");
        }

        if(password!= password2){
            errors.push("The paswords must match");
        }
        
        return errors;
    },
};

export{userValidator};
    


