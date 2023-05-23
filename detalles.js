let DETALLES = [
    "RABIA",
    "TRISTEZA",
    "ASCO",
    "MIEDO",
    "PERJUDICA A HILO (historia)",
    "PERJUDICA A PJ",
    "SE ENFOCA EN PNJ",
    "FAVORECE A PNJ",
    "SE ENFOCA EN PJ",
    "PERJUDICA A PNJ",
    "SE ENFOCA EN HILO (historia)",
    "FAVORECE A PJ",
    "FAVORECE A HILO (historia)",
    "CORAJE",
    "FELICIDAD",
    "CALMA",
]; //let DETALLES = [



function print_detalles(element_id) {
    var element = document.getElementById(element_id);
    if (!element) return;

    var html_code = "";
    let cosa_text = random_from_list(DETALLES);
    html_code += print_fortune_cookie(cosa_text);

    html_code += '<br/>';
    html_code += '<br/>';

    let instrucciones = 'Sirve para contestar preguntas del tipo:<br/>';
    instrucciones += 'ej) &iquest;Qu&eacute; hay dentro del cofre?<br/>';
    instrucciones += 'ej) &iquest;Cu&aacute;l es la actitud de los aldeanos?';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = 'ej) <u>Felicidad</u>: es algo que da felicidad a los personajes, ';
    instrucciones += 'por ejemplo algo que necesiten (comida, curaci&oacute;n, etc...)';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = 'ej) <u>Coraje</u>: es algo que les imprime valor (armas, ';
    instrucciones += 'pistas para derrotar al enemigo, etc...)';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = 'ej) <u>Tristeza</u>: Suele ser una mala noticia, una p&eacute;rdida, etc...';
    html_code += print_fortune_cookie(instrucciones);

    element.innerHTML = html_code;
    element.scrollTop = "0";
} //function print_detalles(element_id)
