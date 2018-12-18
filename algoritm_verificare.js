
/*	-Avem obiectele: 
		--"a" = obiectul ale carui proprietati au coordonatele locurilor initiale, coorodnatele de referinta (Pozitionare Initiala)
		--"b" = obiectul ale carui proprietati au coordonatele locurilor noi, care trebuie confruntate (Pozitionare Noua)
	
	- IMPORTANT!!! atat datele din acest fisier, cat si obiectele din fisierele importate trebuie sa pastreze denumirea de "a" si "b" pentru ca tool-ul sa functioneze
	
*/

// pe variabilele a si b le pastrez daca vreau sa lucrez cu node 
//var a = require('./sala1_t0'); 
//var b = require('./sala1_t1');

// Desenarea cercurilor pentru locurile initiale care nu se vor schimba, apar cu negru
Object.keys(a).forEach(function(key) {
	circle(a[key][0], a[key][1], "black");
})

// Desenarea cercurilor pentru locurile noi care nu au corespondent in cele vechi
Object.keys(b).forEach(function(key) {
	if (key in b !== key in a) {
		circle(b[key][0], b[key][1], "green");
    }
})

Object.keys(a).forEach(function(key) {
	if (a[key][0] !== b[key][0] || a[key][1] !== b[key][1]) {
		//vechile locuri sunt afisate cu rosu;
		circle(a[key][0], a[key][1], "red");
		//noile locuri sunt afisate cu verde
		circle(b[key][0], b[key][1], "green");
		//dinamicizarea sagetii care pleaca de la locul vechi (cercul rosu) catre locul corespunzator (cercul verde)
		line(b[key][0], b[key][1], a[key][0], a[key][1], "black");
	}
})

