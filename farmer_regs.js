function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email.trim())) {
      alert(
        'Please enter a valid email address '
      );
      return false;
    }

      // Pattern for alphanumeric and 3-20 characters long
      var usernameRegex = /^[A-Za-z0-9]{3,20}$/;

      if (!usernameRegex.test(username)) {
          alert('Username must be alphanumeric and 3-20 characters long');
          return false;
      }

    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number');
      return false;
    }

    var passwordRegex =
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        'Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, one digit, and one special character'
      );
      return false;
    }

    alert('Thank you for registering!');
    return true;
  }