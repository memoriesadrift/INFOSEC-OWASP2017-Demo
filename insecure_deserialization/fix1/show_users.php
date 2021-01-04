<!DOCTYPE html>

<?php
    
    if (!isset($_COOKIE['serialized_user']) || $_COOKIE['serialized_user'] == ""){
        header("Location: index.php");
        exit();
    }
    
    require_once ("user.php");
    $user = unserialize($_COOKIE['serialized_user']);
    
    if ($user->getRole() != "agfagfagfagfagaedrytw"){
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
