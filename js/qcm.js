// qcm.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('qcmForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        // Get selected character
        const character = form.character.value;

        // Get selected goal
        const goal = form.goal.value;

        // Get selected sports
        const sports = Array.from(form.sports)
                            .filter(s => s.checked)
                            .map(s => s.value);

        // Show result
        resultDiv.innerHTML = `
            <p>Vous êtes <strong>${character}</strong> !</p>
            <p>Votre objectif principal : <strong>${goal}</strong></p>
            <p>Sports choisis : <strong>${sports.join(', ') || 'Aucun'}</strong></p>
            <p>Prochaine étape : <a href="instructions.html" style="color:#FFB703;">Voir vos instructions personnalisées</a></p>
        `;

        // Optional: Store profile in localStorage for next page
        localStorage.setItem('profile', JSON.stringify({ character, goal, sports }));
    });
});
