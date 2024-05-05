

function login() {
    var get_email = document.querySelector('#get_email').value;
    console.log(get_email);
    var get_password = document.querySelector('#get_password').value;
    console.log(get_password);
    console.log(get_email, get_password);
    localStorage.setItem('email', get_email);
    localStorage.setItem('password', get_password);
    window.location.href = 'customer_signup.html';

}

// signup ka code hai

function signup() {
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

