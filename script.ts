// no terminal: entrar na pasta onde esta o projeto, script.ts
let nome:string = 'Diego'
let idade:number = 24
let programador:boolean = true;
let numero: number[] = [1, 2, 4]

let nunca: any = [1, 2, 3]  // qualquer tipo
nunca.push('difo')

function firstLetterUpperCase(name:any): any//tipo de retorno da função
{ 
    let firstLetter = name.charAt(0).toUpperCase(); // pegando a primeira letra e aumentando-a
    return firstLetter+name.substring(1)  // concatendo a primeira letra como restante do nome 
}

firstLetterUpperCase('diego gostoso')

//funções anonimas

let names = ['dieg', 'joao', 'paulo', 'andreessa']

names.forEach(function(nome){
    console.log(nome.toUpperCase())
})