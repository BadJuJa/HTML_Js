<?php
class SQLResultToTable
{
    public function __construct($DB)
    {
        $this->mysqli = new mysqli(SERVER, USER, PASSWORD, $DB);
        if ($this->mysqli->connect_errno) {
            echo "Не удалось подключиться к MySQL: (" . $this->mysqli->connect_errno . ")" . $this->mysqli->connect_error;
            die("Ошибка при подключении к базе данных");
        }
    }

    function SelectEchoToTableHTML($myselect)
    {
        $this->sqlResult = mysqli_query($this->mysqli, $myselect);
        return $this->EchoToTableHTML();
    }

    var $sqlResult;

    function EchoToTableHTML()
    {
        $result = "<table>";
        $flagFirst = true;

        while ($row = $this->sqlResult->fetch_assoc()) {
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
        $result .= "</table>";

        return $result;
    }
}