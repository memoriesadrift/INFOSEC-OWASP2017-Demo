<?php

    require_once("user.php");

    $user = new User("Michal", "Zak");

    echo $user->getUsername(), "<br>";

    $json = json_encode($user, JSON_FORCE_OBJECT);

    echo $json, "<br>";

    $userConstr = json_decode($json, true);

    $user2 = new User($userConstr[0], $userConstr[1]);
    echo $user2->getUsername(), "<br>";

?>