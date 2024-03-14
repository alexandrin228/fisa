function total() {
    let produs1 = document.getElementById("p1").value;
    let produs2  = document.getElementById("p2").value;
    produs1 = Number (produs1);
    produs2 = Number (produs2);
    
    let suma = (produs1 + produs2 );
    document.getElementById("rezultat").innerHTML = "Pretul total este =" + suma.toFixed(2);
}