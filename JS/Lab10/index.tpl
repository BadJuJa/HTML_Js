<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №10</title>
    <link rel="stylesheet" type="text/css" href="style\style.css">
    <link rel="stylesheet" type="text/css" href="style\tstyle01.css">
    <script type=”text/javascript” src=”Scripts\myscript.js”></script>
</head>

<body>
    <div id="wrapper">
        <div id="registr" align = "right">{REGISTR}</div>
        <div id="header">Лабораторная работа№10</div>
        <div id="menu">
            <div id="menu1" class="{classbmenu1}"><a href="index.php?page=1" class="myRef">Номенклатура</a></div>
            <div id="menu2" class="{classbmenu2}"><a href="index.php?page=2" class="myRef">Контрагенты</a></div>
            <div id="menu3" class="{classbmenu3}"><a href="index.php?page=3" class="myRef">Взаиморасчеты</a></div>
            <div id="menu4" class="{classbmenu4}"><a href="index.php?page=4" class="myRef">Остатки</a></div>
            <div id="menu5" class="{classbmenu5}"><a href="index.php?page=5" class="myRef">Движения средств</a></div>
        </div>
        <div id="content">
            <br> {TABLE}
            <br>
        </div>
        <div id="footer">МКИС21 <br> Новицкий Е.Е.</div>
    </div>
</body>

</html>