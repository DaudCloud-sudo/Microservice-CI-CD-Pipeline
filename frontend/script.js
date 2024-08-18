document.getElementById("fetchDataBtn").addEventListener("click", () => {
  fetch("http://localhost:3000/data")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("data").innerText = `Received: ${data.message}`;
    })
    .catch((error) => console.log("Error fetching data:", error));
});
