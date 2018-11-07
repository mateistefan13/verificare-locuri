
/*	- Avem array-urile: 
		--"a" = array-ul care are coordonatele locurilor initiale, coorodnatele de referinta (Pozitionare Initiala)
		--"b" = array-ul care are coordonatele locurilor noi, care trebuie confruntate (Pozitionare Noua)
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

//	Iteratia care ajuta la dinamicizarea crearii de content, folosind datele introduse prin request
for (var key in c) {
	//dinamicizarea crearii cercului verde, locul cu pozitionare corecta
	if (c.hasOwnProperty(key)) {
	canvasContext.beginPath(); //daca nu bag asta, conecta cercul de linie
	canvasContext.arc(c[key][0], c[key][1], 10, 0, Math.PI*2, false);
	canvasContext.strokeStyle = "green";
	canvasContext.stroke(); 
	}
	//dinamicizarea crearii cercului rosu, locul cu pozitionare incorecta
    if (c.hasOwnProperty(key)) {
        console.log(key + " -> " + c[key]);
		canvasContext.beginPath(); //daca nu bag asta, conecta cercul de linie
		canvasContext.arc(c[key][2], c[key][3], 10, 0, Math.PI*2, false);
		canvasContext.strokeStyle = "rgba(255,0,0,0.5)";
		canvasContext.stroke(); 
    }
	//dinamicizarea sagetii care pleaca de la locul gresit (cercul rosu) catre locul corespunzator (cercul verde)
	if (c.hasOwnProperty(key)) {
	canvasContext.beginPath();
	canvasContext.moveTo(c[key][2], c[key][3]); //de aici incepe
	canvasContext.lineTo(c[key][0], c[key][1]); //se duce aici, apoi de aici mai departe
	canvasContext.strokeStyle = "black";
	canvasContext.stroke();
	}
}

