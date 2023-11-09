// JavaScript source code

window.onscroll = function () { scrollFunction() };

const checkpoints = [0, 500, 1000, 1500, 10000]
const images = ['greetings', 'postcard', 'crater']



scrollFunction()
function scrollFunction() {
    
    // Example for loop
    for (let i = 1; i < 4; i++) {
        var checkImage = document.getElementById(`check${i}`);
        checkImage.style.top = `${checkpoints[i] - document.documentElement.scrollTop + 25}px`;
        checkImage.style.left = "25px";
    }

    for (let i = 0; i < images.length; i++) {
        const scPoint = document.documentElement.scrollTop
        var img = document.querySelector('img[src="'+images[i]+'.png"]');
        if (scPoint >= checkpoints[i] && scPoint < checkpoints[i + 1]) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    }

}
