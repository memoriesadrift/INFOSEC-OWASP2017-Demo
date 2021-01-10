<!DOCTYPE html>

<?php
    
    if (!isset($_COOKIE['serialized_user']) || $_COOKIE['serialized_user'] == ""){
        header("Location: index.php");
        exit();
    }
    
    $key = openssl_pkey_get_public("file:///home/pi/.ssh/pub_dsa.pem");
    
    $ret = openssl_verify($_COOKIE['serialized_user'], $_COOKIE['signature'], $key, OPENSSL_ALGO_SHA256);
    if ($ret == 0 || $ret == -1){
        header("Location: logout.php");
        exit();
    }


    require_once ("user.php");
    $user = unserialize($_COOKIE['serialized_user']);
    
    //off intrest
    if ($user->getRole() !== "agfagfagfagfagaedrytw"){
        header("Location: website.php");
        exit();
    }

?>

<html>
    <head>
        <title>Insecure Website</title>
    </head>
    
    <body>
        A special admin view. Not accessible to normal users! <br>
    
        <table>
            <tr>
                <th> Username </th>
                <th> Role </th>
            </tr>
            <tr>
                <td> Michal </td>
                <td> admin </td>
            </tr>
            <tr>
                <td> Sam </td>
                <td> user </td>
            </tr>
            <tr>
                <td> Jakob </td>
                <td> user </td>
        </table>
        
        <button onclick="window.location.href='website.php';">
            Go back
        </button>
    </body>
</html>
