let MISION_PUSH_ACCION = [
    "Encontrar",
    "Explorar",
    "Descubrir",
    "Destruir",
    "Derrotar",
    "Derrocar",
    "Proteger",
    "Defender",
    "Salvar",
    "Conquistar",
    "Cautivar",
    "Dominar",
    "Superar",
    "Sobrevivir",
    "Escapar",
    "Capturar",
    "Recuperar",
    "Encarcelar",
]; //let MISION_PUSH_ACCION = [



let MISION_PUSH_OBJETIVO = [
    "Entidad",
    "Persona",
    "Facci&oacute;n",
    "Criatura",
    "Conocimiento",
    "Informaci&oacute;n",
    "Secreto",
    "Idea",
    "Valor",
    "Reputaci&oacute;n",
    "Poder",
    "Riqueza",
    "Ubicaci&oacute;n",
    "Ruta",
    "Comunidad",
    "Lugar",
    "Recurso",
    "Objeto",
    "Ingrediente",
    "Elemento",
    "Evento",
    "Fen&oacute;meno",
    "Incidente",
    "Leyenda",
]; //let MISION_PUSH_OBJETIVO = [



let MISION_PUSH_CONSECUENCIA = [
    "P&eacute;rdida",
    "Fracaso",
    "Costo",
    "Dominaci&oacute;n",
    "Opresi&oacute;n",
    "Influencia",
    "Destrucci&oacute;n",
    "Ruina",
    "Extinci&oacute;n",
    "Da&ntilde;o",
    "Muerte",
    "Sabotaje",
    "Cambio",
    "Corrupci&oacute;n",
    "Disputa",
    "Perturbaci&oacute;n",
    "Conflicto",
]; //let MISION_PUSH_CONSECUENCIA = [




function print_mision_push() {
    let accion_otro = random_from_list(MISION_PUSH_ACCION);
    let objetivo_otro = random_from_list(MISION_PUSH_OBJETIVO);

    let accion_tu = random_from_list(MISION_PUSH_ACCION);
    let objetivo_tu = random_from_list(MISION_PUSH_OBJETIVO);

    let consecuencia = random_from_list(MISION_PUSH_CONSECUENCIA);
    let objetivo_consecuencia = random_from_list(MISION_PUSH_OBJETIVO);

    let html_code = '';
    let mision_otro = 'Alguien quiere<br/>' + accion_otro + '<br/>' + objetivo_otro;
    html_code += print_fortune_cookie(mision_otro);
    html_code += '<br/>';
    let mision_tu = 'T&uacute; debes<br/>' + accion_tu + '<br/>' + objetivo_tu;
    html_code += print_fortune_cookie(mision_tu);
    html_code += '<br/>';
    let consecuencias = 'U ocurrir&aacute;<br/>' + consecuencia + '<br/>' + objetivo_consecuencia;
    html_code += print_fortune_cookie(consecuencias);

    return html_code;
}; //function print_mision_push()




let PELIGRO_DUNGEON_WORLD = [
    "Organizaciones ambiciosas",
    "Fuerzas planares",
    "Enemigos arcanos",
    "Hordas",
    "Lugares malditos",
]; //let PELIGRO_DUNGEON_WORLD = [


let SUBPELIGRO_DUNGEON_WORLD = {
    "Organizaciones ambiciosas": [
        "Buenos, pero equivocados (impulso: hacer lo «correcto» a cualquier precio).",
        "Gremio de ladrones (impulso: arrebatar mediante tretas).",
        "Culto (impulso: infestar desde dentro).",
        "Organizaci&oacute;n religiosa (impulso: establecer y seguir una doctrina).",
        "Gobierno corrupto (impulso: mantener el statu quo).",
        "C&aacute;bala (impulso: absorber a los poderosos, crecer).",
    ], //"Organizaciones ambiciosas": [
    "Fuerzas planares": [
        "Dios (impulso: conseguir adoradores).",
        "Pr&iacute;ncipe demonio (impulso: abrir las puertas del Infierno).",
        "Se&ntilde;or elemental (impulso: destrozar la creaci&oacute;n en sus elementos constituyentes).",
        "Fuerza del Caos (impulso: destruir todo indicio de orden).",
        "Coro de &aacute;ngeles (impulso: juzgar).",
        "Constructo de la Ley (impulso: eliminar el desorden aparente).",
    ], //"Fuerzas planares": [
    "Enemigos arcanos": [
        "Se&ntilde;or de los muertos vivientes (impulso: alcanzar la verdadera inmortalidad).",
        "Poderoso mago loco (impulso: buscar el aut&eacute;ntico poder m&aacute;gico).",
        "Artefacto sintiente (impulso: encontrar un portador digno).",
        "Antigua maldici&oacute;n (impulso: atrapar).",
        "Elegido (impulso: lograr que se cumpla su destino).",
        "Elegido (impulso: impedir que se cumpla su destino).",
        "Drag&oacute;n (impulso: acumular oro y joyas, proteger su progenie).",
    ], //"Enemigos arcanos": [
    "Hordas": [
        "B&aacute;rbaros errantes (impulso: aumentar su fuerza, aplastar a sus enemigos).",
        "Alima&ntilde;a humanoide (impulso: reproducirse, multiplicarse y consumir).",
        "Moradores subterr&aacute;neos (impulso: defender el complejo de los forasteros).",
        "Plaga de muertos vivientes (impulso: extenderse).",
    ], //"Hordas": [
    "Lugares malditos": [
        "Torre abandonada (impulso: atraer a los d&eacute;biles de voluntad).",
        "Territorio imp&iacute;o (impulso: engendrar el mal).",
        "V&oacute;rtice elemental (impulso: crecer, destrozar la realidad).",
        "Portal oscuro (impulso: vomitar demonios).",
        "Tierras de la Sombra (impulso: corromper o consumir a los vivos).",
        "Lugar de poder (impulso: ser controlado o domado).",
    ], //"Lugares malditos": [
}; //let SUBPELIGRO_DUNGEON_WORLD = {


let MOVIMIENTOS_DUNGEON_WORLD = {
    "Organizaciones ambiciosas": [
        "Atacar a alguien sigilosamente (raptar, etc&eacute;tera).",
        "Atacar a alguien directamente (una banda o un &uacute;nico asaltante).",
        "Absorber o comprar a alguien importante (puede que a un compa&ntilde;ero).",
        "Influir en instituciones poderosas (cambiar la ley, manipular la doctrina).",
        "Establecer un nuevo gobierno (dentro de la organizaci&oacute;n).",
        "Reclamar un territorio o recursos.",
        "Hacer un trato.",
        "Observar detenidamente a un enemigo en potencia.",
    ], //"Organizaciones ambiciosas": [
    "Fuerzas planares": [
        "Convertir a una organizaci&oacute;n (corromperla).",
        "Convertir a una organizaci&oacute;n (infiltrarse mediante influencia).",
        "Proporcionar sue&ntilde;os prof&eacute;ticos.",
        "Lanzar una maldici&oacute;n sobre un enemigo.",
        "Obtener una promesa a cambio de alg&uacute;n beneficio.",
        "Atacar indirectamente, a trav&eacute;s de intermediarios.",
        "En raras ocasiones, cuando las estrellas se alinean, atacar directamente.",
        "Alimentar rivalidades con otras fuerzas similares.",
        "Revelar una verdad, deseada o no, a alguien.",
    ], //"Fuerzas planares": [
    "Enemigos arcanos": [
        "Aprender conocimientos prohibidos.",
        "Lanzar un conjuro a trav&eacute;s del tiempo y el espacio.",
        "Atacar a un enemigo con magia, directa o indirectamente.",
        "Espiar a alguien mediante alg&uacute;n tipo de magia que lo permita.",
        "Reclutar a un seguidor o subalterno.",
        "Tentar a alguien con promesas.",
        "Exigir un sacrificio.",
    ], //"Enemigos arcanos": [
    "Hordas": [
        "Asaltar un basti&oacute;n de una civilizaci&oacute;n.",
        "Abrazar el caos interno.",
        "Cambiar de direcci&oacute;n s&uacute;bitamente.",
        "Arrollar a una fuerza inferior.",
        "Hacer una demostraci&oacute;n de predominio.",
        "Abandonar un antiguo hogar y encontrar uno nuevo.",
        "Aumentar de tama&ntilde;o reproduci&eacute;ndose y conquistando.",
        "Designar a un campe&oacute;n.",
        "Declarar la guerra y actuar conforme a esa declaraci&oacute;n sin dudas ni deliberaciones.",
    ], //"Hordas": [
    "Lugares malditos": [
        "Vomitar un monstruo menor.",
        "Extenderse a un lugar adyacente.",
        "Atraer a alguien a su interior.",
        "Crecer en intensidad o profundidad.",
        "Dejar un efecto persistente en un habitante o visitante.",
        "Ocultar algo a la vista.",
        "Ofrecer poder.",
        "Impedir la magia o intensificar sus efectos.",
        "Confundir u ofuscar la verdad o la orientaci&oacute;n.",
        "Corromper las leyes naturales.",
    ], //"Lugares malditos": [
}; //let MOVIMIENTOS_DUNGEON_WORLD = {





function print_mision_dungeon_world() {
    let html_code = '';
    let peligro_dungeon_world = random_from_list(PELIGRO_DUNGEON_WORLD);
    let peligro = '<u>Peligro Dungeon World:</u><br/>' + peligro_dungeon_world;
    html_code += print_fortune_cookie(peligro);

    let subpeligro_dungeon_world = random_from_list(SUBPELIGRO_DUNGEON_WORLD[peligro_dungeon_world]);
    let subpeligro = '<u>Subpeligro Dungeon World:</u><br/>' + subpeligro_dungeon_world;
    html_code += print_fortune_cookie(subpeligro);

    html_code += '<br/>';
    let movimientos_dungeon_world = MOVIMIENTOS_DUNGEON_WORLD[peligro_dungeon_world];
    html_code += print_list('<u>Movimientos Dungeon World:</u>', movimientos_dungeon_world);

    return html_code;
}; //function print_mision_dungeon_world()




let PISTA_PROFESORES_TENTACULOS = [
    "Una misiva",
    "Un telegrama",
    "Una carta",
    "Una notificaci&oacute;n legal",
    "Un titular",
    "Un anuncio por palabras",
    "Una publicaci&oacute;n cient&iacute;fica",
    "Un libro",
    "Una agenda",
    "Un diario",
    "Notas de campo",
    "Notas de investigaci&oacute;n",
    "Un artefacto misterioso",
    "Una estatua",
    "Un arma",
    "Joyas",
    "Una cita",
    "Una conferencia",
    "Un congreso",
    "Un seminario",
    "Un sue&ntilde;o compartido",
    "Una visi&oacute;n",
    "Una experiencia extracorporal",
    "Un viaje astral",
    "Contado directamente por un amigo/conocido",
    "Nota/fragmento de informaci&oacute;n/notas hist&oacute;ricas",
    "Reportaje de noticias",
    "Conversaci&oacute;n escuchada",
    "Presagio extra&ntilde;o/sue&ntilde;o/or&aacute;culo",
    "Observaci&oacute;n directa de alg&uacute;n suceso extra&ntilde;o",
    "Un benefactor rico que solicita su ayuda a cambio de un pago",
    "La polic&iacute;a (u otra autoridad) que solicita su ayuda y experiencia",
    "Una antigua reliquia familiar se cae y se rompe, revelando algo misterioso en su interior",
    "El investigador ha hecho algo malo y alguien lo sabe",
    "Los amenazan con chantajearlos a menos que hagan esto...",
    "Reliquia importante o art&iacute;culo perdido",
    "Libro robado",
    "Mapa o rumores de un gran misterio hasta ahora desconocido",
    "Figura notable que se fue hace alg&uacute;n tiempo en un viaje pero no ha regresado",
    "Un fot&oacute;grafo afirma haber capturado una imagen de un ser hasta ahora nunca antes registrado",
    "Tu amigo de mayor confianza te entrega un paquete y te implora que se lo lleves la persona X",
    "Un convoy pasa cerca de tu casa, muchos veh&iacute;culos militares y un cami&oacute;n grande que tiene todas las ventanas oscurecidas",
    "Un amigo cercano es arrestado y detenido en una instalaci&oacute;n de alto secreto",
    "Despiertas con tu cuerpo lleno de extra&ntilde;os tatuajes escarificados",
    "De turismo notas que los lugare&ntilde;os se est&aacute;n portando demasiado bien contigo",
    "Mientras viajas de A a B, tu transporte se estrella y queda varado en el desierto",
    "Descubres una extra&ntilde;a estructura",
    "Rumores de un templo perdido para los Antiguos",
    "Un sitio o pueblo remoto ha sido devastado por un fen&oacute;meno misterioso",
    "T&uacute; y un amigo descubren un extra&ntilde;o misterio en una biblioteca polvorienta",
    "Sue&ntilde;o recurrente e inquietante con informaci&oacute;n muy espec&iacute;fica sobre un lugar/hora",
    "Hay un fuerte golpe en tu puerta",
    "Una persona destacada ha sido secuestrada",
    "Un art&iacute;culo extra&ntilde;o ha salido a subasta",
    "Un pariente muere, dej&aacute;ndote su propiedad",
    "Hay un olor extra&ntilde;o en su casa",
    "Tu mascota se est&aacute; comportando de manera extra&ntilde;a en una cierta habitaci&oacute;n/lugar",
    "Naufragio/tormenta te ves forzado a ir a una isla con una vieja choza",
    "Encuentras un objeto extra&ntilde;o en el s&oacute;tano de tu casa",
    "Un amigo comienza a perder la cabeza, a consumirse",
    "Un amigo te invita a pasar una noche con &eacute;l en una casa con fen&oacute;menos paranormales",
    "Un amigo cient&iacute;fico te dice que ha hecho un descubrimiento milagroso",
    "&Eacute;l quiere reunirse contigo",
    "Extra&ntilde;os seres han sido avistados en el puerto por pescadores y marineros locales",
    "La casa de un pariente es mucho m&aacute;s antigua de lo que se pensaba",
    "Sale a la venta una pintura que ha pasado por varias manos",
    "Un pol&iacute;tico local comienza a actuar de forma extra&ntilde;a",
    "Alguien se acerca a ti y te ofrece mucho dinero para ayudar a limpiar el nombre de una persona",
    "Un viejo caso sin resolver llama tu atenci&oacute;n",
    "Una ni&ntilde;a que muri&oacute; en circunstancias misteriosas",
    "De camino al trabajo una ma&ntilde;ana, nadie te reconoce",
    "Se proyecta una pel&iacute;cula en el cine local",
    "Un veterano de guerra perturbado",
    "Un amigo que volvi&oacute; de un viaje te regala una preciosa figurita",
    "Un ge&oacute;logo est&aacute; en las noticias",
    "Un prisionero se escapa",
    "Un sumo sacerdote/sacerdotisa",
    "Durante un viaje en avi&oacute;n",
    "Mientras hablan con un conocido al azar",
    "Extra&ntilde;a estructura/formaci&oacute;n en medio del",
    "Sue&ntilde;as con un evento horrible y al d&iacute;a siguiente lees sobre el evento exacto en las noticias",
    "Un sobreviviente de un naufragio",
    "Los cuerpos han estado desapareciendo del cementerio local",
    "Un ni&ntilde;o mudo se hace amigo de ti",
    "Una galer&iacute;a organiza una exposici&oacute;n de un artista fallecido recientemente",
    "Viajas en tren",
]; //let PISTA_PROFESORES_TENTACULOS = [


let CONDUCE_A_PROFESORES_TENTACULOS = [
    "Ruinas antiguas",
    "Un pueblecito aletargado",
    "Una finca familiar",
    "Una universidad",
    "Una biblioteca",
    "Un sanatorio",
    "Un hospital",
    "Un lugar ex&oacute;tico",
    "Pesadillas colectivas",
    "Pesadillas compartidas",
    "Instalaci&oacute;n de alto secreto",
    "Otras dimensiones",
    "Cosas que cambian de sitio",
    "Un mineral jam&aacute;s visto",
    "Cambia de comportamiento",
]; //let CONDUCE_A_PROFESORES_TENTACULOS = [


let INVESTIGAR_PROFESORES_TENTACULOS = [
    "Una anomal&iacute;a cient&iacute;fica",
    "Climatolog&iacute;a inexplicable",
    "Mutaciones en animales",
    "Mutaciones en plantas",
    "Rayos globulares",
    "Fluctuaciones magn&eacute;ticas",
    "Una desaparici&oacute;n",
    "Desaparici&oacute;n de animales",
    "Desaparici&oacute;n de ni&ntilde;os",
    "Desaparici&oacute;n de famosos",
    "Desaparici&oacute;n de aviones",
    "Desaparici&oacute;n de buques oce&aacute;nicos",
    "Desaparici&oacute;n de obras de arte",
    "Desaparici&oacute;n de artefactos",
    "Desaparici&oacute;n de libros",
    "Un evento astron&oacute;mico",
    "Un eclipse solar",
    "Un eclipse lunar",
    "Lluvia de meteoros",
    "Alineaci&oacute;n planetaria",
    "Un descubrimiento ins&oacute;lito",
    "C&iacute;rculos en los cultivos",
    "Un lago subterr&aacute;neo",
    "Una red de cavernas",
    "Un recipiente sellado",
    "Un recipiente cerrado con llave",
    "Un esqueleto no identificado",
    "Un hecho preternatural",
    "Fantasmas",
    "Ovnis",
    "Lluvia de ranas",
    "Lluvia de sangre",
    "Langostas",
    "Un ritual obsceno",
    "Sacrificios humanos",
    "Sacrificios de animales",
    "Org&iacute;as de sangre",
    "Canibalismo",
    "Necrofilia",
    "Al d&iacute;a siguiente, tu amigo acaba muerto",
    "Tu amigo desaparece",
    "El suministro de agua de la ciudad se ha secado y nadie sabe por qu&eacute;",
    "Los habitantes de una ciudad se est&aacute;n enfermando",
    "Los habitantes de una ciudad se est&aacute;n volviendo locos",
    "Los habitantes de una ciudad se est&aacute;n muriendo misteriosamente",
    "Perturbaci&oacute;n ambiental",
    "Clima extra&ntilde;o",
    "Infestaci&oacute;n",
    "Investigador de plagas",
    "Un objeto infame, que se dice que est&aacute; maldito, ha aparecido y est&aacute; causando estragos.",
]; //let INVESTIGAR_PROFESORES_TENTACULOS = [







let REVELACION_PROFESORES_TENTACULOS = [
    "Los dioses sin nombre viven",
    "Una prueba de que los dioses sin nombre existen",
    "Una visi&oacute;n de las formas de los dioses sin nombre",
    "Los dioses sin nombre nos vigilan",
    "Los dioses sin nombre esperan el momento de retornar",
    "No estamos solos",
    "Civilizaciones alien&iacute;genas han visitado la tierra",
    "Civilizaciones alien&iacute;genas han estado en un pasado lejano",
    "Civilizaciones alien&iacute;genas est&aacute;n en el presente",
    "No todos somos humanos",
    "Prueba linajes humanos mezclados con alien&iacute;genas",
    "Prueba linajes humanos mezclados con seres de otras realidades",
    "No fuimos los primeros",
    "Prueba de civilizaciones no humanas en la Tierra m&aacute;s antiguas que la nuestra",
    "Se ocultan entre nosotros",
    "Gules",
    "Vampiros",
    "Seres multiformes",
    "El horror, el horror",
    "Alguien ha invocado algo que no deber&iacute;a existir",
    "Alguien ha despertado algo que no deber&iacute;a existir"
]; //let REVELACION_PROFESORES_TENTACULOS = [



function print_mision_prof_tentac() {
    let html_code = '';
    let pista = 'Una pista:<br/>' + random_from_list(PISTA_PROFESORES_TENTACULOS);
    html_code += print_fortune_cookie(pista);

    html_code += '<br/>';
    let conduce_a = 'Conduce a:<br/>' + random_from_list(CONDUCE_A_PROFESORES_TENTACULOS);
    html_code += print_fortune_cookie(conduce_a);

    html_code += '<br/>';
    let investigar = 'Investigar:<br/>' + random_from_list(INVESTIGAR_PROFESORES_TENTACULOS);
    html_code += print_fortune_cookie(investigar);

    html_code += '<br/>';
    let revelacion = 'Revelaci&oacute;n:<br/>' + random_from_list(REVELACION_PROFESORES_TENTACULOS);
    html_code += print_fortune_cookie(revelacion);

    return html_code;
}; //function print_mision_prof_tentac()




let PELIGRO_SOMBRAS_URBANAS = [
    "Revoluci&oacute;n",
    "Maniobra pol&iacute;tica",
    "Pasi&oacute;n",
    "Ritual",
    "Territorio",
]; //let PELIGRO_SOMBRAS_URBANAS = [


let SUBPELIGRO_SOMBRAS_URBANAS = {
    "Revoluci&oacute;n": [
        "Idealismo (Impulso: ans&iacute;a sacrificio, propio o ajeno).",
        "Revuelta (Impulso: ans&iacute;a justicia, r&aacute;pida y sangrienta).",
        "Huelga (Impulso: ans&iacute;a respeto y seguridad).",
        "Turba (Impulso: ans&iacute;a violencia y ver sus deseos saciados).",
        "Plaga (Impulso: ans&iacute;a aceptaci&oacute;n).",
    ], //"Revoluci&oacute;n": [
    "Maniobra pol&iacute;tica": [
        "Golpe de estado (Impulso: robar el poder en momentos de debilidad).",
        "Finta (Impulso: dejar a un enemigo al descubierto).",
        "Alianza (Impulso: satisfacer a otro para ganarse su favor).",
        "Anexi&oacute;n (Impulso: conseguir control sobre otros).",
        "Sabotaje (Impulso: crear y explotar debilidades).",
    ], //"Maniobra pol&iacute;tica": [
    "Pasi&oacute;n": [
        "Venganza (Impulso: atacar sin previo aviso).",
        "Amor (Impulso: proteger).",
        "Belleza (Impulso: sacrificar).",
        "Rabia (Impulso: tratar con injusticia y causar dolor).",
        "Envidia (Impulso: tomar m&aacute;s de lo que le corresponde).",
    ], //"Pasi&oacute;n": [
    "Ritual": [
        "Robo (Impulso: quitarle algo a otro).",
        "Contenci&oacute;n (Impulso: capturar y retener).",
        "Destrucci&oacute;n (Impulso: causar muerte y ruina).",
        "V&iacute;nculo (Impulso: crear puentes y conexiones).",
        "Restauraci&oacute;n (Impulso: curar y arreglar).",
    ], //"Ritual": [
    "Territorio": [
        "Erupci&oacute;n (Impulso: quemar o consumir).",
        "Ilusi&oacute;n (Impulso: tentar y cautivar).",
        "Fortaleza (Impulso: negar la entrada).",
        "Expansi&oacute;n (Impulso: crear y multiplicarse).",
        "Atolladero (Impulso: capturar y apresar).",
    ], //"Territorio": [
}; //let SUBPELIGRO_SOMBRAS_URBANAS = {


let MOVIMIENTOS_SOMBRAS_URBANAS = {
    "Revoluci&oacute;n": [
        "Haz un sacrificio para convertir las ondas en olas.",
        "Muestra la naturaleza del mundo que habita.",
        "Insulta, enfr&eacute;ntate u ofende a alguien poderoso.",
        "Ofrece algo, pero con implicaciones personales.",
        "Ofrece algo, pero con resultados turbulentos e inciertos.",
        "Captura a alguien poderoso e influyente.",
        "Pon en peligro algo vulnerable y crucial.",
        "Destruye a una figura p&uacute;blica, un lugar simb&oacute;lico o un grupo.",
        "Rechaza la ayuda: aumenta la gravedad con amenazas.",
    ], //"Revoluci&oacute;n": [
    "Maniobra pol&iacute;tica": [
        "Revelar un plan demasiado avanzado para detenerlo.",
        "Ofrecer una alianza, temporal o duradera.",
        "Exhibir un punto d&eacute;bil para que todo el mundo lo vea.",
        "Exhibir un punto fuerte ante un p&uacute;blico limitado.",
        "Atacar a alguien cautelosamente, con reservas.",
        "Atacar a alguien de repente, sin previo aviso.",
        "Sacar provecho de las dudas o demoras con acciones resueltas.",
        "Exigir indemnizaciones o retribuciones.",
        "Comprar a los aliados de alguien.",
    ], //"Maniobra pol&iacute;tica": [
    "Pasi&oacute;n": [
        "Agotar un recurso, despilfarr&aacute;ndolo por completo.",
        "Atacar con temerario desenfreno.",
        "Mostrar lo que hay en su coraz&oacute;n.",
        "Sacrificar mucho para conseguir una ventaja crucial.",
        "Sacrificar mucho para mandar un mensaje.",
        "Sacrificar mucho para nada.",
        "Aferrarse a la raz&oacute;n, la tradici&oacute;n o la injusticia.",
        "Suplicarle ayuda con un problema peligroso a alguien.",
        "Arruinar algo a prop&oacute;sito, con crueldad o por estupidez.",
    ], //"Pasi&oacute;n": [
    "Ritual": [
        "Liberar algo que estuviera sellado.",
        "Invocar algo nuevo y original.",
        "Desatar el caos, el terror o la muerte.",
        "Matar a alguien importante de manera p&uacute;blica y violenta.",
        "Matar a alguien insignificante sin hacer ruido ni llamar la atenci&oacute;n.",
        "Atar a alguien o algo a un lugar.",
        "Arrebatar recursos de forma encubierta o ingeniosa.",
        "Alterar o corromper una faceta de la ciudad.",
        "Explotar un conflicto o conquista no relacionados.",
    ], //"Ritual": [
    "Territorio": [
        "Cambiar la posici&oacute;n, el emplazamiento o la distribuci&oacute;n de un lugar.",
        "Presentar un nuevo camino o estructura.",
        "Sellar algo de forma evidentemente m&aacute;gica.",
        "Sellar algo de forma com&uacute;n y corriente.",
        "Hacerse con algo por la fuerza y con rapidez.",
        "Plagar e invadir todo cuanto alcanza la vista.",
        "Mostrar la realidad subyacente.",
    ], //"Territorio": [
}; //let MOVIMIENTOS_SOMBRAS_URBANAS = {





function print_mision_sombras_urbanas() {
    let html_code = '';
    let peligro_sombras_urbanas = random_from_list(PELIGRO_SOMBRAS_URBANAS);
    let peligro = '<u>Peligro Sombras Urbanas:</u><br/>' + peligro_sombras_urbanas;
    html_code += print_fortune_cookie(peligro);

    let subpeligro_sombras_urbanas = random_from_list(SUBPELIGRO_SOMBRAS_URBANAS[peligro_sombras_urbanas]);
    let subpeligro = '<u>Subpeligro Sombras Urbanas:</u><br/>' + subpeligro_sombras_urbanas;
    html_code += print_fortune_cookie(subpeligro);

    html_code += '<br/>';
    let movimientos_sombras_urbanas = MOVIMIENTOS_SOMBRAS_URBANAS[peligro_sombras_urbanas];
    html_code += print_list('<u>Movimientos sombras urbanas:</u>', movimientos_sombras_urbanas);

    return html_code;
}; //function print_mision_sombras_urbanas()




let THE_DOSSIER_SAYS_FIST = [
    "Una oscura agencia del gobierno",
    "Una mega-corporaci&oacute;n maligna",
    "Una coalicci&oacute;n de cient&iacute;ficos locos",
    "Un culto muy antiguo y extra&ntilde;o",
    "Una unidad de mercenarios rival",
    "Una unidad de vuestros archienemigos",
]; //let THE_DOSSIER_SAYS_FIST = [


let IS_TRYING_TO_FIST = [
    "Entrar en otra dimensi&oacute;n",
    "Construir una superarma",
    "Construir una superarma rob&oacute;tica",
    "Mutar humanos o animales",
    "Crear una nueva forma de arma biol&oacute;gica",
    "Robar un artefacto paranormal",
    "Viajar a trav&eacute;s del tiempo y alterar la historia"
]; //let IS_TRYING_TO_FIST = [


let WHICH_WILL_FIST = [
    "Les har&aacute; inmensamente ricos",
    "Matar&aacute;n a una importante figura pol&iacute;tica",
    "Destruir&aacute;n una ciudad",
    "Destruir&aacute;n un pueblo",
    "Les permitir&aacute; conquistar un pa&iacute;s",
    "Convertir la guerra fr&iacute;a en una guerra caliente",
    "Liberar un horror insondable",
    "Convertir a inocentes en monstruos",
    "Convertir a inocentes en v&iacute;ctimas"
]; //let WHICH_WILL_FIST = [


let BUT_FIST = [
    "Su lider es un familiar o ex-amante de uno de los personajes",
    "Un agente doble se ha infiltrado entre sus filas",
    "Una figura hist&oacute;rica est&aacute; vivo e implicado",
    "Necesitan capturar a uno de los personajes jugadores",
    "Una facci&oacute;n local quiere eliminar tanto a los enemigos como a los personajes jugadores",
    "Su plan est&aacute; a punto de &iacute;rseles de las manos y salirse de control en cualquier momento",
]; //let BUT_FIST = [




function print_mision_fist() {
    let html_code = '';
    let dossier = 'El dossier dice que:<br/>' + random_from_list(THE_DOSSIER_SAYS_FIST);
    html_code += print_fortune_cookie(dossier);

    html_code += '<br/>';
    let intentando = 'Est&aacute;n intentando:<br/>' + random_from_list(IS_TRYING_TO_FIST);
    html_code += print_fortune_cookie(intentando);

    html_code += '<br/>';
    let permite = 'Lo cual les permitir&aacute;:<br/>' + random_from_list(WHICH_WILL_FIST);
    html_code += print_fortune_cookie(permite);

    html_code += '<br/>';
    let sin_embargo = 'Sin embargo:<br/>' + random_from_list(BUT_FIST);
    html_code += print_fortune_cookie(sin_embargo);

    html_code += '<br/>';
    let giro_argumental = 'Giro argumental!<br/> Antes del climax vuelve a tirar una de estas tablas para introducir un giro argumental.';
    html_code += print_fortune_cookie(giro_argumental);

    return html_code;
}; //function print_mision_fist()
