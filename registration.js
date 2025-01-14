document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const strengthMessage = checkPasswordStrength(password);
    alert(strengthMessage);

    if (password !== confirmPassword) {
        alert("პაროლები არ ემთხვევა");
        return;
    }


    this.submit();
});

function checkPasswordStrength(password) {
    let strengthMessage = "";
    const regexWeak = /^[a-zA-Z]+$/; 
    const regexMedium = /^[a-zA-Z0-9]+$/;
    const regexStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;

    if (regexWeak.test(password)) {
        strengthMessage = "პაროლი შეიცავს მხოლოდ ინგლისური ანბანის სიმბოლოებს - სუსტი";
    } else if (regexMedium.test(password)) {
        strengthMessage = "პაროლი შეიცავს ინგლისური ანბანის სიმბოლოებს და რიცხვებს - საშუალო";
    } else if (regexStrong.test(password)) {
        strengthMessage = "პაროლი შეიცავს ინგლისური ანბანის დიდ და პატარა სიმბოლოებს, ასევე რიცხვებს - ძლიერი";
    } else {
        strengthMessage = "პაროლი არ აკმაყოფილებს საჭირო პირობებს.";
    }

    return strengthMessage;
}

