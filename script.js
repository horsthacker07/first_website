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