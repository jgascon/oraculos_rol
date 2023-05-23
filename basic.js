
function replace_all(texto, search, change) {
    var regex = new RegExp(search, 'g');
    return texto.replace(regex, change) ;
}; //function replace_all(texto, search, change)



function random(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
        //Math.random() * (max - min + 1) + min
    )
} //function random(min, max)



function random_from_list(my_list) {
    var number = random(0, my_list.length);
    return my_list[number];
} //function random_from_list(my_list)
