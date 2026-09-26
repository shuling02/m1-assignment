const contactMethod = document.getElementById("contactMethod");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");

contactMethod.addEventListener("change", function(){

    if(contactMethod.value === "email"){
        emailInput.style.display = "block";
        phoneInput.style.display = "none";
    }

    else if(contactMethod.value === "phone"){
        phoneInput.style.display = "block";
        emailInput.style.display = "none";
    }

    else {
        emailInput.style.display = "none";
        phoneInput.style.display = "none";
    }
});