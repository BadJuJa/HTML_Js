<?php
require_once 'PHP/config.php';
require_once 'PHPClass/myTemplateClass.php';
require_once 'PHPClass/SQLResultToTable.php';

session_start();
$auth = isset($_SESSION['name']) && isset($_SESSION['email']);
$myObjToTable = new SqlResultToTable($DB);

$cur_page = $_GET["pagetab"] ?? null;
$page = $_GET["page"] ?? null;

if (!isset($cur_page)) {
    $cur_page = 1;
}
if (!isset($page)) {
    $page = 1;
}
for ($i = 1; $i <= 5; $i++) {
    $tpl->set_value('classbmenu' . $i, 'bmenu');
}
$tpl->set_value('classbmenu' . $page, 'bmenuactive');

if (!$auth) {
    $tpl->set_value('REGISTR', file_get_contents("regenterform.html"));
} else {
    $tpl->set_value('REGISTR', str_replace("{TEXT}", "Пользователь: " . $_SESSION['name'] . " E-mail: " . $_SESSION['email'], file_get_contents("exit.frm")));
}

switch ($page) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        $tpl->set_value('TABLE', $myObjToTable->SelectEchoToTableHTML($page, $cur_page));
        break;
    case "reg":
        $tpl->set_value('TABLE', file_get_contents("regform.frm"));
        break;
    case "regisright":
        $tpl->set_value('TABLE', "<h1>Регистрация прошла успешно</h1>");
        break;
    case "regisnotright":
        $error = $_GET["error"];
        switch ($error) {
            case 1:
                $error = '(Ошибка подключения к базе данных!)';
                break;
            case 2:
                $error = '(Пользоватлеь с таким email уже создан!)';
                break;
            case 3:
                $error = '(Ошибка выполнения запроса добавления записи!)';
                break;
            case 4:
                $error = '(Вы не зарегестрированы!)';
                break;
            case 5:
                $error = '(Вы указали неверный пароль!)';
                break;
        }

        $tpl->set_value('TABLE', "<h1>Регистрация не удалась<br> $error</h1>");
        break;
}

$tpl->get_tpl('index.tpl');

$tpl->tpl_parse();

echo $tpl->html;