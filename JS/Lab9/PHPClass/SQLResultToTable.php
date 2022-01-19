<?php
require_once 'PHPClass/safemysql.class.php';
class SQLResultToTable
{
    public function __construct($DB)
    {
        $this->mysqli = new SafeMySQL(['db' => $DB]);
    }

    private function InsertNumPageToHTML($numpage, $textpage, $baselink, $activepage = false)
    {
        $typeclass = $activepage ? " class=\"activetablepage\" " : " class=\"tablepage\" ";
        $resultLink = $activepage ? $textpage : "<a href=\"$baselink&pagetab=$numpage\" class=\"myRef\">$textpage</a>";
        $result = "<div $typeclass>$resultLink</div>";
        return $result;
    }

    function SelectEchoToTableHTML($numTable, $numPageOfTable = 1)
    {
        $myselect = "SELECT SQL_CALC_FOUND_ROWS * FROM ?n LIMIT ?i, ?i";
        switch ($numTable) {
            case 1:
                $nameTableRu = "Номенклатура";
                $nameTable = "nomenclature";
                break;
            case 2:
                $nameTableRu = "Контрагенты";
                $nameTable = "contractingParties";
                break;
            default:
                return "";
        }
        $startIndex = ($numPageOfTable - 1) * PER_PAGE;
        $sqlResult = $this->mysqli->getAll($myselect, $nameTable, $startIndex, PER_PAGE);
        $kolRows = $this->mysqli->getOne("SELECT FOUND_ROWS()");
        return $this->EchoToTableHTML($nameTableRu, $sqlResult, $numTable, $numPageOfTable, $kolRows);
    }

    var $sqlResult;

    function EchoToTableHTML($nameTable, $sqlResult, $numTable, $numPageOfTable, $kolRows)
    {
        $result = "<h1>$nameTable</h1><table>";
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
        $result .= "</table><br><div id=\"numpagesfortable\">";
        $kolpages = ceil($kolRows / PER_PAGE);
        $prev = 3;
        $first = $numPageOfTable - $prev;
        if ($first < 1) $first = 1;
        $last = $numPageOfTable + $prev;
        if ($last > $kolpages) $last = $kolpages;
        $baselink = "page.php?page=$numTable";
        $y = 1;
        if ($first > 1) {
            $result .= $this->InsertNumPageToHTML($y, "1", $baselink);
        }
        $y = $first - 1;
        if ($first > 10) {
            $result .= $this->InsertNumPageToHTML($y, "...", $baselink);
        } else {
            for ($i = 2; $i < $first; $i++) {
                $result .= $this->InsertNumPageToHTML($i, "$i", $baselink);
            }
        }
        for ($i = $first; $i < $last + 1; $i++) {
            if ($i == $numPageOfTable) {
                $result .= $this->InsertNumPageToHTML("", "$i", $baselink, TRUE);
            } else {
                $result .= $this->InsertNumPageToHTML($i, "$i", $baselink);
            }
        }
        $y = $last + 1;
        if ($last < $kolpages && $kolpages - $last > 2) {
            $result .= $this->InsertNumPageToHTML($y, "...", $baselink);
        }
        if ($last < $kolpages) {
            $result .= $this->InsertNumPageToHTML($kolpages, "$kolpages", $baselink);
        }
        $result .= "</div>";

        return $result;
    }
}