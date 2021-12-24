function similarRoots(obj1, obj2) {
    if (obj1.a == 0 || obj2.a == 0)
        return false;

    let roots1 = [];
    let roots2 = [];

    let D1 = obj1.b * obj1.b - 4 * obj1.a * obj1.c;
    let D2 = obj2.b * obj2.b - 4 * obj2.a * obj2.c;

    if (D1 < 0 || D2 < 0)
        return false;

    if (D1 == 0)
        roots1.push((-obj1.b + Math.sqrt(D1)) / (2 * obj1.a));
    else if (D1 > 0) {
        roots1.push((-obj1.b + Math.sqrt(D1)) / (2 * obj1.a));
        roots1.push((-obj1.b - Math.sqrt(D1)) / (2 * obj1.a));
    }

    if (D2 == 0)
        roots2.push((-obj2.b + Math.sqrt(D2)) / (2 * obj2.a));
    else if (D2 > 0) {
        roots2.push((-obj2.b + Math.sqrt(D2)) / (2 * obj2.a));
        roots2.push((-obj2.b - Math.sqrt(D2)) / (2 * obj2.a));
    }

    for (let i of roots1) {
        if (roots2.includes(i)) {
            return true;
        } else {
            return false;
        }
    }
}

obj1 = { a: 1, b: 3, c: 2 };
obj2 = { a: 2, b: 5, c: 3 };

console.log(similarRoots(obj1, obj2));