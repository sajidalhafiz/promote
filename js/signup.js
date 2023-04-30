// select submit button element
const submit_btn = document.querySelector("#submit");

// perform onclick event on button
submit_btn.onclick = (e) => {

    e.preventDefault();

    const uname = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const cpass = document.getElementById("cpassword").value;


    // store input data to the local storage of browser
    localStorage.setItem("UserName", uname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pass);
    localStorage.setItem("ConfirmPass", cpass);


    // conditions for input validation
    if (uname === "" && email === "" && pass === "" && cpass === "") {
        return swal("Oops..!", "Input fields are empty.", "warning"); // warning, info, error, success
    }
    else {
        if (!isValidUser(uname) || uname === "") {
            swal("Oops..!", "Username is not valid or empty field.", "warning");
        }
        else if (!isValidEmail(email) || email === "") {
            swal("Oops..!", "Email is not valid.", "warning");
        }
        else if (!isValidPass(pass) || pass === "") {
            swal("Oops..!", "Password is not valid or empty password field.", "warning");
        }
        else if (pass !== cpass) {
            swal("Oops..!", "Password is not matching.", "warning");
        }
        else {
            swal("Successful", "Your registration is complete.", "success");
            return window.location.href = 'signin.html';
        }
    }
}

// validation code

function isValidUser(input_uname) {
    const uname_regex = /^[a-z\d_-]{5,12}$/;
    const uname_parent_div = document.getElementById("username").parentElement;

    if (input_uname.match(uname_regex)) {
        //success class will be added
        uname_parent_div.className = 'input-elements success';
        return true;
    } else {
        //error class will be added 
        uname_parent_div.className = 'input-elements error';
        return false;
    }
}

function isValidEmail(input_email) {
    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email_parent_div = document.getElementById("email").parentElement;

    if (input_email.match(email_regex)) {
        //success class will be added
        email_parent_div.className = 'input-elements success';
        return true;
    } else {
        //error class will be added 
        email_parent_div.className = 'input-elements error';
        return false;
    }
}

function isValidPass(input_pass) {
    const pass_regex = /^[\d\w@-]{8,20}$/;
    const pass_parent_div = document.getElementById("password").parentElement;

    if (input_pass.match(pass_regex)) {
        //success class will be added
        pass_parent_div.className = 'input-elements success';
        return true;
    } else {
        //error class will be added 
        pass_parent_div.className = 'input-elements error';
        return false;
    }
}