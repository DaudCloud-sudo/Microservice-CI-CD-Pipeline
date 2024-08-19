document.getElementById("fetchDataBtn").addEventListener("click", () => {
  fetch("http://localhost:3000/data") // Backend URL
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("data").innerText = `Received: ${data.message}`;
    })
    .catch((error) => console.log("Error fetching data:", error));
});
