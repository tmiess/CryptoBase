<?php


//Username of the Administrator
$admin='newtest';


//Logging to the database

mysql_connect('localhost', 'root', '');
mysql_select_db('chat_db');

//Forum Home Page
$url_home = 'index.php';

//Design Name
$design = 'default';


/******************************************************
----------------------Initialization-------------------
******************************************************/
include('init.php');
?>