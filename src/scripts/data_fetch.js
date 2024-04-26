// Function to fetch data from PHP script
const tableBody = document.querySelector(".tbody");
tableBody.innerHTML = "";

function fetchData() {
  fetch("../backend/fetch.php")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector(".tbody");

      // Clear existing table rows
      tableBody.innerHTML = "";

      // Loop through the fetched data and populate table rows
      data.forEach((user) => {
        const row = document.createElement("tr");
        console.log(row);
        row.classList.add("bg-lightgreen", "text-white");
        console.log(row);
        row.innerHTML = `
                            <td class="py-3 px-6">${user.id}</td>
                            <td class="py-3 px-6">${user.fullname}</td>
                            <td class="py-3 px-6">${user.email}</td>
                            <td class="py-3 px-6">${user.contact}</td>
                        `;

        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Call fetchData() when the page loads
window.onload = fetchData;
