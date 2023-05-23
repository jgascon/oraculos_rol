let TRASTORNOS = [
    "Algo te pica/duele, necesitas Opio para calmarte",
    "Algo te pica/duele, necesitas Alcohol para calmarte",
    "Algo te pica/duele, necesitas Morfina para calmarte",
    "Algo te pica/duele, necesitas Sexo para calmarte",
    "Algo te pica/duele, necesitas Jugar a juegos de azar para calmarte",
    "Algo te pica/duele, necesitas conducir a todo trapo para calmarte",
    "Algo te pica/duele, necesitas a la persona X para calmarte",
    "El cielo te asusta, es demasiado grande (crea alucinaciones y dolor) (Agorafobia)",
    "No cuentes detalles al jugador para que no los recuerde (Amnesia)",
    "No puedes correr",
    "No puedes saltar",
    "No puedes apuntar un arma o algo que tires/dispares",
    "No puedes mover los brazos",
    "No puedes mover las piernas",
    "Te pones en postura fetal en momentos random (Catatonia)",
    "La persona X tiene una carne deliciosa, se te hace la boca agua (Canibalismo)",
    "Los lugares cerrados te agobian/asfixian (Clautrofobia)",
    "Eres mucho mejor que los que te rodean, deber&iacute;an servirte",
    "Crees que eres Napoleon",
    "Crees que eres un presidente",
    "Sientes que no hay nada que hacer (Depresi&oacute;n)",
    "Ves un objeto valioso y brillante, sin vigilancia (Cleptoman&iacute;a)",
    "Odias las cosas desordenadas (Man&iacute;a)",
    "Odias las cosas del color X (Man&iacute;a)",
    "Te quema el dinero",
    "Te has quedado mudo",
    "Algo est&aacute; incorrecto, tienes que colocarlo bien",
    "No distigues la realidad de la ficci&oacute;n",
    "Te duermes en situaciones random (Narcolepsia)",
    "Ves cosas raras mientras duermes (Pesadillas)",
    "Alguien te sigue o te persigue (Paranoia)",
    "Todo el mundo te mira fijamente (Paranoia)",
    "Ves a una persona rara que te mira y habla (Paranoia)",
    "Ves al objeto X en todas partes (Paranoia)",
    "Los dem&aacute;s son hostiles contra t&iacute; (Paranoia)",
    "Es a alguien detr&aacute;s de t&iacute; (Paranoia)",
    "Alguien te persigue (Paranoia)",
    "Ves ara&ntilde;as donde no las hay (Fobia)",
    "Ves bichos (Fobia)",
    "Ves bichos por el rabillo del ojo (Fobia)",
    "Ves a las personas con gusanos (Fobia)",
    "Sientes que tienes gusanos (Fobia)",
    "Sientes que tienes bichos en tu interior (Fobia)",
    "Sientes que tienes huevos de bichos bajo la piel (Fobia)",
    "Sientes hormigueo bajo la piel (Fobia)",
    "Ves ratas donde no las hay (Fobia)",
    "Ves sangre donde no la hay (Fobia)",
    "Quieres matar a alguien (psicopat&iacute;a)",
    "Odias a alguien con todas tus fuerzas (psicopat&iacute;a)",
    "Alguien es un monstruo disfrazado (psicopat&iacute;a)",
    "Todos a tu alrededor son monstruos disfrazados (psicopat&iacute;a)",
    "Odias a todos, quieres librarte de su presencia (psicopat&iacute;a)",
    "Quieres quemar algo (piroman&iacute;a)",
    "Te pica mucho una parte del cuerpo, quieres cort&aacute;rtela",
    "Ves cosas que no existen (Alucinaciones)",
    "Te duermes y te despiertas en otro sitio (Son&aacute;mbulo)",
    "No puedes vivir sin alguien en concreto (Ansiedad separaci&oacute;n)",
    "No puedes vivir sin algo en concreto (Ansiedad separaci&oacute;n)",
    "Oyes voces que te dicen cosas sobre otras personas",
    "Oyes voces",
]; //let TRASTORNOS = [




function print_trastornos(element_id) {
    var element = document.getElementById(element_id);
    if (!element) return;

    var html_code = '';

    let cosa_text;
    for (let i=0; i<3; i++) {
        cosa_text = random_from_list(TRASTORNOS);
        html_code += '<br/>';
        html_code += print_fortune_cookie(cosa_text);
    }; //for (let i=0; i<3; i++) {

    html_code += '<br/>';
    html_code += '<br/>';

    let instrucciones = 'No le digas al jugador lo que tiene, en su lugar describe lo que ve y siente<br/>';
    instrucciones += 'ej) Si ve alucinaciones, descr&iacute;bele las alucinaciones que ve.<br/>';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = 'ej) Si tiene una man&iacute;a/adicci&oacute;n, describe lo inc&oacute;modo y nervioso que est&aacute;, describe que necesita la sustancia X para calmarse.<br/>';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = '<u>En caso de Adicci&oacute;n:</u><br/> La primera vez, pon a su alcance el objeto/sustancia adictiva que sea (ej: una botella de alcohol, una cajita con opio, etc...)';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = 'ej) Si ve personas/cosas que no existen, descr&iacute;beselas.';
    html_code += print_fortune_cookie(instrucciones);

    html_code += '<br/>';

    instrucciones = 'Seg&uacute;n la intensidad del trastorno, m&aacute;s intenso y frecuente ser&aacute; lo que le describas.';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = 'Describe el dolor, ansiedad, picaz&oacute;n, incomodidad que tiene.';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = 'Puedes poner los sonidos que oye, una m&uacute;sica rara, etc...';
    html_code += print_fortune_cookie(instrucciones);

    instrucciones = 'Para seguir adelante, el personaje puede desafiar el peligro con <u>Voluntad</u>.';
    html_code += print_fortune_cookie(instrucciones);

    element.innerHTML = html_code;
    element.scrollTop = "0";
} //function print_trastornos(element_id)
