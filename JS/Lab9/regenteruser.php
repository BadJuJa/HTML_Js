<?php
require_once 'PHPClass/safemysql.class.php';
require_once 'PHP/config.php';

if (isset($_POST['register'])) {
    header('Location: page.php?page=reg');
    exit();
}

if (isset($_POST['enter'])) {

    $name = $email = trim($_POST['email']);
    $password = md5(trim($_POST['passw']));

    $mySql = new SafeMysql(['db' => $DB]);

    $result = $mySql->getRow("SELECT name,email,password FROM USERBASE WHERE email LIKE ?s", $email);

    if ($result) {
        if (empty($result["email"])) {

            header('Location: page.php?page=regisnotright&error=4');
            exit();
        }
        if ($password !== $result['password']) {
            header('Location: page.php?page=regisnotright&error=5');
            exit();
        }

        session_start();
        $_SESSION['email'] = $result["email"];
        $_SESSION['name'] = $result["name"];

        header('Location: page.php?page=1');
        exit();
    }
}