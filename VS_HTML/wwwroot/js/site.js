// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// Functions to animate text
// bounce function used to immitate the bounce of actual typing
// Learned from source: https://javascript.info/js-animation
function animateText(textArea) {
    let text = "This is the song Bright Beginning by Cloudchord. I first discovered it from a LoFi mix on Spotify and have enjoyed it ever since. -Brandin"
    let to = text.length,
        from = 0;

    animate({
        duration: 5000,
        timing: bounce,
        draw: function (progress) {
            let result = (to - from) * progress + from;
            textArea.value = text.substr(0, Math.ceil(result))
        }
    });
}


function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}