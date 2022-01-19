<?php

require_once 'PHP/config.php';
require_once 'PHPClass/safemysql.class.php';

if ($_POST) {
    $name = trim($_POST['rname']);
    $password = trim($_POST['rpass']);
    $password_r = trim($_POST['rpass_r']);
    $email = trim($_POST['email']);

    $mySql = new SafeMySQL(['db' => DATABASE]);

    $result = $mySql->getOne("SELECT email FROM USERBASE WHERE email LIKE ?s", $email);

    if ($result) {
        header('Location: index.php?page=regisnotright&error=2');
    }

    $sql = $mySql->query("INSERT INTO USERBASE (email, name, password, date) VALUES (?s,?s,?s,CURRENT_DATE())", $email, $name, md5($password));

    if (!$sql) {
        header('Location: index.php?page=regisnotright&error=3');
        exit();
    }
    if ($sql) {
        header('Location: index.php?page=regisright');
        exit();
    }
}