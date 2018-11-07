
/*	-Avem obiectele: 
		--"a" = obiectul ale carui proprietati au coordonatele locurilor initiale, coorodnatele de referinta (Pozitionare Initiala)
		--"b" = obiectul ale carui proprietati au coordonatele locurilor noi, care trebuie confruntate (Pozitionare Noua)
		--"c" = obiectul colector in care vor fi introduse atributele coordonatelor care nu sunt egale, inclusiv cheia lor (Identificatorul de Probleme)

	- Folosim NodeJS pentru a importa datele de intrare. Fisierele importate contin obiectele, pe care le stocam aici in variabilele a si b.
	
	- IMPORTANT!!! atat datele din acest fisier, cat si obiectele din fisierele importate trebuie sa pastreze denumirea de "a" si "b" pentru ca tool-ul sa functioneze

	- IMPORTANT!!! Daca nu se compara key-uri identice (ex, A_1_1 din sala_t0 cu A_1_1 din sala_t1), va da eroare!!! Trebuie comparate key-uri identice!!! 
	
	- REMINDER: Outputul (ex, A_5_5: [ 400, 400, 430, 430 ]) are structura A_n_n:[coordonata a, coordonata a, coordonata b, coordonata b] => Primele 2 sunt cele bune!!!
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

// Desenarea cercurilor pentru locurile initiale care nu se vor schimba, apar cu negru
Object.keys(a).forEach(function(key) {
	circle(a[key][0], a[key][1], "black");
})

//iteratia care ajuta la dinamicizarea crearii de content, folosind datele introduse prin request
for (var key in c) {
	//dinamicizarea crearii cercului verde, locul cu pozitionare initiala
	if (c.hasOwnProperty(key)) {
		//vechile locuri sunt afisate cu rosu
		circle(c[key][0], c[key][1], "rgba(255,0,0,0.5)")
	}
	//dinamicizarea crearii cercului rosu, locul cu pozitionare noua
    if (c.hasOwnProperty(key)) {
        //console.log(key + " -> " + c[key]);
		//noile locuri sunt afisate cu verde
		circle(c[key][2], c[key][3], "green")	
    }
	//dinamicizarea sagetii care pleaca de la locul gresit (cercul rosu) catre locul corespunzator (cercul verde)
	if (c.hasOwnProperty(key)) {
	line(c[key][2], c[key][3], c[key][0], c[key][1], "black");
	}
}

