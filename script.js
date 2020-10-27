var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = lowerCase.toUpperCase();
var numbers = '0123456789';
var symbols = '!@#$%^&*';
var options = '';
var choices = [];

var password = document.getElementById('password');
var requestedPassword;

var slider = document.getElementById("slider");
var output = document.getElementById("slideVal");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function buttonClick(event) {
    event.preventDefault();
    getPass();
};

function getRandom(arr) {
     var index = Math.floor(Math.random() * arr.length);
     var selIndex = arr[index];
     return selIndex;
    };

function getPass() {
    for (i = 0; i < document.getElementById('slider').value; i++) {
        console.log(i);
        if (document.getElementById("lowercase").checked === true) {
            options += lowerCase;
        }
        if (document.getElementById("uppercase").checked === true) {
            options += upperCase;
        }
        if (document.getElementById("numbers").checked === true) {
            options += numbers;
        }
        if (document.getElementById("symbols").checked === true) {
            options += symbols;
        }
        choices.push(getRandom(options));
        console.log(options);
    };
    password.value = choices.join('');
};