// login ka code hai
// login ka code hai
// sab se pelay hum nay 2 input leya(email or password) hai or uss ko local storage may save karadeya per uss ko 2 or input leye (password or email)
// per unn dono ko ak alag alag variable may save kardeya per 
// local storage wala or variable walo ko compare karaya agr dono same hai tou dashborad per jayee ga warna message fail ka aye ga 

function login() {
    var get_email = document.querySelector('#get_email').value;
    console.log(get_email);
    var get_password = document.querySelector('#get_password').value;
    console.log(get_password);
    console.log(get_email, get_password);
    localStorage.setItem('email', get_email);
    localStorage.setItem('password', get_password);
    console.log("asdasd")
    window.location.href = 'customer_signup.html';

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
        location.href = 'customer_index.html';

    }
    else {
        alert('signUp fail')
        location.href = 'customer_signup.html';


    }


}

