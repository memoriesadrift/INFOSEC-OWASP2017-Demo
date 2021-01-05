<?php
//https://medium.com/bugbountywriteup/demystifying-insecure-deserialization-in-php-684cab9c4d24
//https://www.exit.wtf/vrd/2019/04/04/Insecure_Deserialization.html

    class User {
        private $username;
        private $password;
        private $role;
        
        function __construct($username, $password) {
            $this->username = $username;
            $this->password = $password;
            
            if ($this->username == "Michal" && $this->password == "Password123")
                $this->role = "admin";
            else
                $this->role = "user";
        }
        
        public function getUsername() {
            return $this->username;
        }
        
        public function getRole() {
            return $this->role;
        }
    }

?>
