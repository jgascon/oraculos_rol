
let MOVIMIENTOS_DJ = [
    "Sep&aacute;ralos o j&uacute;ntalos.",
    "Ponlos en aprietos.",
    "Haz que el mundo sea a&uacute;n m&aacute;s extra&ntilde;o.",
    "Incapac&iacute;talos (pero nunca los mates).",
    "Amen&aacute;zalos (pero nunca los mates).",
    "Arreb&aacute;tales algo.",
    "Vuelve uno de sus Movimientos en su contra.",
    "Dales exactamente lo que quieren, pero retu&eacute;rcelo.",
    "Presagia futuros problemas.",
    "Di lo que est&aacute; en juego y d&eacute;jales decidir.",
    "Hazles una pregunta muy directa y construye desde su respuesta.",
    "Utiliza un movimiento de monstruo, peligro o localizaci&oacute;n.",
    "Revela una verdad inc&oacute;moda.",
    "Muestra se&ntilde;ales de una amenaza inminente.",
    "Haz da&ntilde;o.",
    "Agota sus recursos.",
    "Haz que su movimiento se vuelva en su contra.",
    "Sep&aacute;ralos.",
    "Ofrece una oportunidad que se ajuste a las capacidades de una clase.",
    "Pon de manifiesto un inconveniente de su clase, raza o equipo.",
    "Ofrece una oportunidad, con o sin coste.",
    "Pon a alguien en un aprieto.",
    "Diles los requisitos o consecuencias y pregunta.",
    "Saca a relucir un conflicto, ya sea antiguo o nuevo.",
    "Pon en peligro a alguien.",
    "Haz da&ntilde;o (o interc&aacute;mbialo).",
    "Ofrece una oportunidad con un coste.",
    "Revela un trato hecho en ausencia de los personajes.",
    "Vuelve un movimiento suyo en su contra.",
    "Ofr&eacute;celes o recl&aacute;males una Deuda.",
    "Moviliza recursos para cambiar las probabilidades.",
    "Avisa a alguien del peligro que se cierne.",
    "Bloquea, explota o reclama un lugar poderoso.",
    "Di las consecuencias y pregunta.",
    "Activa las desventajas de sus cosas.",
    "Haz un movimiento de Peligro o Facci&oacute;n.",
    "Despu&eacute;s de cada movimiento: «&iquest;Qu&eacute; haces?».",
    "Revela una verdad inc&oacute;moda.",
    "Inflingir da&ntilde;o f&iacute;sico, enfermedad o veneno.",
    "Gastar Recursos.",
    "Ofrecer una oportunidad, con o sin coste.",
    "Escalar el horror.",
    "Volver uno de sus movimientos del rev&eacute;s.",
    "Activar etiquetas negativas.",
]; //let MOVIMIENTOS_DJ = [



function print_movimientos_dj(element_id) {
    var element = document.getElementById(element_id);
    if (!element) return;

    var html_code = "";
    let cosa_text;

    for (let i=0; i<2; i++) {
        cosa_text = random_from_list(MOVIMIENTOS_DJ);

        if (i > 0) {
            html_code += '<br/>';
        } //if (i > 0) {

        html_code += print_fortune_cookie(cosa_text);
    }; //for (let i=0; i<2; i++) {

    element.innerHTML = html_code;
    element.scrollTop = "0";
} //function print_movimientos_dj(element_id)
