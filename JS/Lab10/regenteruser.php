<?php

require_once "PHP/config.php";
require_once "PHPClass/safemysql.class.php";

if (isset($_POST['register'])) {
    header('Location: index.php?page=reg');
    exit();
}

if (isset($_POST['enter'])) {

    $name = $email = trim($_POST['email']);
    $password = md5(trim($_POST['passw']));

    $mySql = new SafeMySQL(['db' => DATABASE]);

    $result = $mySql->getRow("SELECT name,email,password FROM USERBASE WHERE email LIKE ?s", $email);

    if (empty($result["email"])) {
        header('Location: index.php?page=LoginError&error=1');
        exit();
    }
    if ($password !== $result['password']) {
        header('Location: index.php?page=LoginError&error=2');
        exit();
    }

    session_start();
    $_SESSION['email'] = $result["email"];
    $_SESSION['name'] = $result["name"];

    header('Location: index.php?page=1');
    exit();
}