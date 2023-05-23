let VEHICULOS = [
    "Coche ",
    "Motocicleta ",
    "Helic&oacute;ptero",
    "Helic&oacute;ptero peque&ntilde;o",
    "Avi&oacute;n grande",
    "Avi&oacute;n de h&eacute;lice",
    "Tanque",
    "Lancha motora",
    "Autob&uacute;s",
    "Taxi",
    "Velero",
    "Carromato",
    "Carro",
    "Ala delta",
    "Paracaidas",
    "Motocarro",
    "Bicicleta",
]; //let VEHICULOS = [



function print_vehiculos(element_id) {
    var element = document.getElementById(element_id);
    if (!element) return;

    var html_code = "";
    let cosa_text;

    for (let i=0; i<1; i++) {
        cosa_text = random_from_list(VEHICULOS);

        if (i > 0) {
            html_code += '<br/>';
        } //if (i > 0) {

        html_code += print_fortune_cookie(cosa_text);
    }; //for (let i=0; i<1; i++) {

    element.innerHTML = html_code;
    element.scrollTop = "0";
} //function print_vehiculos(element_id)
