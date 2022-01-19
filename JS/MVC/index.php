<?php

// Front controller

// Общие настройки
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Подключение файлов системы
define('ROOT', dirname(__FILE__));
require_once ROOT . '/components/Router.php';

// Установка соединения с базой данных

// Вызов Router
$router = new Router();
$router->Run();