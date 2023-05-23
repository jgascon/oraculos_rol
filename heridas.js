let HERIDAS = [
    "Est&aacute;s embotado, no puedes pensar bien (-1 a pensar y similares) (ars&eacute;nico),",
    "Tobillo torcido",
    "Conmoci&oacute;n cerebral leve",
    "C&oacute;xix magullado",
    "Corte peque&ntilde;o",
    "Hemorragia nasal",
    "Quemadura leve",
    "Ojo morado",
    "Hematoma grave",
    "Congelaci&oacute;n leve",
    "Quemadura solar",
    "Dedos rotos",
    "Tobillo torcido",
    "Mu&ntilde;eca torcida",
    "Hombro dislocado",
    "Quemaduras extensas de segundo grado",
    "Herida sangrante.",
    "Pierna rota",
    "Brazo roto",
    "Cr&aacute;neo fracturado",
    "Herida en el cuello",
    "Pulm&oacute;n perforado",
    "Quemaduras de tercer grado",
    "Extremidad paralizada",
    "Sordera",
    "Disparo o pu&ntilde;alada en la pierna",
    "Miembro amputado",
    "Cegado",
    "Convulsiones",
    "Apu&ntilde;alado en el ojo",
    "Tiro en el est&oacute;mago",
    "Quemaduras extensas de tercer grado",
    "Pecho aplastado",
    "Despellejado vivo",
    "Est&aacute;s paralizado",
    "Est&aacute;s paralizado (Veneno Cobra)",
    "P&eacute;rdida de coordinaci&oacute;n (Curare)",
    "No puedes hacer tareas que requieran precisi&oacute;n (Curare)",
    "Totalmente paralizado (Curare)",
    "No puedes respirar (Curare)",
    "Tienes v&eacute;rtigos (Cianuro)",
    "Tu coraz&oacute;n deja de latir (Cianuro)",
    "Solo puedes ir a gatas (Saliva de Ghast)",
    "Dolor intenso en el abdomen (Mercurio)",
    "Inflamaci&oacute;n (Infecci&oacute;n)",
    "La inflamaci&oacute;n crece mucho (Infecci&oacute;n)",
    "Tienes fiebre (Infecci&oacute;n)",
    "Tos y estornudos (Influenza)",
    "Est&aacute;s muy d&eacute;bil (Absorci&oacute;n de vida)",
    "Fiebre y te duele mucho el cuello (Polio)",
    "M&uacute;sculos atrofiados (Polio)",
    "Pierdes el conocimiento",
    "Problemas respiratorios",
]; //let HERIDAS = [




function print_heridas(element_id) {
    var element = document.getElementById(element_id);
    if (!element) return;

    var html_code = '';

    let cosa_text;
    for (let i=0; i<3; i++) {
        cosa_text = random_from_list(HERIDAS);
        html_code += '<br/>';
        html_code += print_fortune_cookie(cosa_text);
    }; //for (let i=0; i<3; i++) {

    html_code += '<br/>';
    html_code += '<br/>';

    let instrucciones = 'Sigue la l&oacute;gica de las heridas sufridas:<br/>ej) Si quemaron a un personaje, lo l&oacute;gico es que tenga quemaduras.';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = 'Describe el dolor y lo que siente el personaje.';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = 'Seg&uacute;n la gravedad, los efectos ser&aacute;n m&aacute;s intensos o menos.';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = 'Para ignorar el dolor, el personaje puede desafiar el peligro con <u>Voluntad</u>.';
    html_code += print_fortune_cookie(instrucciones);

    element.innerHTML = html_code;
    element.scrollTop = "0";
} //function print_heridas(element_id)
