<?php 
    require_once 'SqlResultToTable.php';

class NavigationPages{
    
    private static function insertNumPageToHTML($numpage, $textpage, $baselink, $activepage=FALSE)
    {
        
        
        $typeclass = $activepage ? " class=\"activetablepage tablepage\" " : " class=\"tablepage\" ";
        $resultLink = $activepage ? $textpage : "<a href=\"$baselink&pagetab=$numpage\" class=\"myRef pag \">$textpage</a>";
        $result = "<div $typeclass>$resultLink</div>";
        return $result;
    }
    public static function NavPages($nametable, $sqlResult, $numtable, $numpageoftable, $kolrows){
       
        $EchoToTable = new SqlResultToTable();
        $result.=$EchoToTable->EchoToTableHTML($nametableru, $sqlResult);
        $result.="<div id=\"numpagesfortable\">";
        $kolpages = ceil($kolrows/5);
        $prev = 3;
        $first = $numpageoftable - $prev;
       
       
        if ($first<1) $first = 1;
        
        $last = $numpageoftable + $prev;
        
        if ($last>$kolpages) $last = $kolpages;
        
        $baselink = "index.php?page=$numtable";
        $y = 1;
        
        
        if($first>1)
        {
            $result.=self::insertNumPageToHTML($y, "1", $baselink);
        }

        $y = $first - 1;

        if($first>10)
        {
            $result.=self::insertNumPageToHTML($y,"...", $baselink);
        } 
        else 
        {
            for($i=2;$i<$first;$i++)
            {
                $result.=self::insertNumPageToHTML($i,"$i", $baselink);
            }
        }
        for ($i=$first; $i<$last+1  ; $i++)
        {
            
            if ($i==$numpageoftable)
            {
                
                $result.=self::insertNumPageToHTML("","$i",$baselink,TRUE);

            } else {
                $result.=self::insertNumPageToHTML($i,"$i",$baselink);
            }
        }

        $y = $last + 1;

        if ($last<$kolpages&&$kolpages-$last>2)
        {
            $result.= self::insertNumPageToHTML($y, "...",$baselink);
        }

        if ($last<$kolpages)
        {
            $result.=self::insertNumPageToHTML($kolpages,"$kolpages", $baselink);
        }


        $result.="</div>";
        return $result;
    }
}
?>