<?php
require 'database.php';

$sqlQuery = "SELECT * FROM food_table";
$allquery = mysqli_query($mysqli, $sqlQuery);
echo json_encode(mysqli_fetch_all($allquery, MYSQLI_ASSOC));

// echo '<img src="data:image/jpeg;base64,'.base64_encode( stripslashes($result['image']) ).'"/>';