const title = document.getElementById('name');
const button = document.getElementById('changebutton');

button.addEventListener('click', () => {
    if(title.textContent == "PRACHI"){
        title.textContent = "AARUHI";
    }
    else if(title.textContent == "AARUHI"){
        title.textContent = "PRACHI"
    }
});


