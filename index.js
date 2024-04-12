//Uma função que devolve os valores que são maiores que a média
function maiorQueMedia(lista){
    let media = lista.reduce((accumulator, current) => accumulator + current, 0) / lista.length
    let AcimaMedia = lista.filter(itemLista => itemLista > media)
    return AcimaMedia
}

//Uma função que devolva o menor valor da lista
function menorValorLista(lista){
    let menor = Math.min(...lista)
    return menor
}

//Uma função que devolva o valor da soma dos itens da lista
function SomaItensLista(lista){
    let soma = lista.reduce((accumulator, current) => accumulator + current, 0)
    return soma
}

//Uma função que devolva todos os valores que são menores que 20
function itemMenorQue20(lista){
    let menorQue20 = lista.filter(itemLista => itemLista < 20)
    return menorQue20
}

//Uma função que vai devolver o primeiro e o último valor da lista*/
function primeiroEultimoValor(lista){
    let PrimeiroValor = lista[0]
    let UltimoValor = lista[lista.length-1]
    const primeiroEultimo = [PrimeiroValor, Ultimovalor]
    return primeiroEultimo
}
