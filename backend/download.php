<?php

include "./includes/connect.php";

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Query to fetch data from database table (e.g., users)
$sql = "SELECT fullname, email, contact FROM users";
$result = $conn->query($sql);

// Check if any rows were returned
if ($result->num_rows > 0) {
    // Initialize CSV content
    $csvContent = "Full Name,Email,Contact\n";

    // Loop through the result set and append data to CSV content
    while ($row = $result->fetch_assoc()) {
        $csvContent .= "{$row['fullname']},{$row['email']},{$row['contact']}\n";
    }

    // Set appropriate headers for CSV download
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="users.csv"');

    // Output CSV content
    echo $csvContent;
} else {
    echo "No data found";
}

// Close database connection
$conn->close();