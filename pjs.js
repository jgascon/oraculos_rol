let PJ_ESTILO = [
    "Power Gamer",
    "Patea-Culos",
    "T&aacute;ctico resuelve-enigmas",
    "Especialista (Ninja)",
    "Actor del M&eacute;todo",
    "Contador de Historias",
]; //let PJ_ESTILO =



let PJ_ESTADO = [
    "Estilo primario",
    "Estilo primario",
    "Estilo primario",
    "Estilo secundario",
    "Estilo secundario",
    "Estilo terciario",
    "Power Gamer",
    "Patea-Culos",
    "T&aacute;ctico resuelve-enigmas",
    "Especialista (Ninja)",
    "Actor del M&eacute;todo",
    "Contador de Historias",
]; //let PJ_ESTADO =




function print_pj(element_id) {
    var element = document.getElementById(element_id);
    if (!element) return;

    var nuevo_pj_text = '';
    nuevo_pj_text += 'Primario: ' + random_from_list(PJ_ESTILO);
    nuevo_pj_text += '<br/>';
    nuevo_pj_text += 'Secundario: ' + random_from_list(PJ_ESTILO);
    nuevo_pj_text += '<br/>';
    nuevo_pj_text += 'Terciario: ' + random_from_list(PJ_ESTILO);

    var html_code = "";
    html_code += compute_fortunes(PJ_ESTADO, 1);
    html_code += '<br/>';
    html_code += print_fortune_cookie(nuevo_pj_text);

    element.innerHTML = html_code;
    element.scrollTop = "0";
} //function print_pj(element_id)
