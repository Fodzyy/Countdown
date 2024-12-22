const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Définir la date de retour
const dateDeRetour = new Date('December 23, 2024 16:30:00');

function mettreAJour() {
    const dateActuel = new Date(); // Mettre à jour la date actuelle à chaque appel
    const diff = dateDeRetour - dateActuel;

    if (diff >= 0) { // Vérifier que la date n'est pas dépassée
        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const h = Math.floor(diff / 1000 / 60 / 60) % 24;
        const m = Math.floor(diff / 1000 / 60) % 60;
        const s = Math.floor(diff / 1000) % 60;

        // Mettre à jour les éléments HTML
        days.innerHTML = '<h2>'+ d + '</h2>';
        hours.innerHTML ='<h2>'+ h + '</h2>';
        minutes.innerHTML = '<h2>'+ m + '</h2>';
        seconds.innerHTML = '<h2>'+ s + '</h2>';
    } else {
        // Si la date est atteinte, afficher un message
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
        clearInterval(interval); // Arrêter l'intervalle
        console.log("Le compte à rebours est terminé !");
    }
}

// Appel initial pour éviter un délai d'une seconde
mettreAJour();

// Mettre à jour chaque seconde
const interval = setInterval(mettreAJour, 1000);
