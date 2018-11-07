var canvas = document.querySelector('canvas'); //facem asta ca sa fie fullscreen

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var canvasContext = canvas.getContext("2d");




//Randul 1 - t0 - generare automata de randuri la 30 de pixeli distanta
var x_1_0 = 130;
var y_1_0 = 100;
for (i_1_0 = 0; i_1_0 < 20; i_1_0++) {
	x_1_0 = x_1_0 + 30;
	canvasContext.beginPath(); //daca nu bag asta, conecta cercul de linie
	canvasContext.arc(x_1_0, y_1_0, 10, 0, Math.PI*2, false);
	canvasContext.strokeStyle = "green";
	canvasContext.stroke(); 
}

//Randul 2 t0 - generare automata de randuri la 30 de pixeli distanta
var x_2_0 = 130;
var y_2_0 = 130;
for (i_2_0 = 0; i_2_0 < 20; i_2_0++) {
	x_2_0 = x_2_0 + 30;
	canvasContext.beginPath(); //daca nu bag asta, conecta cercul de linie
	canvasContext.arc(x_2_0, y_2_0, 10, 0, Math.PI*2, false);
	canvasContext.strokeStyle = "green";
	canvasContext.stroke(); 
} 
/*
//Confruntari - manuale
	canvasContext.beginPath(); //daca nu bag asta, conecta cercul de linie
	canvasContext.arc(230, 100, 10, 0, Math.PI*2, false);
	canvasContext.strokeStyle = "rgba(255,0,0,0.5)";
	canvasContext.stroke(); 
	
	canvasContext.beginPath(); //daca nu bag asta, conecta cercul de linie
	canvasContext.arc(720, 100, 10, 0, Math.PI*2, false);
	canvasContext.strokeStyle = "rgba(255,0,0,0.5)";
	canvasContext.stroke(); 
	
	canvasContext.beginPath(); //daca nu bag asta, conecta cercul de linie
	canvasContext.arc(380, 130, 10, 0, Math.PI*2, false);
	canvasContext.strokeStyle = "rgba(255,0,0,0.5)";
	canvasContext.stroke(); 
	
//Pointere - manuale

	canvasContext.beginPath();
	canvasContext.moveTo(230, 100); //de aici incepe
	canvasContext.lineTo(220, 100); //se duce aici, apoi de aici mai departe
	canvasContext.strokeStyle = "black";
	canvasContext.stroke();
	
	canvasContext.beginPath();
	canvasContext.moveTo(720, 100); //de aici incepe
	canvasContext.lineTo(700, 100); //se duce aici, apoi de aici mai departe
	canvasContext.strokeStyle = "black";
	canvasContext.stroke();
	
	canvasContext.beginPath();
	canvasContext.moveTo(380, 130); //de aici incepe
	canvasContext.lineTo(370, 130); //se duce aici, apoi de aici mai departe
	canvasContext.strokeStyle = "black";
	canvasContext.stroke();
*/
	
	
	
	