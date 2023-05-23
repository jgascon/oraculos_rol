
let LIMINAL_HORROR_IDEA_SUJETO = [
    "Armadura",
    "Vinculaci&oacute;n",
    "Iglesia",
    "Culto",
    "Corrupci&oacute;n",
    "Fisura",
    "Hongo",
    "Penumbra",
    "Coraz&oacute;n",
    "Hambre",
    "Cazador",
    "Habilidad",
    "Nexo",
    "Pasaje",
    "Sombras",
    "&Eacute;xtasis",
    "Enjambre",
    "Umbral",
    "Telara&ntilde;a de llanto",
    "Telara&ntilde;a",
    "Llanto",
    "Destierro",
    "Cementerio",
    "Construcci&oacute;n",
    "Inmundicia",
    "Anfitri&oacute;n",
    "Olvido",
    "Infestaci&oacute;n",
    "Extremidades",
    "Par&aacute;sito",
    "Sombra",
    "Enfermedad",
    "Sigilo",
    "Esfera",
    "P&uacute;as",
    "Masacre",
    "Transformaci&oacute;n del tiempo",
    "Transformaci&oacute;n",
    "Tiempo",
    "Debilidad",
    "Silbido",
    "Susurros",
]; //let LIMINAL_HORROR_IDEA_SUJETO = [


let LIMINAL_HORROR_IDEA_ADJETIVO = [
    "Contemplativo",
    "Sangrante",
    "&Oacute;seo",
    "Burbujeante",
    "Tallado",
    "Aplastado",
    "Sepultado",
    "Purgado",
    "Creciente",
    "Grotesco",
    "Desgarrador",
    "Invisible",
    "Malformado",
    "Pose&iacute;do",
    "Pulsante",
    "Rabioso",
    "Podrido",
    "Desplazado",
    "Retorcido",
    "Marchito",
    "Digerido",
    "Enfermo",
    "Distorsionado",
    "Embrionario",
    "C&aacute;rnico",
    "Fracturado",
    "Congelado",
    "Resplandeciente",
    "Invocado",
    "Liminal",
    "Luz",
    "Luna",
    "Luz de Luna",
    "Sin boca",
    "Oculto",
    "Pose&iacute;do",
    "Repetido",
    "Ondulante",
    "Ardiente",
    "Subterr&aacute;neo",
    "Asfixiante",
    "Tejido"
]; //let LIMINAL_HORROR_IDEA_ADJETIVO = [




let LIMINAL_HORROR_MALDICION = [
    "Los animales mueren",
    "Sue&ntilde;o masivo",
    "Aparece la ciudad",
    "Ataque de meteoritos",
    "Niebla mortal",
    "Los espejos hablan",
    "Plaga de sue&ntilde;os",
    "No hay estrellas",
    "Noche sin fin",
    "Entra un forastero",
    "Tormenta sin fin",
    "La gente desaparece",
    "Crep&uacute;sculo sin fin",
    "Se abre el portal",
    "Invierno sin fin",
    "Se abren las grietas",
    "Aparece el bosque",
    "Aparece la torre",
    "Tumbas se abren",
    "Llueve sangre",
]; //let LIMINAL_HORROR_MALDICION = [






function print_liminal_horror(element_id) {
    var element = document.getElementById(element_id);
    if (!element) return;

    let sujeto = random_from_list(LIMINAL_HORROR_IDEA_SUJETO);
    let adjetivo = random_from_list(LIMINAL_HORROR_IDEA_ADJETIVO);
    let idea = '<u>Idea Liminal:</u><br/>' + sujeto + '<br/>' + adjetivo;

    let maldicion = '<u>Maldici&oacute;n:</u><br/>' + random_from_list(LIMINAL_HORROR_MALDICION);

    var html_code = "";
    html_code += print_fortune_cookie(idea);
    html_code += '<br/>';
    html_code += print_fortune_cookie(maldicion);
    element.innerHTML = html_code;
    element.scrollTop = "0";
}; //function print_liminal_horror(element_id)
