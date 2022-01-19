<?php

require_once 'PHP/config.php';
require_once 'PHPClass/safemysql.class.php';

class SQLResultToTable
{
    public static $kolRows;

    public function __construct()
    {
        $this->mysqli = new SafeMySQL(['db' => DATABASE]);
    }

    function SelectEchoToTableHTML($numTable, $numPageOfTable = 1)
    {
        $myselect = "SELECT SQL_CALC_FOUND_ROWS * FROM ?n LIMIT ?i, ?i";
        switch ($numTable) {
            case 1:
                $nameTable = "nomenclature";
                break;
            case 2:
                $nameTable = "contractingparties";
                break;
            case 3:
                $nameTable = "settlementswithbuyers";
                break;
            case 4:
                $nameTable = "settlementswithsuppliers";
                break;
            case 5:
                $nameTable = "nomenclatureremains";
                break;
            default:
                return "";
        }
        $startIndex = ($numPageOfTable - 1) * PER_PAGE;
        $sqlResult = $this->mysqli->getAll($myselect, $nameTable, $startIndex, PER_PAGE);
        self::$kolRows = $this->mysqli->getOne("SELECT FOUND_ROWS()");
        return $this->EchoToTableHTML($sqlResult);
    }

    function EchoToTableHTML($sqlResult)
    {
        $result = "<table>";
        $flagFirst = true;

        foreach ($sqlResult as $row) {
            if ($flagFirst) {
                $key = array_keys($row);
                for ($i = 0; $i < count($key); $i++) {
                    $result .= "<th>" . $key[$i] . "</th>";
                }
                $flagFirst = false;
            }
            $result .= "<tr>";
            foreach ($row as $key => $value) {
                $result .= "<td>" . $value . "</td>";
            }
            $result .= "</tr>";
        }
        $result .= "</table><br>";
        return $result;
    }
}