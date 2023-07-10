let idadeField = document.getElementById('idade') as HTMLInputElement

console.log(idadeField.value);


//Types Literais

function mostrarTexto(
    texto: string, 
    alinhamento: 'left' | 'right' | 'center')   //type literal
    {
        return `<div style="text-align: ${alinhamento}">${texto}</div>`
}

mostrarTexto('Diego', 'left')
mostrarTexto('Diego', 'right')
// mostrarTexto('Diego', 'blablabla')

function temNome(nome: string): true | false{
    if(nome != ''){
        return true;
    }else{
        return false
    }
}

function configurar(props: {width: number,height: number} | 'auto'){

}
configurar({width: 100, height: 200})
configurar('auto')


//TYPE para funções:

type MathFunction = (n11: number, n21: number) => number;

const somar: MathFunction = (n11 + n21) => {
    return n1 + n2;
}