<!DOCTYPE html>

<?php
    error_reporting(E_ALL);

    if (isset($_COOKIE['serialized_user']) && $_COOKIE['serialized_user'] != ""){
        header("Location: website.php");
        exit();
    }
    
    
    if (isset($_POST['username'], $_POST['password']) && $_POST['username'] != "" && $_POST['password'] != "") {
        //phpinfo();
        require_once ("user.php");
        
        $user = new User($_POST['username'], $_POST['password']);
        
        setcookie("serialized_user", serialize($user));
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
