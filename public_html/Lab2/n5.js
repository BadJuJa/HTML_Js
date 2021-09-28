function serialize(object) {
    return JSON.stringify(object);
}

obj = { x: 1, y: { z: [false, null, ""] } };

document.write(serialize(obj));