document.getElementById('signupForm').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let other = document.getElementById('other').checked;

    if (!email.includes('@')) {
        alert('Please enter a valid email address containing @');
        return;
    } 
    else if (phone.length !== 11) {
        alert('Phone number must be 11 digits long!');
        return;
    } 
    else if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
       return;
    } 
    else if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    } 
    else if (!male && !female && !other) {
        alert('Please select your gender!');
        return;
    }
});