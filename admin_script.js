
function login() {
    var get_email = document.querySelector('#get_email').value;
    console.log(get_email);
    var get_password = document.querySelector('#get_password').value;
    console.log(get_password);
    console.log(get_email, get_password);
    localStorage.setItem('email', get_email);
    localStorage.setItem('password', get_password);
    console.log("asdasd")
    window.location.href = 'admin_signup.html';

}

// signup ka code hai

function signup() {
    console.log("wwhat is this")
    var get_email = document.querySelector('#get_email').value;
    console.log(get_email);
    var get_password = document.querySelector('#get_password').value;
    console.log(get_password);
    if (localStorage.getItem('email') === get_email && localStorage.getItem('password') === get_password) {
        alert('signUp success')
        location.href = 'admin_dashborad.html';

    }
    else {
        alert('signUp fail')
        location.href = 'admin_signup.html';


    }


}

let a = document.getElementById('item_name').value
let b = document.getElementById('item_price').value
let c = document.getElementById('item_desc').value

function show() {
    let a = document.getElementById('item_name').value;
    let b = document.getElementById('item_price').value;
    let c = document.getElementById('item_desc').value;

    document.getElementById('details').innerHTML = "Name: " + a + "<br>Price: " + b + "<br>Description: " + c;
}

// item_name
// item_price
// item_desc