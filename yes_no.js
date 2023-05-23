
function compute_yes_no(balance) {
    //If balance = 0, no forcing
    //If balance = +1, forcing YES
    //If balance = -1, forcing NO
    var yes = random(1, 7);

    if (balance > 0) {
        yes = Math.max(yes, random(1, 7));
    } //if (balance > 0)

    var no = random(1, 7);

    if (balance < 0) {
        no = Math.max(no, random(1, 7));
    } //if (balance < 0)

    var fortune_text = '<span class="big">';

    if (yes == no) {
        fortune_text += 'Giro<br/>Argumental<br/>(Tira en Musas)';
    } else if (yes > no) {
        fortune_text += 'Si';
    } else { //if (yes < no)
        fortune_text += 'No';
    } //if (yes < no)

    if (yes != no && yes >= 4 && no >= 4) {
        fortune_text += '<br/>y adem&aacute;s...<br/>(Tira en Musas)';
    } else if (yes != no && yes <= 3 && no <= 3) {
        fortune_text += '<br/>pero...<br/>(Tira en Musas)';
    } //if (yes <= 3 && no <= 3)

    fortune_text += '</span>';
    //~ fortune_text += '<br/><br/>(Si: ' + yes + ' No: ' + no + ')';

    return print_fortune_cookie(fortune_text);
} //function compute_yes_no(balance)





function print_si_no(element_id) {
    var element = document.getElementById(element_id);
    if (!element) return;

    var html_code = "";
    html_code += compute_yes_no(0);
    element.innerHTML = html_code;
    element.scrollTop = "0";
} //function print_si_no(element_id)
