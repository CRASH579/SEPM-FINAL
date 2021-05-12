<?php
$con = mysqli_connect('localhost', 'root', '','hms');

// get the post records
$namepatient = $_POST['namepatient'];
$patientgender = $_POST['gender'];
$aptime = $_POST['time'];
$apdate = $_POST['date'];


$sql = "INSERT INTO `patient_data` (`patient_name`, `ap_date`, `ap_time`, `patient_gender`) 
VALUES ('$namepatient', '$apdate', '$aptime', '$patientgender')";
$rs = mysqli_query($con, $sql);
if($rs)
{echo "<h1>data entered</h1>";}
?>