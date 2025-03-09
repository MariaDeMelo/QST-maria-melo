import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['joão', 'Lais', 'Davi', 'Nachara']

Deno.test("teste de assertions (API)", () => {
    assertEquals(aluno, 'Cróvis José');
    assertStringIncludes(aluno, "José");
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores,
        ["Davi", "Lais", "alan"],
        "Opa! Algo deu errado!");
})