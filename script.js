/* 
const valorInrtoducido = 8; 
if ( valorInrtoducido > 0 && valorInrtoducido < 10) {
console.log('Valor introducido es mayor que o y menor que 10'); 
} else { 
   console.log('No se cumple'); 
}; 
 */
/* 
const valorInrtoducido = 10; 
const c = valorInrtoducido == 5 ? 'Has acertado el valor': 'No has acertado el valor'; 
console.log(c); 

let b; 

if (valorInrtoducido === 5) {
   b = 'Has acertado el valor'; 
} else {
   b = 'No has acertado el valor'; 
}; 

console.log(b);  */


// 20% ФОРМУЛА РАСЧЕТА СКИДКИ : СУММА УМНОЖАЕТСЯ НА 0.2 (в случае 20 проуентов ) 639,75 * 0.2 

const booking = {count: 7, price: 127.95}; 

let total = booking.count * booking.price; 
const discount = total > 500 ? total * 0.2 : 0; 
console.log('Total de la reserva : ', total); 

/* 
let discount = total * 0.2; 
const c = total > 500 ? total - discount : total;  */






