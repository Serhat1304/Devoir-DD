const toggle1 = document.getElementById('toggle1');
const response1 = document.getElementById('response1');
toggle1.addEventListener('change', function() {
    if (this.checked) {
        response1.style.display = 'block';
    } else {
        response1.style.display = 'none';
    }
});

const toggle2 = document.getElementById('toggle2');
const response2 = document.getElementById('response2');
toggle2.addEventListener('change', function() {
    if (this.checked) {
        response2.style.display = 'block';
    } else {
        response2.style.display = 'none';
    }
});

const toggle3 = document.getElementById('toggle3');
const response3 = document.getElementById('response3');
toggle3.addEventListener('change', function() {
    if (this.checked) {
        response3.style.display = 'block';
    } else {
        response3.style.display = 'none';
    }
});

const toggle4 = document.getElementById('toggle4');
const response4 = document.getElementById('response4');
toggle4.addEventListener('change', function() {
    if (this.checked) {
        response4.style.display = 'block';
    } else {
        response4.style.display = 'none';
    }
});