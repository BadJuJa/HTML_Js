<?php
require_once 'safemysql.class.php';
require_once 'NavigationPages.php';
class SqlResultToTable{
    public $sqlResult;
    private $mySql;

    public function __construct(){
        $this->$myDB = new SafeMySQL();
    }

    public function EchoToTableHTML($nametable, $sqlResult){
        $result = "<h1>$nametable</h1><table>";
        $flagfirst = TRUE;
        foreach($sqlResult as $row){
            if ($flagfirst){
                $key = array_keys($row);
                for ($i = 0; $i<count($key); $i++){
                    $result.="<th>".$key[$i]."</th>";
                }
                $flagfirst = FALSE;
            }
            $result.="<tr>";
            foreach ($row as $key => $value){
                $result.= "<td>".$value."</td>";
            }
            $result.="</td>";
        }
            $result.="</table><br>";
            return $result;
        }

    
    function SelectEchoToTableHTML($numtable,$numpageoftable=1){
        $this->$myDB = new SafeMySQL();
        $navigationPages = new NavigationPages();
        $myselect = "SELECT SQL_CALC_FOUND_ROWS * FROM ?n LIMIT ?i,?i";
        switch ($numtable){
            case 1: $nametableru = "Номенклатура";
                    $nametable = "nomenclature";
                    break;
            case 2: $nametableru = "Контрагенты";
                    $nametable = "contractingparties";
                    break;
            case 3: $nametableru = "Взаиморасчеты";
                    $nametable = "settlementswithbuyers";
                    break;
            case 4: $nametableru = "Остатки товара";
                    $nametable = "settlementswithsuppliers";
                    break;
            case 5: $nametableru = "Движение финансов";
                    $nametable = "nomenclatureremains";
                    break;    
            default: return "";
        }
        $startindex = ($numpageoftable-1)*5;
        $sqlResult = $this->$myDB->getAll($myselect,$nametable,$startindex,5);
        $kolrows = $this->$myDB->getOne("SELECT FOUND_ROWS()");
        return $navigationPages->NavPages($nametableru, $sqlResult,$numtable,$numpageoftable,$kolrows);
    }
}
?>