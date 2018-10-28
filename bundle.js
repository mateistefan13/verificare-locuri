(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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


},{"./sala1_t0":2,"./sala1_t1":3}],2:[function(require,module,exports){
let a = {
	"A_1_1":[130, 100],
	"A_1_2":[160, 100],
	"A_1_3":[190, 100],
	"A_1_4":[220, 100],
	"A_1_5":[250, 100],
	"A_1_6":[280, 100],
	"A_1_7":[310, 100],
	"A_1_8":[340, 100],
	"A_1_9":[370, 100],
	"A_1_10":[400, 100],
	"A_1_11":[430, 100],
	"A_1_12":[460, 100],
	"A_1_13":[490, 100],
	"A_1_14":[520, 100],
	"A_1_15":[550, 100],
	"A_1_16":[580, 100],
	"A_1_17":[610, 100],
	"A_1_18":[640, 100],
	"A_1_19":[670, 100],
	"A_1_20":[700, 100],
	"A_2_1":[130, 130],
	"A_2_2":[160, 130],
	"A_2_3":[190, 130],
	"A_2_4":[220, 130],
	"A_2_5":[250, 130],
	"A_2_6":[280, 130],
	"A_2_7":[310, 130],
	"A_2_8":[340, 130],
	"A_2_9":[370, 130],
	"A_2_10":[400, 130],
	"A_2_11":[430, 130],
	"A_2_12":[460, 130],
	"A_2_13":[490, 130],
	"A_2_14":[520, 130],
	"A_2_15":[550, 130],
	"A_2_16":[580, 130],
	"A_2_17":[610, 130],
	"A_2_18":[640, 130],
	"A_2_19":[670, 130],
	"A_2_20":[700, 130]
	};
	
	module.exports = a;


},{}],3:[function(require,module,exports){
let b = {
	"A_1_1":[130, 100],
	"A_1_2":[160, 100],
	"A_1_3":[190, 100],
	"A_1_4":[230, 100],
	"A_1_5":[250, 100],
	"A_1_6":[280, 100],
	"A_1_7":[310, 100],
	"A_1_8":[340, 100],
	"A_1_9":[370, 100],
	"A_1_10":[400, 100],
	"A_1_11":[430, 100],
	"A_1_12":[460, 100],
	"A_1_13":[490, 100],
	"A_1_14":[520, 100],
	"A_1_15":[550, 100],
	"A_1_16":[580, 100],
	"A_1_17":[610, 100],
	"A_1_18":[640, 100],
	"A_1_19":[670, 100],
	"A_1_20":[720, 100],
	"A_2_1":[130, 130],
	"A_2_2":[160, 130],
	"A_2_3":[190, 130],
	"A_2_4":[220, 130],
	"A_2_5":[250, 130],
	"A_2_6":[280, 130],
	"A_2_7":[310, 130],
	"A_2_8":[340, 130],
	"A_2_9":[380, 130],
	"A_2_10":[400, 130],
	"A_2_11":[430, 130],
	"A_2_12":[460, 130],
	"A_2_13":[490, 130],
	"A_2_14":[520, 130],
	"A_2_15":[550, 130],
	"A_2_16":[580, 130],
	"A_2_17":[610, 130],
	"A_2_18":[640, 130],
	"A_2_19":[670, 130],
	"A_2_20":[700, 130]
	};
	
	module.exports = b;


},{}]},{},[1]);
