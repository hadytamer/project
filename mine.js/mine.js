function Autofill() {
var userEmail = document.getElementById("EmailInput").value;
var placeOfAt = userEmail.indexOf("@");
var userName = userEmail.substring(0, placeOfAt); 
document.getElementById("userNameInput").value = userName;

var userDomain = userEmail.substring(placeOfAt+1)
console.log(userDomain)
document.getElementById("userDomain").value = userDomain;






}