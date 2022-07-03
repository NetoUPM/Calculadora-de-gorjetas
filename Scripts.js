function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let ServiceQual = document.getElementById('ServiceQual').value;
    let People = document.getElementById('people').value;

    if (bill == '' | ServiceQual == 0){
        alert("Por favor preencha os campos")
        return;
    }

    if (People == "" | People <=1){
        People = 1;
        document.getElementById('each').style.display ="none"
    }   else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * ServiceQual) / People;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTips').style.display  = "block";

}

document.getElementById('totalTips').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('FormTips').addEventListener('submit', calculateTip);