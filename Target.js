function fibonacci(t) {
    // Verifica se t (int) esta na sequencia Fibonacci
    let n1 = 0
    let n2 = 1
    while (n1 < t)
        n2 = n1 + (n1 = n2);
    return n1 == t
}

function checarA(str) {
    // Verifica quantos 'A's ocorrem na str (string)
    const matches = str.match(/[aA]/g)
    if (matches != null)
        return matches.length
    return 0
}

function soma(s, k) {
    // Soma á s (numero) todos numeros de k (numero) á 1
    if (k < 1)
        return s
    return soma(s + k, k-1)
    //Da 78 se k = 12
}

