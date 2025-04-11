async function callAPI() {
    const response = await fetch("https://first-website-backend-spv7.onrender.com/api/hello");
    const data = await response.json();
    alert(data.message);
}

document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Verhindert das Standard-Formularverhalten

    const name = document.getElementById('name').value;

    const response = await fetch('https://first-website-backend-spv7.onrender.com/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    });

    const result = await response.json();
    alert(result.message);
});

// Funktion, um die Benutzerliste zu laden
async function loadUsers() {
    try {
        const response = await fetch('https://first-website-backend-spv7.onrender.com/api/users');
        const data = await response.json();

        const userList = document.getElementById('userList');
        userList.innerHTML = ''; // Liste leeren

        // Benutzer in die Liste einfügen
        data.users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Benutzername anzeigen
            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Fehler beim Laden der Benutzer:', error);
    }
}

// Benutzerliste beim Laden der Seite abrufen
window.onload = loadUsers;