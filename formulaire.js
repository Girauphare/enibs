/*fonction envoyer pour gérer la soumission du formulaire*/
function envoyer(event){
    /*recupere l'element formulaire avec identification "contact-form"*/
    const form = document.getElementById('contact-form');
    /*encode l'objet du message du formulaire pour l'inclure dans une URL*/
    const subject = encodeURIComponent(form.subject.value);
    /*encode le corps du message du formulaire poour l'inclure dans une url*/
    const body = encodeURIComponent(
        `Nom: ${form.nom.value}\n` + /*recupere et encode le nom de famille*/
        `Prénom: ${form.prenom.value}\n` +
        `Email: ${form.email.value}\n` +
        `Date de naissance: ${form.date.value}\n` +
        `Formations souhaitées: ${form.formations.value}\n` +
        `Actuellement, vous êtes: ${form.année.value}\n` +
        `Langues parlées: ${Array.from(form.langue).filter(langue => langue.checked).map(langue => langue.value).join(',')}\n\n` +
        /*form,langues,checkbox,array,from(form.langues):converti checkbox en tableau*/
        /*filter(langue => langue.checked):checked est vrai*/
        /*map(langue => langue.value):crée un nouveau tableau contenant les valeurs de checkbox cochées*/
        /*join(','):les éléments du tableau en une seule chaîne de caractère*/
        `Demande spécifique:\n${form.demande.value}`
    );
    /*rediriger vers une messagerie*/
    window.location.href = `mailto:ahl.giraud@gmail.com?subject=${subject}&body=${body}`;
}
