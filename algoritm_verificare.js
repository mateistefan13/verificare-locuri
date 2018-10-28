
/*	- Avem array-urile: 
		--"a" = array-ul care are coordonatele locurilor "bune", coorodnatele de referinta (Pozitionare Corecta)
		--"b" = array-ul care are coordonatele locurilor care trebuie confruntate (Pozitionare de Testat)
		--"c" = array-ul colector in care vor fi pushate valorile indecsilor care nu sunt egali, inclusiv cheia lor (Identificatorul de Probleme)
	- Folosim NodeJS pentru a importa datele de intrare. Fisierele importate contin array-urile, pe care le stocam aici in variabilele a si b.
	
	-IMPORTANT!!! atat variabilele din acest fisier, cat si array-urile din fisierele importate trebuie sa pastreze denumirea de "a" si "b" pentru ca programul sa functioneze
	-IMPORTANT!!! Daca nu se compara key-uri identice (ex, A_1_1 din sala_t0 cu A_1_1 din sala_t1), va da eroare!!! Trebuie comparate key-uri identice!!! 
	
	-REMINDER: Outputul (ex, A_5_5: [ 400, 400, 430, 430 ]) are structura zona_rand_loc:[coordonata a, coordonata a, coordonata b, coordonata b] => Primele 2 sunt cele bune!!!
*/

var a = require('./sala1_t0'); 

var b = require('./sala1_t1');
	
let c = {}
Object.keys(a).forEach(function(key) {
if (a[key][0] !== b[key][0] || a[key][1] !== b[key][1]) {
		c[key] = a[key].concat(b[key]);
	}
})

console.log(c);

