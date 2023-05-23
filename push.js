
let LAST_PUSH_VALUE = 0;


function print_push(element_id) {
    LAST_PUSH_VALUE = random(1, 7);
    aux_print_push(element_id, LAST_PUSH_VALUE);
} //function print_push(element_id)



function print_force_push(element_id) {
    LAST_PUSH_VALUE += random(1, 7);
    aux_print_push(element_id, LAST_PUSH_VALUE);
} //function print_force_push(element_id)



function aux_print_push(element_id, value) {
    var element = document.getElementById(element_id);
    if (!element) return;

    var fortune_text = '<span class="big">';
    fortune_text += value;
    fortune_text += '<br/>';

    var print_consecuencias = false;
    var print_movimientos_dj = false;

    if (value < 5) {
        fortune_text += '&Eacute;xito parcial';
        print_consecuencias = true;
    } else if (value > 6) {
        fortune_text += 'Fallo';
        LAST_PUSH_VALUE = 0;
        print_consecuencias = true;
        print_movimientos_dj = true;
    } else {
        fortune_text += '&Eacute;xito total';
        LAST_PUSH_VALUE = 0;
    }

    fortune_text += '</span>';

    var html_code = "";
    html_code += print_fortune_cookie(fortune_text);

    if (print_consecuencias) {
        html_code += '<br/>';
        html_code += compute_fortunes(CONSECUENCIAS, 1);
        html_code += '<br/>';
        html_code += compute_fortunes(CONSECUENCIAS, 1);
    } //if (print_consecuencias)

    if (print_movimientos_dj) {
        html_code += '<br/>';
        html_code += compute_fortunes(MOVIMIENTOS_DJ, 1);
    } //if (print_consecuencias)

    element.innerHTML = html_code;
    element.scrollTop = "0";
} //function aux_print_push(element_id, value)
