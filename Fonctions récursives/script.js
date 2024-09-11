function somme(nombre) {
    if (nombre === 1) {
        return 1;
    } else {
        return nombre + somme(nombre - 1);
    }
}

console.log(somme(5));
