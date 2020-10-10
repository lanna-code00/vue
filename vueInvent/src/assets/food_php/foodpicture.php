<?php
require 'database.php';

$id = $_GET['food_id'];

if(isset($_FILES['myfile'])){
    // $errors= array();
    $file_name = $_FILES['myfile']['name'];
    $file_size =$_FILES['myfile']['size'];
    $file_tmp =$_FILES['myfile']['tmp_name'];
    $file_type=$_FILES['myfile']['type'];
    $tmp = explode('.', $file_name);
    $file_ext = end($tmp);
    // $file_ext=strtolower(end(explode('.',$_FILES['myfile']['name'])));
    
    $extensions= array("jpeg","jpg","png");
    
    if(in_array($file_ext,$extensions)=== false){
      echo "extension not allowed, please choose a JPEG or PNG file.";
    }
    
    if($file_size > 500000){
      echo 'Sorry your file is to large';
    }

    if (move_uploaded_file($file_tmp,"uploads/".$file_name)) {
        $sql = "UPDATE food_table SET food_picture = '$file_name' WHERE food_id = '$id'";
       echo mysqli_query($mysqli, $sql);
    }
    else{
      echo 'NOT UPLOADED';
    }
 }