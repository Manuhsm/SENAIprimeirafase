programa {
  funcao inicio() {
    real salario, salario_diario
    inteiro dias 
    escreva("(a) digite seu salario: R$")
    leia(salario)
    escreva("digite o meu numero de dias que você trabalhou:")
    leia(dias)
    salario_diario = salario / dias 
    escreva("seu salario diario deu: R$" + salario_diario)

    real conta, cafe, coxinha, halls, doceDeLeite
    escreva("\n\n(b)preço do cafe: R$")
    leia(cafe) 
    escreva("preço da coxinha: R$")
    leia(coxinha)
    escreva("preço do halls: R$")
    leia(halls)
    escreva("preço do doce de leite: R$")
    leia(doceDeLeite)
    conta= cafe + coxinha + halls + doceDeLeite 
    escreva("total a pagar: R$" + conta)

    real media, n1, n2, n3, n4 
    escreva("\n\n(c)Media n1:")
    leia(n1)
    escreva("Media n2:")
    leia(n2)
    escreva("Media n3:")
    leia(n3)
    escreva("Media n4:")
    leia(n4)
    media= (n1 + n2 + n3 + n4) / 4 
    escreva("total de totas as medias:" + media )

  }
}
