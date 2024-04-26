<?php

include "./includes/connect.php";


// Retrieve form data
$name = $_POST['fullname'];
$email = $_POST['email'];
$contact = $_POST['phone'];

// Insert data into database
$sql = "INSERT INTO my_table (fullname, email, contact) VALUES ('$name', '$email', '$contact')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>