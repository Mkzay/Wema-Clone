const backToOtherScreen = document.getElementById('back');

backToOtherScreen.addEventListener('click', function(){
    window.location.href = 'Onboarding-Screen.html';
});

const passWord = document.getElementById('password');
const changeIcon = document.getElementById('changeIcon');

changeIcon.addEventListener('click', function() {
    if (passWord.type === 'text') {
        passWord.type = 'password';
        changeIcon.classList.remove('fa-eye-slash');
        changeIcon.classList.add('fa-eye');
    } else {
        passWord.type = 'text';
        changeIcon.classList.remove('fa-eye');
        changeIcon.classList.add('fa-eye-slash');
    }
});