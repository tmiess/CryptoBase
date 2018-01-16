<?php
//This page let initialize the forum by checking for example if the user is logged
session_start();
header('Content-type: text/html;charset=UTF-8');
if(!isset($_SESSION['username']) and isset($_COOKIE['username'], $_COOKIE['password']))
{
	$cnn = mysql_query('select password,id from users where username="'.mysql_real_escape_string($_COOKIE['username']).'"');
	$dn_cnn = mysql_fetch_array($cnn);
	if(sha1($dn_cnn['password'])==$_COOKIE['password'] and mysql_num_rows($cnn)>0)
	{
		$_SESSION['username'] = $_COOKIE['username'];
		$_SESSION['userid'] = $dn_cnn['id'];
	}
}
?>