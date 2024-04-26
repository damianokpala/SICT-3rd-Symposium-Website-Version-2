function downloadCSV() {
  // URL to the PHP script that fetches and generates CSV data
  const url = "../backend/fetch.php";

  // Use fetch API to initiate download
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((csvContent) => {
      // Create Blob containing CSV content
      const blob = new Blob([csvContent], { type: "text/csv" });

      // Create download link
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "users.csv";

      // Append link to the body and trigger download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
