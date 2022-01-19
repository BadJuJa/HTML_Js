<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя первая страница на php</title>
</head>

<body>
    <?php
    $mysqli = new mysqli("localhost", "root", "", "mysale");
    if ($mysqli->connect_errno) {
        echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ")" . $mysqli->connect_error;
        die();
    }
    echo "Соединение установлено успешно.<br>";

    $integer = 100;
    $string = "Строка";
    $float = 0.5;
    $set = array($integer, $string, $float);
    echo '<table border="1">';
    echo '<tr>' . '<td>Значение</td>' . '<td>Тип</td>' . '</tr>';
    for ($i = 0; $i <= 2; $i++) {
        echo '<tr>' . '<td>' . $set[$i] . '</td>' . '<td>' . gettype($set[$i]) . '</td>' . '</tr>';
    }

    echo '</table>';

    $a = 10001;
    if ($a == true) echo 'Переменная $a - истина';
    $b = true;
    if ($a == $b) echo "<br>" . '$a=$b';
    echo "<br>" . gettype($b);

    $a = 100;
    $link_on_a = &$a;
    echo "<br>" . $link_on_a . " ";
    $link_on_a = 5;
    echo $a;

    $soft_link = "a";
    echo "<br>" . $$soft_link . " " . $soft_link . " ";
    $$soft_link = 105;
    echo $a;

    echo "<br>" . __FILE__ . " " . __DIR__ . "<br>";

    $day = array('Воскресенье', 'Понедельник', 3 => 'Вторник', 4 => 'Среда');
    $day[5] = 'Четверг';
    $day[2] = 'Пятница';
    $day[] = 'Суббота';

    for ($i = 0; $i < count($day); $i++) {
        echo "<br> day[$i]=" . $day[$i];
    }
    echo "<br>";
    foreach ($day as $index => $result) {
        echo "<br> day[$index]=" . $result;
    }
    echo "<br>";
    /*foreach ($_SERVER as $index => $result) {
        echo "<br> $index=" . $result;
    }*/
    echo "<br>";
    echo '<table border="1">';
    for ($i = 1; $i <= 21; $i++) {
        echo "<tr>";
        for ($j = 1; $j <= 21; $j++) {
            echo "<td>" . $i * $j . "</td>";
        }
        echo "</tr>";
    }
    echo '</table>';
    echo "<br>";
    $res = mysqli_query($mysqli, "SELECT Код, NAME AS Наименование,SUM(Приход) AS Поступление,SUM(Расход) AS Продажа,ifNULL(SUM(Приход - Расход),0) AS Остаток
    FROM ((SELECT N.Code AS Код,SUM(R.Quantity) AS Приход,0 AS Расход
    FROM nomenclaturereceipt AS R RIGHT JOIN Nomenclature AS N ON R.Nomenclature = N.Code GROUP BY N.Code)
    UNION (SELECT N.Code AS Код, 0 AS Приход, SUM(S.Quantity) AS Расход
    FROM nomenclaturesale AS S RIGHT JOIN Nomenclature AS N ON S.Nomenclature = N.Code GROUP BY N.Code)) AS Движение
    RIGHT JOIN Nomenclature AS N ON Движение.Код = N.Code GROUP BY N.Code ORDER BY Код");
    $flagfirst = true;
    echo "<table>";
    while ($row = $res->fetch_assoc()) {
        if ($flagfirst) {
            $key = array_keys($row);
            for ($i = 0; $i < count($key); $i++) {
                echo "<th>" . $key[$i] . "</th>";
            }
            $flagfirst = false;
        }
        echo "<tr>";
        foreach ($row as $key => $value) {
            echo "<td>" . $value . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
    ?>
</body>

</html>