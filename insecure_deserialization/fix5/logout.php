<?php
    
    setcookie("serialized_user", "", time()-3600); //expire cookie
    setcookie("signature", "", time()-3600);
    header("Location: index.php");
    exit();

?>
