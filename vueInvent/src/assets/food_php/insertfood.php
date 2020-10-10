<?php
require 'database.php';

$msg = "";
  // Get image name
  $image = $_FILES['myfile']['name'];
  // Get text
  $time = mysqli_real_escape_string($mysqli, $_POST['mytime']);
  $date = mysqli_real_escape_string($mysqli, $_POST['mydate']);
  $name = mysqli_real_escape_string($mysqli, $_POST['myname']);
  $price = mysqli_real_escape_string($mysqli, $_POST['myprice']);
  $quantity = mysqli_real_escape_string($mysqli, $_POST['myprice']);
  $detail = mysqli_real_escape_string($mysqli, $_POST['mydetail']);
  $availability = mysqli_real_escape_string($mysqli, $_POST['myavail']);



  // image file directory
  $target = "uploads/".basename($image);

  echo json_encode($target);

  if ($_FILES["myfile"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
  } 
  
  else{

  $sql = "INSERT INTO food_table (food_time, food_date, food_name, food_price, food_quantity, food_detail, food_picture, food_availability) 
          VALUES ('$time', '$date', '$name', '$price', '$quantity', '$detail', '$image', '$availability')";
  // execute query
  echo mysqli_query($mysqli, $sql);
  // var_dump($check);
      }

  if (move_uploaded_file($_FILES['myfile']['tmp_name'], $target)) {
    $msg = "Image uploaded successfully";
  }else{
    $msg = "Failed to upload image";
  }

