	Tool care compara daca o sala a pastrat in timp coordonatele locurilor, folosind timpul de referinta T0. Formatul folosit pentru identificarea locurilor
este (zona, rand loc).

	Tool-ul are la baza o aplicatie JS care importa fisiere (prin NodeJS) continand array-rile cu coordonatele locurilor.

	Pentru a vedea in browser, in mod static, locurile care si-au schimbat coordonatele, am folosit compilatorul Browserify:
		#acesta uneste datele de intrare (sala1_t0.js, sala1_t0.js) cu algoritmul de verificare (algoritm_verifiare.js) in bundle.js
		#bundle.js este folosit de catre fisierul html pentru a afisa in consola locurile cu coordonate neechivalente


Algoritmul de verificare:

	-Avem array-urile: 
		--"a" = array-ul care are coordonatele locurilor "bune", coorodnatele de referinta (Pozitionare Corecta)
		--"b" = array-ul care are coordonatele locurilor care trebuie confruntate (Pozitionare de Testat)
		--"c" = array-ul colector in care vor fi pushate valorile indecsilor care nu sunt egali, inclusiv cheia lor (Identificatorul de Probleme)

	- Folosim NodeJS pentru a importa datele de intrare. Fisierele importate contin array-urile, pe care le stocam aici in variabilele a si b.
	
	- IMPORTANT!!! atat variabilele din acest fisier, cat si array-urile din fisierele importate trebuie sa pastreze denumirea de "a" si "b" pentru ca programul sa functioneze

	- IMPORTANT!!! Daca nu se compara key-uri identice (ex, A_1_1 din sala_t0 cu A_1_1 din sala_t1), va da eroare!!! Trebuie comparate key-uri identice!!! 
	
	- REMINDER: Outputul (ex, A_5_5: [ 400, 400, 430, 430 ]) are structura A_n_n:[coordonata a, coordonata a, coordonata b, coordonata b] => Primele 2 sunt cele bune!!!


Datele de intrare:
	
	- Sunt continute in fisierele sala1_t0.js si sala1_t0.js

	- Pentru ca algoritmul sa functioneze, trebuie pastrate numele variabilelor si ale array-urilor (a, b, c)

	- IMPORTANT!!! Fisierele cu aceste date de intrare trebuie sa contina array-uri cu date, nu datele simple!!!

