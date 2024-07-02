let string = "";
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.innerText == "=") {
            string = eval(string);
        }
        else if (event.target.innerText == "AC") {
            string = "";
        }
        else if (event.target.innerText == "%") {
            string = string/100;
        }
        else if (event.target.innerText == "!") {
            for(let i=1; i<document.querySelector('input').value; i++){
                string *= i;
            }
        }
        else {
            console.log(event.target);
            string += event.target.innerText;
        }
        document.querySelector('input').value = string;
    })
})