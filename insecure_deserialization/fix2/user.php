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

            $this->logFileName = "/home/public/".$username.".log";
            echo $this->logFileName;
            /*
            File put contentes would not work and would fail. The creator of this websites searches for the solution and stumbles upon this stakckoverflow post:
                https://stackoverflow.com/questions/4917811/file-put-contents-failed-to-open-stream-permission-denied
            After running chmod 777 on his /var/www/html/... folder everything works as expected :)
            */
            file_put_contents($this->logFileName, "Starting log:\n", FILE_APPEND) or die("this is so sad :(");
        }

        function __destruct() {
            file_put_contents($this->logFileName, "Log ended\n", FILE_APPEND);
        }

        function __wakeup() {
            file_put_contents($this->logFileName, "Resuming log:\n", FILE_APPEND);
        }

        
        public function getUsername() {
            file_put_contents($this->logFileName, "Username accessed, was ".$this->username."\n", FILE_APPEND);
            return $this->username;
        }
        
        public function getRole() {
            file_put_contents($this->logFileName, "Role accessed, was ".$this->role."\n", FILE_APPEND);
            return $this->role;
        }
    }

?>
