
let CLASE_INMERSION = [
    "Olor",
    "Sonido",
    "Vista",
    "Tacto",
    "Social",
    "Sentido",
]; // let CLASE_INMERSION = [


let INMERSIONES = {
    "Olor": [
        "Moho",
        "Musgo",
        "Humedad",
        "Comida",
        "Incienso",
        "Flores",
        "&Aacute;rboles",
        "Ruina",
        "Papel",
        "Comida",
        "Cenizas",
        "Sangre",
        "Olor Corporal",
        "Colonia",
        "Perfume",
    ],
    "Sonido": [
        "Olas",
        "Agua",
        "Crujidos",
        "Madera astill&aacute;ndose",
        "Fuego",
        "Respiraci&oacute;n",
        "Metal chocando",
        "Muchedumbre",
    ],
    "Vista": [
        "Simbolos",
        "Runas",
        "Algo brilla",
        "Luz natural",
        "Luz artificial",
        "Enemigo",
        "Personaje",
    ],
    "Tacto": [
        "Rocoso",
        "A madera",
        "Met&aacute;lico",
        "H&uacute;medo",
        "Sangre (en cara, cuerpo o paredes)",
        "Lluvia",
        "Sudor",
        "Telara&ntilde;as",
        "Pelo",
        "Fr&iacute;o",
        "Caliente",
        "Quema"
    ],
    "Social": [
        "Conversaci&oacute;n",
        "Palabras",
        "Expresiones Faciales",
        "Emociones hacia t&iacute;",
        "Ira hacia t&iacute;",
        "Tristeza hacia t&iacute;",
        "Amor hacia t&iacute;",
        "Alegr&iacute;a hacia t&iacute;",
        "Camarader&iacute;a",
        "Compa&ntilde;erismo",
        "Enemistad",
        "Hostilidad",
    ],
    "Sentido": [
        "Sexto Sentido",
        "Temperatura",
        "Atm&oacute;sfera",
        "Pelos de punta",
        "Alguien te vigila",
        "Piel de gallina",
        "Memorias",
        "Humor",
        "Emociones"
    ]
}; // let INMERSIONES = {




function print_inmersion(number_of_inmersions) {
    let clase_inmersion;
    let inmersion;
    let html_text = "";

    for (let i=0; i<number_of_inmersions; i++) {
        clase_inmersion = random_from_list(CLASE_INMERSION);
        inmersion = random_from_list(INMERSIONES[clase_inmersion]);
        html_text += print_fortune_cookie(clase_inmersion + " a<br/>" + inmersion);
    } //for (let i=0; i<number_of_inmersions; i++)

    return html_text;
} //function print_inmersion(number_of_inmersions)
