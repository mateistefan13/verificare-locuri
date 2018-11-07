	Tool care compara daca o sala a pastrat in timp coordonatele locurilor, folosind timpul de referinta T0. Formatul folosit pentru identificarea locurilor este (zona, rand loc).

	Tool-ul are la baza o aplicatie JS care importa fisiere (prin NodeJS) continand obiecte cu coordonatele locurilor.

	Pentru a vedea in browser locurile care si-au schimbat coordonatele, am folosit compilatorul Browserify:
		#acesta uneste datele de intrare (sala1_t0.js, sala1_t0.js) cu algoritmul de verificare (algoritm_verifiare.js) in bundle.js
		#bundle.js este folosit de catre fisierul html pentru a afisa in consola locurile cu coordonate neechivalente


Algoritmul de verificare:

	-Avem obiectele: 
		--"a" = obiectul ale carui proprietati au coordonatele locurilor initiale, coorodnatele de referinta (Pozitionare Initiala)
		--"b" = obiectul ale carui proprietati au coordonatele locurilor noi, care trebuie confruntate (Pozitionare Noua)
		--"c" = obiectul colector in care vor fi introduse atributele coordonatelor care nu sunt egale, inclusiv cheia lor (Identificatorul de Probleme)

	- Folosim NodeJS pentru a importa datele de intrare. Fisierele importate contin obiectele, pe care le stocam aici in variabilele a si b.
	
	- IMPORTANT!!! atat datele din acest fisier, cat si obiectele din fisierele importate trebuie sa pastreze denumirea de "a" si "b" pentru ca tool-ul sa functioneze

	- IMPORTANT!!! Daca nu se compara key-uri identice (ex, A_1_1 din sala_t0 cu A_1_1 din sala_t1), va da eroare!!! Trebuie comparate key-uri identice!!! 
	
	- REMINDER: Outputul (ex, A_5_5: [ 400, 400, 430, 430 ]) are structura A_n_n:[coordonata a, coordonata a, coordonata b, coordonata b] => Primele 2 sunt cele bune!!!

Datele de intrare:
	
	- Sunt continute in fisierele sala1_t0.js si sala1_t0.js

	- Pentru ca algoritmul sa functioneze, trebuie pastrate numele variabilelor si ale obiectelor (a, b, c)

	- IMPORTANT!!! Fisierele cu aceste date de intrare trebuie sa contina obiecte cu date, nu datele simple!!!
    
Algoritm dinamic:

    - In momentul in care tool-ul recunoaste pozitionari diferite, le stocheaza in obiectul c si va procesa in mod dinamic cu ajutorul elementului Canvas cate un cerculet rosu pentru locul cu pozitia schimbata si unul verde pentru locul cu pozitia noua, indicand, de asemenea, cu o sageata cercurile pereche
    - Locurile care nu isi schimba pozitia sunt colorate cu negru
