<?php

include "./includes/connect.php";

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Query to fetch data from users table
$sql = "SELECT id, fullname, email, contact FROM my_table";
$result = $conn->query($sql);

$result = $conn->query($sql);

if (!$result) {
  die("Error executing query: " . mysqli_error($conn));
}

// Check if any rows were returned
if ($result->num_rows > 0) {
  // Fetch associative array of the result
  $rows = array();
  while ($row = $result->fetch_assoc()) {
      $rows[] = $row;
  }
  // Output JSON encoded data
  echo json_encode($rows);
} else {
  echo "No data found";
}

// Close connection
$conn->close();
?>
