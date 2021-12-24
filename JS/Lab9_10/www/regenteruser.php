<?php 
    require_once 'phpclass/safemysql.class.php';


    if(isset($_POST['register']))
    {

        header('Location: index.php?page=reg');
        exit();

    }

    if(isset($_POST['enter']))
    {


        $name = $email = trim($_POST['email']);
        $password = md5(trim($_POST['passw']));

        $mySql = new SafeMysql();
        
        $result = $mySql -> getRow("SELECT name,email,password FROM USERBASE WHERE email LIKE ?s",$email);

        if($result)
        {
            if (empty($result["email"]))
            {

                header('Location: index.php?page=regisnotright&error=4');
                exit();

            }
            if ($password !== $result['password'])
            {
                header('Location: index.php?page=regisnotright&error=5');
                exit();
            }

            session_start();
            $_SESSION['email'] = $result["email"];
            $_SESSION['name'] = $result["name"];
            
            header('Location: index.php?page=1');
            exit();
        }

    }
?>