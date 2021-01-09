<?php

    class User {
        private $username;
        private $password;
        private $role;

        private $logFileName;

        function __construct($username, $password) {
            $this->username = $username;
            $this->password = $password;
            
            if ($this->username == "Michal" && $this->password == "Password123")
                $this->role = "agfagfagfagfagaedrytw";
            else
                $this->role = "user";


            //The creator may think the issue may think this line is the issue now. He deletes it and generates it every time new when he needs to access the log file. 
            //However if the attacker can guess where the file is located (really not that hard), he can still manipulate the /var/www/html folder if php has those permissions
            //Yet, this solution is still better, since it does not allow the attacker to generate .php files, where he can insert his mallicious, code. It however allows him
            //to read what the creator logs and this may give him valuable information for other kinds of attack
            //$this->logFileName = "/home/public/".$username.".log";
            
            file_put_contents("/home/public/".$username.".log", "Starting log:\n", FILE_APPEND) or die("this is so sad :(");
        }

        function __destruct() {
            file_put_contents("/home/public/".$this->username.".log", "Log ended\n", FILE_APPEND);
        }

        function __wakeup() {
            file_put_contents("/home/public/".$this->username.".log", "Resuming log:\n", FILE_APPEND);
        }

        
        public function getUsername() {
            file_put_contents("/home/public/".$this->username.".log", "Username accessed, was ".$this->username."\n", FILE_APPEND);
            return $this->username;
        }
        
        public function getRole() {
            file_put_contents("/home/public/".$this->username.".log", "Role accessed, was ".$this->role."\n", FILE_APPEND);
            return $this->role;
        }
    }

?>
