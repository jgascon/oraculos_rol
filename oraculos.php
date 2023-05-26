<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<meta charset="UTF-8">

<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.01, minimum-scale=1.01, maximum-scale=1.01, user-scalable=no">
<meta name="HandheldFriendly" content="true">

<!--
    Página del proyecto:
    
        https://github.com/jgascon/oraculos_rol
        
    Descarga el código fuente en:
    
        https://github.com/jgascon/oraculos_rol.git
-->

<?

function file_to_string($filename) {
    $contenido = "";

    $fd = fopen($filename, 'rb');
    if (flock($fd, LOCK_SH)) {
        $contenido = file_get_contents($filename);
        flock($fd, LOCK_UN);
    } //if (flock($fd, LOCK_SH))
    fclose($fd);

    return $contenido;
} //function file_to_string($filename)

?>


<head>
	<title>Oraculos:</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta name="generator" content="Geany 1.39" />
</head>
<body>

    <style>
        body {
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0;
            padding: 0;
            background-color: black;
            text-align: center;
            overscroll-behavior: contain;            
            //border: 1px solid red;
        }

        #oracles_body {
            display: block;
            position: absolute;
            top: 2mm;
            left: 2mm;
            right: 2mm;
            bottom: 45mm;
            //bottom: 65mm;
            border-radius: 5mm;
            overflow-x: auto;
            overflow-y: scroll;
            overscroll-behavior: contain;            
            border: 1px solid white;
        }

        #buttons_body {
            display: block;
            position: absolute;
            bottom: 2mm;
            left: 2mm;
            right: 2mm;
            width: auto;
            height: 40mm;
            //height: 60mm;
            overflow-x: scroll;
            overflow-y: auto;
            overscroll-behavior: contain;            
            //border: 1px solid red;
        }
    </style>
    <script>
        <? echo file_to_string(__DIR__ . "/basic.js"); ?>

        <? echo file_to_string(__DIR__ . "/movimientos_dj.js"); ?>
        <? echo file_to_string(__DIR__ . "/cosas.js"); ?>
        <? echo file_to_string(__DIR__ . "/detalles.js"); ?>
        <? echo file_to_string(__DIR__ . "/armas.js"); ?>
        <? echo file_to_string(__DIR__ . "/vehiculos.js"); ?>
        <? echo file_to_string(__DIR__ . "/heridas.js"); ?>
        <? echo file_to_string(__DIR__ . "/trastornos.js"); ?>
        <? echo file_to_string(__DIR__ . "/lugares.js"); ?>
        <? echo file_to_string(__DIR__ . "/objetos_paramos_aventurados.js"); ?>

        <? echo file_to_string(__DIR__ . "/icons.js"); ?>
        <? echo file_to_string(__DIR__ . "/emojis.js"); ?>
        <? echo file_to_string(__DIR__ . "/fortunes.js"); ?>
        <? echo file_to_string(__DIR__ . "/ironsworn.js"); ?>
        <? echo file_to_string(__DIR__ . "/dw.js"); ?>
        <? echo file_to_string(__DIR__ . "/emociones.js"); ?>
        <? echo file_to_string(__DIR__ . "/mecanismos.js"); ?>
        <? echo file_to_string(__DIR__ . "/inmersion.js"); ?>

        <? echo file_to_string(__DIR__ . "/monstruos.js"); ?>
        <? echo file_to_string(__DIR__ . "/adjetivos_lovecraft.js"); ?>
        <? echo file_to_string(__DIR__ . "/pistas.js"); ?>
        <? echo file_to_string(__DIR__ . "/obstaculos.js"); ?>
        <? echo file_to_string(__DIR__ . "/pnjs.js"); ?>
        <? echo file_to_string(__DIR__ . "/consecuencias.js"); ?>
        <? echo file_to_string(__DIR__ . "/misiones.js"); ?>

        <? echo file_to_string(__DIR__ . "/pjs.js"); ?>
        <? echo file_to_string(__DIR__ . "/push.js"); ?>
        <? echo file_to_string(__DIR__ . "/yes_no.js"); ?>

        <? echo file_to_string(__DIR__ . "/poker_deck.js"); ?>
        <? echo file_to_string(__DIR__ . "/liminal_horror.js"); ?>
        <? echo file_to_string(__DIR__ . "/magia.js"); ?>
        <? echo file_to_string(__DIR__ . "/tesoros.js"); ?>
        <? echo file_to_string(__DIR__ . "/asentamientos.js"); ?>

        function clear(element_id) {
            let element = document.getElementById(element_id);
            if (!element) return;
            element.innerHTML = '';
        } //function clear(element_id)


        function clear_oracles_body() {
            clear('oracles_body');
        } //function clear_oracles_body() {


        function print_fortune_cookie(fortune_text) {
            let html_code = '';
            let html_template = '<div class="fortune_cookie"><p>#TEXT#</p></div>';
            fortune_text = replace_all(fortune_text, '%0A', '<br/>');
            html_code += replace_all(html_template, '#TEXT#', fortune_text);
            return html_code;
        } //function print_fortune_cookie(print_fortune_cookie)


        function print_list(title, array_of_items) {
            let html_code = '';
            let html_template = '<div class="fortune_big_cookie"><ul><li>#ITEMS#</li></ul></div>';
            let list_text = array_of_items.join('</li><li>');
            list_text = replace_all(list_text, '%0A', '<br/>');
            html_code += replace_all(html_template, '#ITEMS#', list_text);
            return html_code;
        } //function print_list(title, array_of_items)




        function compute_icons(number_of_icons) {
            let html_code = '';
            let icon_src;
            let html_template = '<div class="fortune_cookie"><img src="images/#ICON#"/></div>';

            for (let i=0; i<number_of_icons; i++) {
                icon_src = random_from_list(ICONS);
                html_code += replace_all(html_template, '#ICON#', icon_src);
            } //for (let i=0; i<number_of_icons; i++)

            return html_code;
        } //function compute_icons()



        function compute_emojis(number_of_emojis) {
            let html_code = '';
            let emoji_src;
            let html_template = '<div class="fortune_cookie"><img src="images/emojis/#EMOJI#"/></div>';

            for (let i=0; i<number_of_emojis; i++) {
                emoji_src = random_from_list(EMOJIS);
                html_code += replace_all(html_template, '#EMOJI#', emoji_src);
            } //for (let i=0; i<number_of_emojis; i++)

            return html_code;
        } //function compute_emojis()



        function compute_fortunes(my_list, number_of_fortunes) {
            let html_code = '';
            let fortune_text;

            for (let i=0; i<number_of_fortunes; i++) {
                fortune_text = random_from_list(my_list);
                html_code += print_fortune_cookie(fortune_text);
            } //for (let i=0; i<number_of_fortunes; i++)

            return html_code;
        } //function compute_fortunes(number_of_fortunes)



        function print_dados(element_id) {
            let element = document.getElementById(element_id);
            if (!element) return;

            let html_code = '';

            let oneD6 = random(1, 7);
            let anotherD6 = random(1, 7);

            //Dados más usados:
            let fortune_text = '<span class="big">';
            fortune_text += '1d6: ' + random(1, 7);
            fortune_text += '<br/>';
            let resultado_2d6 = (oneD6 + anotherD6);
            fortune_text += '2d6: ' + oneD6 + ',' + anotherD6 + ' = ' + resultado_2d6;
            fortune_text += '<br/>';
            fortune_text += '1d100: ' + random(1, 101);
            fortune_text += '</span>';
            html_code += print_fortune_cookie(fortune_text);

            html_code += '<br/>';

            //Dados más raros:
            fortune_text = '<span class="big">';
            fortune_text += '1d20: ' + random(1, 21);
            fortune_text += '<br/>';
            fortune_text += '1d12: ' + random(1, 13);
            fortune_text += '<br/>';
            fortune_text += '1d8: ' + random(1, 9);
            fortune_text += '</span>';
            html_code += print_fortune_cookie(fortune_text);

            html_code += '<br/>';

            //Dados D666 y D1000:
            fortune_text = '<span class="big">';
            fortune_text += '1d666: ' + random(1, 7) + '' + random(1, 7) + '' + random(1, 7);
            fortune_text += '<br/>';
            fortune_text += '1d1000: ' + random(1, 1001);
            fortune_text += '</span>';
            html_code += print_fortune_cookie(fortune_text);

            if (resultado_2d6 <= 6) {
                html_code += '<br/>';
                html_code += compute_fortunes(MOVIMIENTOS_DJ, 1);
            } //if (resultado_2d6 <= 6)

            element.innerHTML = html_code;
            element.scrollTop = "0";
        } //function print_dados(element_id)






        function print_musas(element_id) {
            let element = document.getElementById(element_id);
            if (!element) return;

            let html_code = "";
            html_code += compute_icons(2);
            html_code += '<br/>';
            html_code += compute_fortunes(FORTUNES, 2);
            html_code += '<br/>';
            html_code += compute_fortunes(IRONSWORN, 2);
            html_code += '<br/>';
            html_code += compute_fortunes(DW, 2);
            element.innerHTML = html_code;
            element.scrollTop = "0";
        } //function print_musas(element_id)



        function print_emojis(element_id) {
            let element = document.getElementById(element_id);
            if (!element) return;

            let html_code = "";
            html_code += compute_emojis(2);
            element.innerHTML = html_code;
            element.scrollTop = "0";
        } //function print_emojis(element_id)



        function print_lugares(element_id) {
            let element = document.getElementById(element_id);
            if (!element) return;

            let html_code = "";
            html_code += compute_fortunes(LUGARES_SOMBRAS_URBANAS, 1);
            html_code += compute_fortunes(DETALLES_LUGARES, 1);
            html_code += compute_fortunes(DESCRIPTORES_CIUDAD_BLADES, 1);
            html_code += '<br/>';

            let lugar_paramos = random_from_list(LUGARES_PARAMOS_AVENTURADOS);
            lugar_paramos += '<br/>' + random_from_list(LUGARES_PARAMOS_AVENTURADOS_ADJETIVO);
            lugar_paramos += '<br/>de ' + random_from_list(LUGARES_PARAMOS_AVENTURADOS_NOMBRE);
            html_code += print_fortune_cookie(lugar_paramos);

            html_code += compute_fortunes(LUGARES_PARAMOS_AVENTURADOS_ASENTAMIENTO, 2);

            html_code += '<br/>';
            html_code += compute_lugares_scraps(2);

            html_code += '<br/>';
            let dungeon_paramos = 'Dungeon de: ' + random_from_list(DUNGEON_PARAMOS_AVENTURADOS_CREADOR);
            dungeon_paramos += '<br/>Función: ' + random_from_list(DUNGEON_PARAMOS_AVENTURADOS_FUNCION);
            dungeon_paramos += '<br/>Ruina: ' + random_from_list(DUNGEON_PARAMOS_AVENTURADOS_RUINA);
            dungeon_paramos += '<br/>Causa: ' + random_from_list(DUNGEON_PARAMOS_AVENTURADOS_CAUSAS);
            html_code += print_fortune_cookie(dungeon_paramos);

            html_code += '<br/>';
            html_code += compute_asentamiento();

            html_code += '<br/>';
            html_code += compute_fortunes(DUNGEON_PARAMOS_AVENTURADOS_DETALLES, 2);

            html_code += '<br/>';
            html_code += compute_fortunes(OBJETOS_PARAMOS_AVENTURADOS, 2);

            html_code += '<br/>';
            html_code += print_inmersion(2);

            html_code += '<br/>';
            html_code += compute_fortunes(PREGUNTAS_LUGAR, 1);

            element.innerHTML = html_code;
            element.scrollTop = "0";
        } //function print_lugares(element_id)




        function print_pnj(element_id) {
            let element = document.getElementById(element_id);
            if (!element) return;

            let html_code = "";

            let pnj_name = random_from_list(NOMBRES_PNJ);
            pnj_name += '<br/>' + random_from_list(APELLIDOS_PNJ);
            pnj_name += '<br/>' + random_from_list(APODOS_PNJ);
            html_code += print_fortune_cookie(pnj_name);
            html_code += compute_fortunes(APARIENCIAS_PNJ, 1);

            html_code += '<br/>';
            html_code += compute_fortunes(PROFESIONES_PNJ, 1);
            html_code += compute_fortunes(GRADOS_PNJ, 1);

            html_code += '<br/>';
            html_code += compute_fortunes(EMOCIONES, 1);

            html_code += '<br/>';
            html_code += compute_fortunes(MOTIVACIONES, 1);
            html_code += compute_fortunes(MECANISMOS, 1);
            html_code += compute_fortunes(RASGOS_PNJ, 1);
            html_code += compute_fortunes(INTERESES_PNJ, 1);
            html_code += '<br/>';
            html_code += compute_fortunes(PECULIARIDADES_PNJ, 1);

            element.innerHTML = html_code;
            element.scrollTop = "0";
        } //function print_pnj(element_id)


        function print_misiones(element_id) {
            let element = document.getElementById(element_id);
            if (!element) return;

            let html_code = '';

            html_code += print_mision_push();

            html_code += '<br/><br/><br/>';
            html_code += print_mision_prof_tentac();

            html_code += '<br/><br/><br/>';
            html_code += print_mision_fist();

            html_code += '<br/><br/><br/>';
            html_code += print_mision_sombras_urbanas();

            html_code += '<br/><br/><br/>';
            html_code += print_mision_dungeon_world();

            element.innerHTML = html_code;
            element.scrollTop = "0";
        } //function print_misiones(element_id)



        function print_poker_card(element_id) {
            let element = document.getElementById(element_id);
            let html_code = get_poker_deck_card();
            html_code += print_fortune_cookie('Quedan<br/>' + get_poker_deck_size() + '<br/>cartas');
            element.innerHTML = html_code;
            element.scrollTop = "0";
        } //function get_poker_deck_card(element_id)

    </script>

    <style>
        button {
            display: inline-block;
            position: relative;
            margin: 1mm;
            width: auto;
            height: 16mm;
            padding: 1mm;
            padding-left: 4mm;
            padding-right: 4mm;
            background-color: black;
            color: white;
            border-radius: 2mm;
            border: 2px solid white;
        }

        button:hover {
            background-color: orange;
            color: black;
            border: 2px solid orange;
        }

        .big {
            font-size: 15pt;
        }


        .fortune_cookie {
            display: inline-block;
            min-width: 128px;
            max-width: 256px;
            height: 128px;
            margin: 2mm;
            padding: 0;
            color: white;
            vertical-align: middle;
            overflow: hidden;
            border-radius: 2mm;
            border: 1px solid white;
        }

        .fortune_cookie img {
            display: block;
            padding: 0;
            margin: 0;
        }

        .fortune_cookie p {
            display: inline-block;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
            padding-left: 2mm;
            padding-right: 2mm;
            line-height: 1.5;
            font-size: 11pt;
            text-align: center;
            //display: inline-block;
            vertical-align: middle;
            //border: 1px solid green;
        }

        .fortune_big_cookie {
            display: inline-block;
            min-width: 50%;
            max-width: 90%;
            height: auto;
            margin: 2mm;
            padding: 0;
            padding-right: 5mm;
            color: white;
            text-align: left;
            vertical-align: middle;
            overflow: hidden;
            border-radius: 2mm;
            border: 1px solid white;
            background-color: black;
        }

        .poker_card {
            display: inline-block;
            width: 148px;
            height: 215px;
            vertical-align: middle;
            overflow: hidden;
            border-radius: 2mm;
            background-image: url('images/Poker.png');
            background-width: 100%;
        }

        h2, h3 {
            color: white;
            text-decoration: underline;
        }  
        
        p {
            color: white;
        }        
    </style>


    <div id="oracles_body">
        <h2>
            Or&aacute;culos 
        </h2>        
        <h3>
            Creado por: 
        </h3>
        <p>
            Jorge Gasc&oacute;n P&eacute;rez
        </p>
        <h3>
            Iconos: 
        </h3>        
        <p>
            MIT License by<br/>
            SensaEmoji by Sensadesign (https://github.com/sensadesign/sensaemoji/blob/main/LICENSE)
        </p>
        <p>
            Creative Commons 3.0 BY license by<br/> 
            Lorc (http://lorcblog.blogspot.com), Delapouite (http://delapouite.com), John Colburn (http://ninmunanmu.com), Felbrigg (http://blackdogofdoom.blogspot.co.uk), John Redman (http://www.uniquedicetowers.com), Carl Olsen (https://twitter.com/unstoppableCarl), sbed (http://opengameart.org/content/95- game-icons), PriorBlue, Willdabeast (http://wjbstories.blogspot.com), Viscious Speed (http://viscious-speed.deviantart.com), Lord Berandas (http://berandas.deviantart.com), Irongamer (http://ecesisllc.wix.com/home), HeavenlyDog (http://www.gnomosygoblins.blogspot.com), Lucas, Faithtoken (http://www.faithtoken.com) , Skoll, Andy Meneely (http://www.se.rit.edu/~andy/), Cathelineau, Kier Heyl, Simon (aussiesim), Sparker (http://citizenparker.com), Zeromancer, rihlsul, Quoting, Guard13007, (https://guard13007.com), DarkZaitzev (http://darkzaitzev.deviantart.com), SpencerDub, GeneralAce135, Zajkonur, https://game-icons.net, and Various artists,
        </p>
    </div> <!-- <div id="oracles_body"> -->


    <div id="buttons_body">
        <button onclick="print_si_no('oracles_body')">Si / No</button>
        <button onclick="print_musas('oracles_body')">Musas</button>
        <button onclick="print_push('oracles_body')">Push</button>
        <button onclick="print_force_push('oracles_body')">+ Push</button>
        <button onclick="print_dados('oracles_body')">Dados</button>
        <button onclick="print_cosas('oracles_body')">Cosas</button>
        <button onclick="print_detalles('oracles_body')">Detalles</button>
        <button onclick="print_emojis('oracles_body')">Emojis</button>
        <button onclick="print_armas('oracles_body')">Armas</button>
        <button onclick="print_vehiculos('oracles_body')">Vehiculos</button>
        <button onclick="print_heridas('oracles_body')">Heridas</button>
        <button onclick="print_trastornos('oracles_body')">Trastornos</button>
        <button onclick="print_obstaculos('oracles_body')">Obst&aacute;culos</button>
        <button onclick="print_pistas('oracles_body')">Pistas</button>
        <button onclick="print_lugares('oracles_body')">Lugares</button>
        <button onclick="print_pnj('oracles_body')">PNJ</button>
        <button onclick="print_monstruos('oracles_body')">Monstruos</button>
        <button onclick="print_magia('oracles_body')">Magia</button>
        <button onclick="print_tesoros('oracles_body')">Tesoros</button>
        <button onclick="print_pj('oracles_body')">PJ</button>
        <button onclick="print_liminal_horror('oracles_body')">Liminal</button>
        <button onclick="print_misiones('oracles_body')">Misiones</button>
        <button onclick="print_poker_card('oracles_body')">Poker</button>
        <button onclick="reset_poker_deck(); clear_oracles_body()">Reset Poker</button>
    </div> <!-- <div id="buttons_body"> -->

    <script>
        document.addEventListener('touchstart', touchstartHandler, {passive: false});
        document.addEventListener('touchmove', touchmoveHandler, {passive: false});
    </script>
        
</body>
</html>
