maxIdSection = 6;
datasection = [
    { id: 1, name: "Канцелярия", sort: 1, status: 1 },
    { id: 2, name: "Продукты питания", sort: 1, status: 1 },
    { id: 3, name: "Мода", sort: 1, status: 1 },
    { id: 4, name: "Бижутерия", sort: 1, status: 1 },
    { id: 5, name: "Мебель и интерьер", sort: 1, status: 1 },
    { id: 6, name: "Косметика", sort: 1, status: 1 }
];

function Section(id, name, sort, status) {
    this.id = id;
    this.name = name;
    this.sort = sort;
    this.status = status ? 1 : 0;
}
maxIdCategory = 30;
datacategory = [{ id: 1, name: "Бумага для печати", section: 1, sort: 1, status: 1 },
    { id: 2, name: "Письменные принадлежности", section: 1, sort: 1, status: 1 },
    { id: 3, name: "Степлеры, и пр.", section: 1, sort: 1, status: 1 },
    { id: 4, name: "Чернила", section: 1, sort: 1, status: 1 },
    { id: 5, name: "Кондитерские изделия", section: 2, sort: 1, status: 1 },
    { id: 6, name: "Хлеб", section: 2, sort: 1, status: 1 },
    { id: 7, name: "Мясо", section: 2, sort: 1, status: 1 },
    { id: 8, name: "Колбасы", section: 2, sort: 1, status: 1 },
    { id: 9, name: "Сыры", section: 2, sort: 1, status: 1 },
    { id: 10, name: "Консервы", section: 2, sort: 1, status: 1 },
    { id: 11, name: "Мужская одежда", section: 3, sort: 1, status: 1 },
    { id: 12, name: "Женская одежда", section: 3, sort: 1, status: 1 },
    { id: 13, name: "Мужская обувь", section: 3, sort: 1, status: 1 },
    { id: 14, name: "Женская обувь", section: 3, sort: 1, status: 1 },
    { id: 15, name: "Детская одежда и обувь", section: 3, sort: 1, status: 1 },
    { id: 16, name: "Кольцы", section: 4, sort: 1, status: 1 },
    { id: 17, name: "Серьги", section: 4, sort: 1, status: 1 },
    { id: 18, name: "Колье", section: 4, sort: 1, status: 1 },
    { id: 19, name: "Письменные столы, парты", section: 5, sort: 1, status: 1 },
    { id: 20, name: "Компьютерные столы", section: 5, sort: 1, status: 1 },
    { id: 21, name: "Диваны и кровати", section: 5, sort: 1, status: 1 },
    { id: 22, name: "Шкафы", section: 5, sort: 1, status: 1 },
    { id: 23, name: "Кресла и стулья", section: 5, sort: 1, status: 1 },
    { id: 24, name: "Комоды и тумбы", section: 5, sort: 1, status: 1 },
    { id: 25, name: "Детская мебель", section: 5, sort: 1, status: 1 },
    { id: 26, name: "Интерьерные элементы", section: 5, sort: 1, status: 1 },
    { id: 27, name: "Искуственные цветы", section: 5, sort: 1, status: 1 },
    { id: 28, name: "Эксперементальная косметика", section: 6, sort: 1, status: 1 },
    { id: 29, name: "Косметические средства для женщин", section: 6, sort: 1, status: 1 },
    { id: 30, name: "Косметические средства для мужчин", section: 6, sort: 1, status: 1 }
];

function Category(id, name, section, sort, status) {
    this.id = id;
    this.name = name;
    this.section = section;
    this.sort = sort;
    this.status = status ? 1 : 0;
}
maxIdBrends = 30;
databrends = [{ id: 1, name: "Бренд №1 Секция №1", section: 1, sort: 1, status: 1 },
    { id: 2, name: "Бренд №2 Секция №1", section: 1, sort: 1, status: 1 },
    { id: 3, name: "Бренд №3 Секция №1", section: 1, sort: 1, status: 1 },
    { id: 4, name: "Бренд №4 Секция №1", section: 1, sort: 1, status: 1 },
    { id: 5, name: "Бренд №5 Секция №2", section: 2, sort: 1, status: 1 },
    { id: 6, name: "Бренд №6 Секция №2", section: 2, sort: 1, status: 1 },
    { id: 7, name: "Бренд №7 Секция №2", section: 2, sort: 1, status: 1 },
    { id: 8, name: "Бренд №8 Секция №2", section: 2, sort: 1, status: 1 },
    { id: 9, name: "Бренд №9 Секция №2", section: 2, sort: 1, status: 1 },
    { id: 10, name: "Бренд №10 Секция №2", section: 2, sort: 1, status: 1 },
    { id: 11, name: "Бренд №11 Секция №3", section: 3, sort: 1, status: 1 },
    { id: 12, name: "Бренд №12 Секция №3", section: 3, sort: 1, status: 1 },
    { id: 13, name: "Бренд №13 Секция №3", section: 3, sort: 1, status: 1 },
    { id: 14, name: "Бренд №14 Секция №3", section: 3, sort: 1, status: 1 },
    { id: 15, name: "Бренд №15 Секция №3", section: 3, sort: 1, status: 1 },
    { id: 16, name: "Бренд №16 Секция №4", section: 4, sort: 1, status: 1 },
    { id: 17, name: "Бренд №17 Секция №4", section: 4, sort: 1, status: 1 },
    { id: 18, name: "Бренд №18 Секция №4", section: 4, sort: 1, status: 1 },
    { id: 19, name: "Бренд №19 Секция №5", section: 5, sort: 1, status: 1 },
    { id: 20, name: "Бренд №20 Секция №5", section: 5, sort: 1, status: 1 },
    { id: 21, name: "Бренд №21 Секция №5", section: 5, sort: 1, status: 1 },
    { id: 22, name: "Бренд №22 Секция №5", section: 5, sort: 1, status: 1 },
    { id: 23, name: "Бренд №23 Секция №5", section: 5, sort: 1, status: 1 },
    { id: 24, name: "Бренд №24 Секция №5", section: 5, sort: 1, status: 1 },
    { id: 25, name: "Бренд №25 Секция №5", section: 5, sort: 1, status: 1 },
    { id: 26, name: "Бренд №26 Секция №5", section: 5, sort: 1, status: 1 },
    { id: 27, name: "Бренд №27 Секция №5", section: 5, sort: 1, status: 1 },
    { id: 28, name: "Бренд №28 Секция №6", section: 6, sort: 1, status: 1 },
    { id: 29, name: "Бренд №29 Секция №6", section: 6, sort: 1, status: 1 },
    { id: 30, name: "Бренд №30 Секция №6", section: 6, sort: 1, status: 1 }
];

function Brends(id, name, section, sort, status) {
    this.id = id;
    this.name = name;
    this.section = section;
    this.sort = sort;
    this.status = status ? 1 : 0;
}
maxIdColor = 5;
datacolor = [{ id: 1, name: "Белый", r: 0xFF, g: 0xFF, b: 0xFF, code: "FFFFFF" },
    { id: 2, name: "Черный", r: 0, g: 0, b: 0, code: "000000" },
    { id: 3, name: "Красный", r: 0xFF, g: 0, b: 0, code: "FF0000" },
    { id: 4, name: "Зеленый", r: 0, g: 0xFF, b: 0, code: "00FF00" },
    { id: 5, name: "Синий", r: 0, g: 0, b: 0xFF, code: "0000FF" }
];

function Color(id, name, r, g, b, code) {
    this.id = id;
    this.name = name;
    this.r = r;
    this.g = g;
    this.b = b;
    this.code = code;
}

maxIdSize = 5;
datasize = [{ id: 1, name: "S" },
    { id: 2, name: "M" },
    { id: 3, name: "L" },
    { id: 4, name: "XL" },
    { id: 5, name: "XXL" }
];

function Size(id, name) {
    this.id = id;
    this.name = name;
}