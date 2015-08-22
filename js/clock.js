(function() {
	setInterval(function() {
		var now = new Date();
		var output;
		var numbers = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "diecis&eacute;is", "diecisiete", "dieciocho", "diecinueve", "veinte", "veintiuno", "veintidos", "veintitr&eacute;s", "veinticuatro", "veinticinco", "veintis&eacute;is", "veintisiete", "veintiocho", "veintinueve", "treinta"];
		var h, m;
		if (now.getMinutes() > 30) {
			m = numbers[60 - now.getMinutes()];
			if (now.getHours() == 2 || now.getHours() == 14) {
				h = "una";
				output = "Es la una menos " + m;
			} else {
				h = now.getHours();
				h -= h > 12 ? 12 : 0;
				h = numbers[h + 1];
			}
			if (typeof output == "undefined") {
				output = "Son las " + h + " menos " + m;
			}
		} else {
			h = now.getHours();
			h -= h > 12 ? 12 : 0;
			m = numbers[now.getMinutes()];
			if (h == 1) {
				output = "Es la una y " + m;
			} else {
				h = numbers[h];
				output = "Son las " + h + " y " + m;
			}
		}
		document.getElementById("main-clock").innerHTML = output;
	}, 1000);
})();