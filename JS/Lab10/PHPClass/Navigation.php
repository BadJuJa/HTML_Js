<?php

require_once "PHPClass/SQLResultToTable.php";

class Navigation
{

    public static function InsertNumPageToHTML($numpage, $textpage, $baselink, $activepage = false)
    {
        $typeclass = $activepage ? " class=\"activetablepage\" " : " class=\"tablepage\" ";
        $resultLink = $activepage ? $textpage : "<a href=\"$baselink&pagetab=$numpage\" class=\"myRef nonactivetablepages\">$textpage</a>";
        $result = "<div $typeclass>$resultLink</div>";
        return $result;
    }

    public static function PagesNavigation($numTable, $numPageOfTable)
    {
        $Table = new SQLResultToTable();
        $result = $Table->SelectEchoToTableHTML($numTable, $numPageOfTable);
        $result .= "<div id=\"numpagesfortable\">";
        $kolpages = ceil($Table::$kolRows / PER_PAGE);
        $prev = 3;
        $first = $numPageOfTable - $prev;
        if ($first < 1) $first = 1;
        $last = $numPageOfTable + $prev;
        if ($last > $kolpages) $last = $kolpages;
        $baselink = "index.php?page=$numTable";
        $y = 1;
        if ($first > 1) {
            $result .= self::InsertNumPageToHTML($y, "1", $baselink);
        }
        $y = $first - 1;
        if ($first > 10) {
            $result .= self::InsertNumPageToHTML($y, "...", $baselink);
        } else {
            for ($i = 2; $i < $first; $i++) {
                $result .= self::InsertNumPageToHTML($i, "$i", $baselink);
            }
        }
        for ($i = $first; $i < $last + 1; $i++) {
            if ($i == $numPageOfTable) {
                $result .= self::InsertNumPageToHTML("", "$i", $baselink, TRUE);
            } else {
                $result .= self::InsertNumPageToHTML($i, "$i", $baselink);
            }
        }
        $y = $last + 1;
        if ($last < $kolpages && $kolpages - $last > 2) {
            $result .= self::InsertNumPageToHTML($y, "...", $baselink);
        }
        if ($last < $kolpages) {
            $result .= self::InsertNumPageToHTML($kolpages, "$kolpages", $baselink);
        }
        $result .= "</div>";

        return $result;
    }
}