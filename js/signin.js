const login_btn = document.querySelector("#login");

login_btn.onclick = (e) => {

    e.preventDefault();

    // user login input data
    const emaill = document.getElementById("email").value;
    const passs = document.getElementById("password").value;

    // stored login data
    const s_email = localStorage.getItem("Email");
    const s_pass = localStorage.getItem("Password");

    // conditions for login
    if(emaill == "" && passs == ""){
        swal("Oops..!", "Input fields is empty.", "warning");
    }else{
        if(emaill == s_email && passs == s_pass){
            swal("Successful", "You are signed in.", "success");
            return window.location.href='home.html';
        }else{
            swal("Oops..!", "Something is wrong.", "warning");
        }
    }

}