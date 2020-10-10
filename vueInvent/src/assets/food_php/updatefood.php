<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$id = $_POST['food_id'];
$foodtime = $_POST['mytime'];
$fooddate = $_POST['mydate'];
$foodname = $_POST['myname'];
$foodprice = $_POST['myprice'];
$foodquantity = $_POST['myquantity'];
$fooddetail = $_POST['mydetail'];
$foodavailability = $_POST['myavail'];
$image = $_FILES['myfile']['name'];
$target_dir = "uploads/" . basename($image);
 
if ($_FILES["myfile"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
  } 
else{
      $insert = "UPDATE food_table SET food_time = '$foodtime', food_date = '$fooddate', food_name = '$foodname',
             food_price = '$foodprice', food_quantity = '$foodquantity', food_detail = '$fooddetail', food_picture = '$image', food_availability = '$foodavailability'
             WHERE `food_id` = '$id' LIMIT 1";
      
      $myinsert = mysqli_query($mysqli, $insert);
  }
  if (move_uploaded_file($_FILES['myfile']['tmp_name'], $target_dir)) {
    $msg = "Image updated successfully";
  }else{
    $msg = "Failed to update image";
  }