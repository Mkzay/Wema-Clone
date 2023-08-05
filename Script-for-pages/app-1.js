const txT1 = document.getElementById('text-1');
const txT2 = document.getElementById('text-2');
const img1 = document.getElementById('image-1');

let textS1 = [
    'Work or play?',
    'Dont just make moves,'
];

let textS2 = [
    'Go all out with ALAT',
    'Be Audacious'
];

let images = [
    '../images/amigo.svg',
    '../images/rafiki.svg'
];

let i = 0;
let k = 0;
let originalText1 = txT1.innerHTML;
let originalText2 = txT2.innerHTML;
let originalSrc1 = img1.src;

window.onload = function() {
    setTimeout(function() {
        if (i < textS1.length && i < textS2.length) {
            txT1.innerHTML = textS1[i];
            txT2.innerHTML = textS2[i];
            i++;
        } else {
            txT1.innerHTML = originalText1;
            txT2.innerHTML = originalText2;
            i = 0;
        }

        if (k < images.length) {
            img1.src = images[k];
            k++;
        } else {
            img1.src = originalSrc1;
            k = 0;
        }

        setTimeout(arguments.callee, 10000);
    }, 1000);
};

const logIn = document.getElementById('log-In');

logIn.addEventListener('click', function(){
    window.location.href = 'Sign-In.html';
});