document.querySelector("#formularioRegistro").
addEventListener("submit",function(event) {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    console.log(email);
    console.log(password);

    const errorMail = document.querySelector("#errorMail");

    const regexEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regexEmail.test(email)) {
        console.log("el email no es válido");
        errorMail.textContent= "El email no es válido";
        errorMail.style.display= "block";
    }
    // email.textContent = "";
    // password.textContent = "";


});