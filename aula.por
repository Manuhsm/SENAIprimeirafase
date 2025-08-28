programa {
  funcao inicio() {
    inteiro valor_original, valor, notas100, notas050, notas020, notas010, notas005, notas002, notas001 
    escreva("Digite o valor em reais: ")
    leia(valor_original)
    valor= valor_original
    notas100=valor/100 //5
    valor=valor%100 //76
    
    notas050=valor/50 //1
    valor=valor%50 //26

    notas020=valor/20 //1
    valor=valor%20 //6

    notas010=valor/10 //0
    valor=valor%10 //6

    notas005=valor/5 //1
    valor=valor%5 //1

    notas002=valor/2 //0
    valor=valor%2 //1

    notas001=valor
    escreva("Valor: R$" + valor_original)
    escreva("\nNotas R$100: " + notas100)
    escreva("\nNotas R$50: " + notas050)
    escreva("\nNotas R$20: " + notas020)
    escreva("\nNotas R$10: " + notas010)
    escreva("\nNotas R$5: " + notas005)
    escreva("\nNotas R$2: " + notas002)
    escreva("\nNotas R$1: " + notas001)
    
  }
}
