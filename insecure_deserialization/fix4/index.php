<!DOCTYPE html>

<?php
    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');
    error_reporting(E_ALL);


    if (isset($_COOKIE['serialized_user']) && $_COOKIE['serialized_user'] != ""){
        header("Location: website.php");
        exit();
    }
    
    
    if (isset($_POST['username'], $_POST['password']) && $_POST['username'] != "" && $_POST['password'] != "") {
        //phpinfo();
        require_once ("user.php");
        
        $user = new User($_POST['username'], $_POST['password']);

        echo openssl_get_curve_names();

        
        $key = openssl_get_privatekey("file:///home/pi/.ssh/id_rsa.pem", "");
        $serilaized = serialize($user);
        $signature;
        openssl_sign($serilaized, $signature, $key, OPENSSL_ALGO_SHA256);

        setcookie("serialized_user", serialize($user));
        setcookie("signature", $signature);
        header("Location: website.php");
        exit();
    }
?>


<html>
    <head>
        <title>A simple deserialization test</title>
    </head>
    
    <body>
        <form action="index.php" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"/><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"/><br>
            <input type="submit" value="Submit"/>
        </form>
    </body>

</html>
