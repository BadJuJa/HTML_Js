datasection = [
    { id: 1, name: "Канцелярия", sort: 1, status: 1 },
    { id: 2, name: "Канцелярия", sort: 1, status: 1 },
    { id: 3, name: "Канцелярия", sort: 1, status: 1 },
    { "id": 4, "name": "Канцелярия", sort: 1, status: 1 },
    { "id": 5, "name": "Канцелярия", sort: 1, status: 1 },
    { "id": 6, "name": "Канцелярия", sort: 1, status: 1 }
];



function Section(id, name, sort, status) {
    this.id = id;
    this.name = name;
    this.sort = sort;
    this.status = status ? 1 : 0;
}