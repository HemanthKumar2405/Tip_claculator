let one = document.getElementById("billAmount");
let two = document.getElementById("percentageTip");
let three = document.getElementById("tipAmount");
let four = document.getElementById("totalAmount");
let fin = document.getElementById("errorMessage");

function cal() {
    let a = one.value;
    let b = two.value;
    let c = parseInt(a);
    let d = parseInt(b);

    if (isNaN(c) || isNaN(d)) {
        fin.textContent = "Please Enter a Valid Input";
        fin.style.color = "red";
    } else {
        fin.textContent = "";
        let calculatedtip = (d / 100) * c;
        let totalAmount = c + calculatedtip;
        three.value = calculatedtip;
        four.value = totalAmount;
    }
}
