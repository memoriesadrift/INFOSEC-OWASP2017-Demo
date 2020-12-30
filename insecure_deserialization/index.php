<!DOCTYPE html>

<?php

    if ($_COOKIE['serialized_user'] != ""){
        header("Location: website.php");
        exit();
    }
    
    
    if ($_POST['username'] != "" && $_POST['password'] != "") {
        
        class User {
            public $username;
            public $password;
            public $role;
        }
        
        $user = new User;
        $user->$username = $_POST['username'];
        $user->$password = $_POST['password'];
        
        if ($user->$username == "Michal" && $user->$password == "Pasword123")
            $user->$role = "admin";
        else
            $user->$role = "user";
        
        set_cookie("serialized_user", serialize($user));
        header("Location: website.php");
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
            <input type="submit">Submit</input>
        </form>
    </body>

</html>
