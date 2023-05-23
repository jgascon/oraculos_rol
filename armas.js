let ARMAS = [
    "Piedra",
    "Bast&oacute;n",
    "Clava",
    "Daga",
    "Gran clava",
    "Hacha de mano",
    "Hoz",
    "Jabalina",
    "Lanza",
    "Martillo ligero",
    "Maza",
    "Arco corto",
    "Ballesta ligera",
    "Dardo",
    "Honda",
    "Alabarda",
    "Atarraga",
    "Cimitarra",
    "Espada corta",
    "Espada larga",
    "Espad&oacute;n",
    "Estoque",
    "Hacha de batalla",
    "Gran hacha",
    "Guja",
    "Lanza de caballer&iacute;a",
    "L&aacute;tigo",
    "Lucero del alba",
    "Martillo de guerra",
    "Mayal",
    "Pica",
    "Pica de guerra",
    "Tridente",
    "Arco largo",
    "Ballesta de mano",
    "Ballesta pesada",
    "Cerbatana",
    "Red",
]; //let ARMAS = [


let ARMAS_MODERNAS = [
    "Aerosol de pimienta",
    "Antorcha encendida",
    "Arco y flechas",
    "Ballesta",
    "Bumer&aacute;n de guerra",
    "Cable el&eacute;ctrico ( 220 V)",
    "Cable estrangulador",
    "Cachiporra (Bast&oacute;n y similares)",
    "Cuchillo grande (machete, etc.)",
    "Cuchillo mediano (cuchillo de trinchar, etc.)",
    "Cuchillo peque&ntilde;o (navaja, etc.)",
    "Destral / hoz",
    "Espada ligera (florete, bast&oacute;n espada)",
    "Espada mediana (estoque, espada)",
    "Espada pesada (sable de caballer&iacute;a)",
    "Hacha de le&ntilde;ador",
    "Lanza (lanza de caballer&iacute;a)",
    "Lanza arrojada",
    "L&aacute;tigo",
    "Motosierra",
    "Hudillera",
    "Nunchaku",
    "Palo grande",
    "Bate de b&eacute;isbol",
    "Palo de criquet",
    "Atizador",
    "Palo peque&ntilde;o",
    "Porra de polic&iacute;a",
    "Piedra arrojada",
    "Pistola el&eacute;ctrica (contacto)",
    "Pistola el&eacute;ctrica (dardos)",
    "Shuriken",
    "Beretta M 9",
    "Derringer . 25",
    "IMI Desert Eagle",
    "Luger modelo P08",
    "Pistola autom&aacute;tica .22",
    "Pistola autom&aacute;tica .32",
    "Pistola autom&aacute;tica .45",
    "Pistola autom&aacute;tica Gloek 9 mm",
    "Pistola autom&aacute;tica .38",
    "Pistola de chispa",
    "Rev&oacute;lver .32",
    "Rev&oacute;lver .38",
    "Rev&oacute;lver .41",
    "Rev&oacute;lver .45",
    "Rev&oacute;lver Magnum .357",
    "Rev&oacute;lver Magnum .44",
    "Carabina de palanca",
    "Carabina SKS",
    "Fusil de aire comprimido",
    "Fusil de caza de elefantes",
    "Fusil de cerrojo",
    "Fusil de cerrojo",
    "Fusil Garand M2",
    "Fusil Marlin .444",
    "Fusil Martini-Henri .45",
    "Fusil semiautom&aacute;tico .30-06",
    "Lee-Enfield .303",
    "Mosquete Springfield .58",
    "Fusil Benelli M3 calibre 12 (culata plegable)",
    "Escopeta calibre 10",
    "Escopeta calibre 12 (2 ca&ntilde;ones)",
    "Escopeta recortada calibre 12 (2 ca&ntilde;ones)",
    "Escopeta calibre 12 (de corredera)",
    "Escopeta calibre 12 (semiautom&aacute;tica)",
    "Escopeta calibre 16 (2 ca&ntilde;ones)",
    "Escopeta calibre 20 (2 ca&ntilde;ones)",
    "SPAS calibre 12 (culata plegable)",
    "Bergmann MP181 / MP 2811",
    "Heckler & Koch",
    "MP5 Ingram MAC-11",
    "Subfusil Skorpion",
    "Subfusil UZI Thompson",
    "Fusil AK-47",
    "Fusil de asalto Galil M16A2",
    "Ametralladora Vickers .303",
    "Browning autom&aacute;tica M1918",
    "Browning M .30",
    "Gatling modelo 1882 Mark I",
    "Lewis Minigun",
    "Bomba casera",
    "Cartucho de dinamita",
    "C&oacute;ctel Molotov",
    "Detonador",
    "Explosivo pl&aacute;stico (C-4)",
    "Fusil de 5 pulgadas montado",
    "Granada de mano",
    "Lanzacohetes",
    "Lanzagranadas M79",
    "Lanzallamas",
    "Mina antipersonal",
    "Mina Claymore",
    "Mortero 81 mm",
    "Pistola de bengalas",
]; //let ARMAS_MODERNAS = [



function print_armas(element_id) {
    var element = document.getElementById(element_id);
    if (!element) return;

    var html_code = "";
    let cosa_text;

    for (let i=0; i<3; i++) {
        cosa_text = random_from_list(ARMAS);

        if (i > 0) {
            html_code += '<br/>';
        } //if (i > 0) {

        html_code += print_fortune_cookie(cosa_text);
    }; //for (let i=0; i<3; i++) {

    html_code += '<br/>';
    html_code += '<br/>';

    for (let i=0; i<3; i++) {
        cosa_text = random_from_list(ARMAS_MODERNAS);

        if (i > 0) {
            html_code += '<br/>';
        } //if (i > 0) {

        html_code += print_fortune_cookie(cosa_text);
    }; //for (let i=0; i<3; i++) {


    element.innerHTML = html_code;
    element.scrollTop = "0";
} //function print_armas(element_id)
