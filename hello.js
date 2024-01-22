document.getElementById("button").addEventListener("click",validatePassword);
function validatePassword() {
    let p = document.getElementById('passwd').value;
    let cp = document.getElementById('confirmpasswd').value;
    let errmsg=document.getElementById("msg");
    errmsg.innerHTML = ''; 

    if (p === "" || cp === "") {
        errmsg.textContent="Password is Empty";
        errmsg.style.color="red";
    }
    else if (p === cp) {
        errmsg.textContent="Password is valid";
        errmsg.style.color="green";
    } else {
        errmsg.textContent="Password and Confirm Password does not match";
        errmsg.style.color="red";
    }
}
window.onload = function() {
    document.getElementById("passwd").value = "";
    document.getElementById("confirmpasswd").value = "";
};