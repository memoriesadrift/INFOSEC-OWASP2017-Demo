<?php
    
    setcookie("serialized_user", "", time()-3600); //expire cookie
    header("Location: index.php");
    exit();

?>
