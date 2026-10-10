// Initialisation d'EmailJS avec votre Public Key
emailjs.init("xhzYZTyMQ8OHZf4x1");

let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let matricule = document.getElementById('matricule');
let email = document.getElementById('email');
let numero = document.getElementById('numero');
let commune = document.getElementById('commune');
let formulaire = document.getElementById('Formulaire');
let serie= document.getElementById('serie');

// Fonction pour générer le code unique incrémenté (ex: RB26-001)
function genererCodeUnique() {
    let dernierNumero = parseInt(localStorage.getItem('dernier_numero_recap')) || 0;
    let nouveauNumero = dernierNumero + 1;
    localStorage.setItem('dernier_numero_recap', nouveauNumero);
    
    let numeroFormate = String(nouveauNumero).padStart(3, '0');
    return `RB26-${numeroFormate}`;
}

formulaire.addEventListener('submit', function(event) {
    event.preventDefault();

    const nom1 = nom.value;
    const prenom1 = prenom.value;
    const matricule1 = matricule.value;
    const email1 = email.value;
    const numero1 = numero.value;
    const commune1 = commune ? commune.value : "";
    const codeUnique = genererCodeUnique();
    const serie1=serie.value

    let infos_inscrit = {
        nom: nom1,
        prenom: prenom1,
        matricule: matricule1,
        email: email1,
        numero: numero1,
        commune: commune1,
        code_unique: codeUnique,
        serie:serie1

    };

    // Remplacez "VOTRE_TEMPLATE_ID" par l'ID de votre modèle EmailJS
    emailjs.send("service_wk12acq", "template_wabkrkr", infos_inscrit)
        .then(function(response) {
            alert(`Inscription réussie ! Votre code unique est : ${codeUnique}`);
            formulaire.reset();
        }, function(error) {
            alert("Erreur lors de l'envoi du mail. Veuillez réessayer.");
            console.error("Détail de l'erreur :", error);
        });
});