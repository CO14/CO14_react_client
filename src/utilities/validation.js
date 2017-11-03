// Validation for email address
const validEmailAddress = useremail => {
    const email = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    if (useremail.match(email)) {
        return true;
    } else {
        return false;
    }
};

// Validation for password, Password must contain be 8-16 charachters, contain 1 upper and lower case, 1 numeric and a special character
const validPassword = userPassword => {
    const password = new RegExp(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/
    );
    if (userPassword.match(password)) {
        return true;
    } else {
        return false;
    }
};

const Validation = {
    // User Validation
    isUserValid: account => {
        const hasValidFirstName =
            typeof account.first_name === "string" &&
            account.first_name.trim() !== "";
        const hasValidLastName =
            typeof account.last_name === "string" &&
            account.last_name.trim() !== "";
        const hasValidEmail = validEmailAddress(account.email);
        const hasValidPassword = validPassword(account.password);
        return (
            hasValidEmail &&
            hasValidFirstName &&
            hasValidLastName &&
            hasValidPassword
        );
    },
    // Validation for Login
    isLoginValid: account => {
        const hasValidEmail = validEmailAddress(account.email);
        const hasValidPassword = validPassword(account.password);
        return hasValidEmail && hasValidPassword;
    }
};

export default Validation;
