// Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let quantidadedekm = 600
let dias = 2
let km = 0.15
let totalPorDias = dias * 60
let totalPorKm =  quantidadedekm * 0.15 
let valorApagar = totalPorDias + totalPorKm

console.log (valorApagar)