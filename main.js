function obliczanie()
{
    let a = document.getElementById("liczba_a").value;
    let b = document.getElementById("liczba_b").value;
    a = parseFloat(a);
    b = parseFloat(b);
    let pole = (a * b + " j^2");
    document.getElementById("wynik").innerHTML = pole;
}