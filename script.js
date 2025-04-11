async function callAPI() {
    const response = await fetch("https://first-website-backend-spv7.onrender.com/api/hello");
    const data = await response.json();
    alert(data.message);
}