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
    if(uname == "" && email == "" && pass == "" && cpass == ""){
        swal("Oops..!", "Input fields is empty.", "warning"); // warning, info, error, success
    }else{
        if(pass !== cpass){
            swal("Oops..!", "Password is not matching.", "warning");
        }else{
            swal("Successful", "Your registration is complete.", "success");
        }
    }
}
