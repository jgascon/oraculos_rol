
let ASENTAMIENTO_ASPECTO_GENERAL = [
    "Madera exquisita",
    "Siempre en movimiento",
    "Glotando",
    "Casas del &aacute;rbol",
    "Siempre cambiante",
    "Cristales",
    "Edificios altos",
    "Complejo de cuevas",
    "Carpas",
    "Nidos",
    "Una sola estructura",
    "Esqueleto",
    "Submarino",
    "Flotante",
    "Ruinas subterr&aacute;neas ocupadas",
    "Tallado en piedra",
    "L&aacute;minas de metal brillante",
    "Estructuras organicas",
]; //let ASENTAMIENTO_ASPECTO_GENERAL = [


let ASENTAMIENTO_PROYECTO_ACTUAL = [
    "Canci&oacute;n",
    "Biblioteca",
    "Festival",
    "Dirigible",
    "Molino de viento",
    "Teatro",
    "Estatua",
    "Holagrafo",
    "Jard&iacute;n",
    "Robot",
    "Ba&ntilde;o termal",
    "Calendario",
    "Libro",
    "Taberna",
    "Templo",
    "Mural",
    "Reloj solar",
    "Refugio",
]; //let ASENTAMIENTO_PROYECTO_ACTUAL = [



let ASENTAMIENTO_RESIDENTES_NOTABLES = [
    "Relojero",
    "Poeta",
    "Acr&oacute;bata",
    "Jardinero",
    "Carpintero",
    "Sabio",
    "Boticario",
    "Erudito",
    "Panadero",
    "Mensajero",
    "Herrero",
    "M&uacute;sico",
    "Escriba",
    "Cervecero",
    "Or&aacute;culo",
    "Gitano",
    "Piloto",
    "Sastre",
]; //let ASENTAMIENTO_RESIDENTES_NOTABLES = [


function compute_asentamiento() {
    let html_text = '<u>Asentamiento:</u>';
    html_text += "<br/>Aspecto: " + random_from_list(ASENTAMIENTO_ASPECTO_GENERAL);
    html_text += "<br/>Proyecto: " + random_from_list(ASENTAMIENTO_PROYECTO_ACTUAL);
    html_text += "<br/>Residente: " + random_from_list(ASENTAMIENTO_RESIDENTES_NOTABLES);
    return print_fortune_cookie(html_text);
} //function compute_lugares_scraps(numero_de_lugares)
