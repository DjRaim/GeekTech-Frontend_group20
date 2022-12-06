const form = document.querySelector("form");
const inputs = form.elements;
const registeredUsers = [
    ["qwerty", "12345"],
    ["ytrewq", "54321"],
    ["zxcqwe", "10007"],
];

function Auth(name, password) {
    for(let i = 0; i < registeredUsers.length; i++) {
        let temp = registeredUsers[i];
        if (temp[0] === name) {
            var currentPair = temp;
            break;
        }
    }
    if (currentPair && currentPair[1] === password) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = inputs["login"].value;
    let password = inputs["password"].value;
    if (!Auth(name, password)){
        alert("Неверный логин или пароль");
    } else {
        alert("Ввод удался");
    }
});
