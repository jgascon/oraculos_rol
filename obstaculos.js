
let CLASE_OBSTACULO = [
    "CLIMA",
    "BARRERA",
    "CAMINO",
    "NATURALEZA",
    "MISTERIO",
    "EMOCIONES",
]; //let CLASE_OBSTACULO


let OBSTACULOS = {
    "CLIMA": [
        "Lluvia",
        "Nieve",
        "Viento",
        "Terremoto",
        "Calor",
        "Fr&iacute;o",
        "Sequ&iacute;a",
    ],
    "BARRERA": [
        "Bloqueo",
        "Acantilado",
        "R&iacute;o",
        "Ca&ntilde;&oacute;n",
        "Corrimiento de tierras",
        "Puente roto",
    ],
    "CAMINO": [
        "Oscuridad",
        "Empinado",
        "Resbaladizo",
        "Denso",
        "Brillante",
        "Opresivo",
        "Confuso",
    ],
    "NATURALEZA": [
        "Esporas",
        "Enjambres",
        "Espinas",
        "Vapores",
        "Manadas",
        "Erupciones",
    ],
    "MISTERIO": [
        "Enigma",
        "Puzzle",
        "Fen&oacute;meno",
        "Criatura",
        "Reliquia",
        "Ruinas",
    ],
    "EMOCIONES": [
        "A&ntilde;oranza",
        "Miedo",
        "Desconocimiento",
        "Peque&ntilde;ez",
    ],
}; //let OBSTACULOS





function print_obstaculos(element_id) {
    var element = document.getElementById(element_id);
    if (!element) return;

    var html_code = "";

    let clase_obstaculo = random_from_list(CLASE_OBSTACULO);
    let obstaculo_text = clase_obstaculo + '<br/>' + random_from_list(OBSTACULOS[clase_obstaculo]);
    html_code += print_fortune_cookie(obstaculo_text);

    html_code += '<br/>';
    html_code += compute_lugares_scraps(2);

    element.innerHTML = html_code;
    element.scrollTop = "0";
} //function print_obstaculos(element_id)
