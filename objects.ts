function resumo(usuario: {nome:string, idade?:number}){  //definindo os tipos de dados do obj  ? -> caracteristica opcional
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`
}


let u = {
    nome: 'Diego',
    idade: 46
}

console.log( resumo(u))

// type próprio e INTERFACE

type idade = string | number
let idade: idade = '98'
function mostraIdade(i: idade): idade{
    return i
}

//ex1 para se usar:

type user = {
    nome: string
    idade: number
}


function apresentacao(usuario: user){
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
}

apresentacao({
    nome: 'Diefo',
    idade: 24
})

//ex2 para se usar:

interface Usuari{
    nome: string;
    idade: number
}
interface usuari{
    altura: number
}
