<?php 
session_start();
array_push($_SESSION['tasks'],$_POST['tasks']);
echo(json_encode($_SESSION['tasks']));

?>