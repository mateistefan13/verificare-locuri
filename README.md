	Tool care compara daca o sala a pastrat in timp coordonatele locurilor, folosind timpul de referinta T0. Formatul folosit pentru identificarea locurilor este (zona, rand loc).

	Tool-ul are la baza o aplicatie JS care importa fisiere continand obiecte cu coordonatele locurilor.


Algoritmul de verificare:

	-Avem obiectele: 
		--"a" = obiectul ale carui proprietati au coordonatele locurilor initiale, coorodnatele de referinta (Pozitionare Initiala)
		--"b" = obiectul ale carui proprietati au coordonatele locurilor noi, care trebuie confruntate (Pozitionare Noua)
	
	- IMPORTANT!!! atat datele din acest fisier, cat si obiectele din fisierele importate trebuie sa pastreze denumirea de "a" si "b" pentru ca tool-ul sa functioneze

Datele de intrare:
	
	- Sunt continute in fisierele sala1_t0.js si sala1_t0.js

	- Pentru ca algoritmul sa functioneze, trebuie pastrate numele variabilelor si ale obiectelor (a, b)

	- IMPORTANT!!! Fisierele cu aceste date de intrare trebuie sa contina obiecte cu date, nu datele simple!!!
    
Algoritm dinamic:

    - In momentul in care tool-ul recunoaste pozitionari diferite, le stocheaza in obiectul c si va procesa in mod dinamic cu ajutorul elementului Canvas cate un cerculet rosu pentru locul cu pozitia schimbata si unul verde pentru locul cu pozitia noua, indicand, de asemenea, cu o sageata cercurile pereche
    - Locurile care nu isi schimba pozitia sunt colorate cu negru
	- Locurile nou aparute au culoarea verde 
