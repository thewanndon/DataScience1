// JavaScript source code

window.onscroll = function () { scrollFunction() };

const changePoint = 500
function scrollFunction() {
    const scPoint = document.documentElement.scrollTop
    var img = document.getElementById('greetings');
    if (scPoint < changePoint) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    }

}