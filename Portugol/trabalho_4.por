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

    inteiro vitorias, empates, pontos 
    escreva("\n\n(d)digite o número de vitorias: ")
    leia(vitorias)
    escreva("digite o número de empates: ")
    leia(empates)
    pontos = vitorias *3 + empates
    escreva("total dos pontos:" + pontos )

    real conta, cafe, coxinha, halls, doceDeLeite 
    escreva("\n\n(e)preço do cafe: R$")
    leia(cafe)
    escreva("preço da coxinha: R$")
    leia(coxinha)
    escreva("preço do halls: R$")
    leia(halls)
    escreva("preço do doce de leite: R$")
    leia(doceDeLeite)
    conta = 2*cafe + coxinha + halls + doceDeLeite
    escreva("Total a pagar: R$" + conta)

      real critico, dano
      escreva("\n\n(f)quantidade de dano: ")
      leia(dano)
      critico= dano *1.5
      escreva("total dos danos: " + critico)

    real critico, dano, bonus
    escreva("\n\n(g)quantidade de dano: ")
    leia(dano)
    escreva("quantidade de bonus: ")
    leia(bonus)
    critico= dano *1.5 + bonus 
    escreva("total do dano: " + critico)

    real media, n1, p1, n2, p2
    escreva("\n\n(h)nota n1: ")
    leia(n1)
    escreva("peso p1: ")
    leia(p1)
    escreva("nota n2: ")
    leia(n2)
    escreva("peso p2: ")
    leia(p2)
    media = (n1 * p1 + n2 * p2 ) / (p1 + p2)
    escreva("media final das duas notas: " + media)

    real poupanca, salario, moradia, agua, luz, internet, gasolina, netflix, telefone, outros 
    escreva("\n\n(i)meu salario:") 
    leia(salario)
    escreva("moradia:")
    leia(moradia)
    escreva("agua:")
    leia(agua)
    escreva("luz:")
    leia(luz)
    escreva("intrnet:")
    leia(internet)
    escreva("gasolina:")
    leia(gasolina)
    escreva("netflix:")
    leia(netflix)
    escreva("telefone:")
    leia(telefone)
    escreva("outros:")
    leia(outros)
    poupanca= salario - (moradia + agua + luz + internet + gasolina + netflix + telefone + outros) 
    escreva("total do que vai sobrar na minha poupança: " + poupanca)

    real conta, cafe, coxinha, halls, doceDeLeite 
    escreva("\n\n(j)preço do cafe: R$")
    leia(cafe)
    escreva("preço da coxinha: R$")
    leia(coxinha)
    escreva("preço do halls: R$")
    leia(halls)
    escreva("preço do doce de leite: R$")
    leia(doceDeLeite)
    conta = 2*cafe + coxinha + halls + 2*doceDeLeite
    escreva("Total a pagar: R$" + conta)

    real cafe_per_capita, cafe
    inteiro alunos 
    escreva("\n\n(k)quantos litros de café? ")
    leia(cafe)
    escreva("quantos aulos tem? ")
    leia(alunos)
    cafe_per_capita= cafe / alunos 
    escreva("quantidade de cafe po cabeça: " + cafe_per_capita + " litros")

    real cafe_per_capita, cafe, extra
    inteiro alunos 
    escreva("\n\n(l)quantos litros de café? ")
    leia(cafe)
    escreva("quantos litros tem de cafe extra? ")
    leia(extra)
    escreva("quantos aulos tem? ")
    leia(alunos)
    cafe_per_capita= (cafe + extra) / alunos
    escreva("quantidade de cafe po cabeça: " + cafe_per_capita + " litros")



  }
}
