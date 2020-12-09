let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault(); // empeche le raffraichissement de la page

let candidat1 = Number.getElementById("candidat1").value;
let candidat2 = Number.getElementById("candidat2").value;
let candidat3 = Number.getElementById("candidat3").value;
let candidat4 = Number.getElementById("candidat4").value;
let resultat = Number(document.getElementById("resultat").value);

if (candidat1 > 50 || candidat2 > 50 || candidat3 > 50 || candidat4 > 50 ) {

    document.write(' ELU ');

} else if (candidat1 < 50 || candidat2 < 50 || candidat3 < 50 || candidat4 < 50 ) {

    document.write(' BATTU ');

} else if ( candidat1 >= 12,5 || candidat2 >= 12,5 || candidat3 >= 12,5 || candidat4 >= 12,5) {

    document.write(' Passage au deuxieme Tour ');

}
})