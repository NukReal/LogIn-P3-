var userName = prompt("Enter your login details");
var userPassword = prompt("Enter your password");

switch(true) {
    case userName === "Nukri" && userPassword === "1111":
        alert("Welcome Nukri");
        break;
    case userName === "Vato" && userPassword === "2222":
        alert("Welcome Vato");
        break;
    case userName === "Liana" && userPassword === "3333":
        alert("Welcome Liana");
        break;
    case userName === "Giorgi" && userPassword === "4444":
        alert("Welcome Giorgi");
        break;
    case userName === "Admin" && userPassword === "1111":
        alert("You can edit website");
        break;
    default :
        alert("Your password is incorrect");
        break;                    
}