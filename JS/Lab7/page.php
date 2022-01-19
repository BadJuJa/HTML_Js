<?php
require_once 'PHP/config.php';
require_once 'PHPClass/myTemplateClass.php';
require_once 'PHPClass/SQLResultToTable.php';

$myObjToTable = new SQLResultToTable($DB);

$page = $_GET["page"];
if (!isset($page)){
    $page = 1;
}
for ($i = 1; $i <= 5; $i++){
    $tpl -> set_value('classbmenu'.$i,'bmenu');
}
$tpl->set_value('classbmenu'.$page, 'bmenuactive');

switch($page){
    case 1:
        $tpl->set_value('TABLE', $myObjToTable->SelectEchoToTableHTML("SELECT * FROM Nomenclature"));
        break;
    case 2:
        $tpl->set_value('TABLE', $myObjToTable->SelectEchoToTableHTML("SELECT * FROM contractingparties"));
        break;
    case 3:
        $tpl->set_value('TABLE', $myObjToTable->SelectEchoToTableHTML("SELECT Date as Дата, Контрагент, Приход, Расход FROM (SELECT Date, Contractor, Sum as Приход, 0 as Расход FROM settlementswithbuyers UNION SELECT Date, Contractor, 0 as Приход, Sum as Расход FROM settlementswithsuppliers) as _1 LEFT JOIN (SELECT Code as Код, Name as Контрагент FROM contractingparties) as _2 ON Contractor=Код"));
        break;
    case 4:
        $tpl->set_value('TABLE', $myObjToTable->SelectEchoToTableHTML("SELECT Дата, Название, Остаток FROM (SELECT Date AS Дата, Nomenclature AS Номенклатура, SUM(Quantity) as Остаток FROM nomenclatureremains as _1 GROUP BY Date, Nomenclature) as _2 LEFT JOIN (SELECT Code as Код, Name as Название FROM nomenclature as N) as _3 ON Номенклатура=Код"));
        break;
    case 5:
        $tpl->set_value('TABLE', $myObjToTable->SelectEchoToTableHTML("SELECT Date, Sum(Прих) as Приход, Sum(Расх) as Расход, SUM(Прих-Расх) as Движение FROM (SELECT Date, Sum AS Прих, 0 as Расх FROM settlementswithbuyers UNION SELECT Date, 0 AS Прих, Sum AS Расх FROM settlementswithsuppliers) as _1 GROUP BY Date"));
        break;
}

$tpl->get_tpl('index.tpl');

$tpl->tpl_parse();

echo $tpl->html;