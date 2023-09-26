const h_nav = document.querySelector('nav .h_nav ')
const close_icon = document.querySelector('nav #close')
const bars_icon = document.querySelector('nav #bars')
var click = false;
function nav_open() {
    if (click == false) {
        click = true;
        close_icon.style.display = "block";
        h_nav.style.display = "flex";
        h_nav.style.right = "0em";
        bars_icon.style.display = "none";
    }
    else {
        click = false;
        h_nav.style.display = 'none';
        h_nav.style.right = "-20em";
        close_icon.style.display = "none";
        bars_icon.style.display = "block";
    }
    console.log(click);
}


function downloadFile() {
    window.open("../file/Abhishek_Resume.pdf")
}

function openLink(link){
    window.location.href = "https://"+link;
}
