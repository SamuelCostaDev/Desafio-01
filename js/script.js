/* 
*   Essa função faz com que a tecla "Enter" aciona o 
*   botão "calcular"
*/
function enter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calcularSomatorio();
    }
}

/* 
*   Essa função é a responsável por mostrar o resultado
*   ou os alert
*/
function calcularSomatorio() {
    let numero = document.getElementById('Campo1').value;
    if (numero === "") {
        alert("Por favor, adicione um valor");
        return
    }else if (numero < 0){
        alert("Por favor, adicone números inteiros. \nEx.: (0, 1, 2, 3...)");
        document.getElementById('Campo1').value= '';
        document.getElementById('Campo1').focus();

        return
    }

    let resultado = somatorio(numero);
    alert(`O somatório é: ${resultado}`);
}

/* 
*   Essa função é a responsável por calcular o somatório
*   dos números menores que o valor fornecido pelo 'input
*   onde esses números são divisíveis por 3 ou 5.
*/
function somatorio(numero) {
    let somatorio = 0;
    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }
    return somatorio;
}
