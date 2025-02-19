let a = 'oi'
let b = 'olá'

Deno.test("Teste do oi ", () => {
    if (a != "oi") {
        throw new Error(`${a} não é oi`);
    }else{
        console.log(`${a} é de fato o oi`);
    }
})

Deno.test("Não pode ser oi ", () => {
    if (b == "oi") {
        throw new Error(`${a} é oi portanto esta errado`);
    }else{
        console.log(`${b} não é oi! poratanto esta certo o teste`);
    }
})
