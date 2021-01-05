<!DOCTYPE html>

<?php
    error_reporting(E_ALL);
    if (!isset($_COOKIE['serialized_user']) || $_COOKIE['serialized_user'] == ""){
        header("Location: index.php");
        exit();
    }

    require_once ("user.php");
    
//  https://www.urldecoder.org/
    //$user = unserialize($_COOKIE['serialized_user']);
    
    $user_data = json_decode($_COOKIE['serialized_user'], true);
    $user = new User($user_data[0], $user_data[1]);
?>


<html>
    <head>
        <title>Insecure Website</title>
    </head>
    
    <body>
        <?php
            echo "Welcome <b>".$user->getUsername()."</b>! You are currently logged in as <b>".$user->getRole()."</b><br><br>";

            //of intrest
            if ($user->getRole() === "agfagfagfagfagaedrytw"){
                echo "Make datbase request to show all users";
                echo "
                <button onclick=\"window.location.href='show_users.php';\">
                    Show all user
                </button>
                ";
            }
        ?>
        <div> This is a very serious website with a lot of personal information </div>
        
        <button onclick="window.location.href='logout.php';">
            Logout
        </button>
    </body>
</html>
