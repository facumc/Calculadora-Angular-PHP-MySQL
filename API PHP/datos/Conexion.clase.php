<?php
    class Conexion
    {
        protected $dblink;

        function __construct() {
            $servidor = "mysql:host=127.0.0.1;port=3306;dbname=ejercicio_toptive";
            $usuario = "root";
            $clave = "";
            $this->dblink = new PDO($servidor, $usuario, $clave);
            $this->dblink->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->dblink->exec("SET NAMES utf8");
        }

    }
?>
