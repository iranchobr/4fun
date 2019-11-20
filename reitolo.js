let porta1 = null
let porta2 = null
let opcoes = {
    tigre: 'TIGRE',
    dama: 'DAMA',
    nada: 'NADA'
}
let result = {
    porta1: [],
    porta2: []
}

exp1IsTrue = false

function morrer() {
    return 'MORRER'
}

function casar() {
    return 'CASAR'
}

function expressao1(porta1, porta2) {
    for(let opcao of porta1) {
        result.porta1.push(opcao)
    }

    for(let opcao of porta2) {
        result.porta2.push(opcao)
    }

    result.porta1 = [...new Set(result.porta1)]
    result.porta2 = [...new Set(result.porta2)]

    return exp1IsTrue
}

function expressao2(porta1, porta2) {
    for(let opcao of porta1) {
        result.porta1.push(opcao)
    }
    for(let opcao of porta2) {
        result.porta2.push(opcao)
    }

    result.porta1 = [...new Set(result.porta1)]
    result.porta2 = [...new Set(result.porta2)]

    return !exp1IsTrue
}

function report() {
    for(let k in result) {
        if(result[k].length == 1 && result[k][0] == opcoes.tigre) {
            console.log(`Na ${k} ele irá: ${morrer()}, porque tem um: ${opcoes.tigre}`)
        } else if(result[k].length == 1 && result[k][0] == opcoes.dama) {
            console.log(`Na ${k} ele irá: ${casar()}, porque tem uma: ${opcoes.dama}`)
        } else if (result[k].length > 0) {
            console.log(`Em ${k} temos:`)
            console.log(result[k])
        } else {
            console.log(`Não tem nada em ${k}`)
        }
    }
}

/** Acredito que está lógica esta "viciada", além de desprezar a morte como obviedade da vida */
function problemaAugustoVitor() {
    console.log('LÓGICA VITOR E AUGUSTO\n')
    exp1IsTrue = false
    let resultExp1 = expressao1([opcoes.dama], [opcoes.tigre])
    if(!resultExp1) {
        result.porta1 = [opcoes.tigre]
        result.porta2 = [opcoes.dama]
    }
    let resultExp2 = expressao2([opcoes.dama, opcoes.tigre], [opcoes.dama, opcoes.tigre])
    if(resultExp1 ^ resultExp2) {
        result.porta1 = result.porta1.filter(i => i != opcoes.dama)
        result.porta2 = result.porta2.filter(i => i != opcoes.tigre)
    }
    report()
}

/** Uma vez desprezada a temporalidade(e no enunciado a mesma é desprezada), claramente todos morrem */
function problemaMarcelo() {
    console.log('\nLÓGICA MARCELO\n')
    console.log('Todos irão: ' + morrer() + ' UM DIA!')
}

problemaAugustoVitor()

problemaMarcelo()