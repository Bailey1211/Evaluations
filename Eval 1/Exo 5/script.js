function calculAge(){

    let name = document.getElementById("name").value;
    let firstName = document.getElementById("firstName").value;
    let birthDate = new Date(document.getElementById("birthDate").value);

    let date = new Date();

    let birthDay = birthDate.getDate();

    let birthMonth = birthDate.getMonth()+1;

    let birthYear = birthDate.getFullYear();

    let dateDay = date.getDate();

    let dateMonth = date.getMonth() +1;

    let dateYear = date.getFullYear();

    let diff = date - birthDate;

    let days = parseInt(diff / 1000 / 60 / 60 / 24);

    let years = parseInt(days / 365.25);

    let anniversaire = birthDay === dateDay && birthMonth === dateMonth;

    if(anniversaire){
        // J'arrive a tout afficher correctement mais le resultat ( ligne en dessous) ne s'affiche pas du tout, j'ai essayer de mettre une alerte mais ca change rien
        document.getElementById("result").innerHTML = alert("Joyeux anniversaire " + firstName + " " + name + " !");
    }
    else {
        // IDEM ici pourtant les variables sont bonnes il me semble... Ca m'affiche les données rentrés mais dans l'URL de la page.
        document.getElementById("result").innerHTML = alert("Vous avez " + years + " ans.");
    }
    console.log(anniversaire);

}