var canvas = document.querySelector('canvas'); //facem asta ca sa fie fullscreen

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var canvasContext = canvas.getContext("2d");

// Functia care va primi drept parametru coordonatele si culorile cercurilor pe care vrem sa le desenam
function circle(x, y, color) {
	canvasContext.beginPath(); //daca nu bag asta, conecta cercul de linie
	canvasContext.arc(x, y, 10, 0, Math.PI*2, false);
	canvasContext.strokeStyle = color;
	canvasContext.stroke(); 
}
// Functia care va primi drept parametru coordonatele si culoarea liniei pe care vrem sa o desenam
function line(x_s, y_s, x_f, y_f, color) {
	canvasContext.beginPath();
	canvasContext.moveTo(x_s, y_s); //de aici incepe, x_s = x start, x_f = x final
	canvasContext.lineTo(x_f, y_f); //se duce aici, apoi de aici mai departe
	canvasContext.strokeStyle = color;
	canvasContext.stroke();
}





	