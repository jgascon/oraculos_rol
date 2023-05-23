var FORTUNES = [
    "Flexiblemente%0AJ&oacute;ven%0ACambiar%0AInformaci&oacute;n",
    "Anormalmente%0AAbandonado%0ALograr%0AObjetivos",
    "Aventurosamente%0AAnormal%0AIniciar%0ASue&ntilde;os",
    "Agresivamente%0ADivertido%0Anegligente%0AEntorno",
    "Furiosamente%0AAntiguo%0ALuchar%0AExterior",
    "Ansiosamente%0AArom&aacute;tico%0AReclutar%0AInterior",
    "Torpemente%0APromedio%0ATriunfar%0ARealidad",
    "Bellamente%0AHermoso%0AViolar%0AAliados",
    "Desoladoramente%0AExtra&ntilde;o%0AOponer%0AEnemigos",
    "Audazmente%0AElegante%0Amalicioso%0AMal",
    "Valientemente%0ALimpio%0AComunicar%0ABien",
    "Afanosamente%0AFr&iacute;o%0APerseguir%0AEmociones",
    "Calmadamente%0AColorido%0AAumentar%0AOposici&oacute;n",
    "Cuidadosamente%0AEspeluznante%0ADisminuir%0AGuerra",
    "Descuidadamente%0ALindo%0AAbandonar%0APaz",
    "Cautelosamente%0ADa&ntilde;ado%0AGratificar%0AInocencia",
    "Incesantemente%0AOscuro%0AConsultar%0AAmor",
    "Alegremente%0ADerrotado%0AContrariar%0AEsp&iacute;ritu",
    "Combativamente%0ADelicado%0AMover%0AIntelecto",
    "Fr&iacute;amente%0ADelicioso%0ADesperdiciar%0AIdeas",
    "Locamente%0ASucio%0APacificar%0AAlegr&iacute;a",
    "Curiosamente%0ADesagradable%0ALiberar%0AMensajes",
    "Delicadamente%0AAsqueroso%0AAmar%0AEnerg&iacute;a",
    "Peligrosamente%0AMalo%0AJuzgar%0AEquilibrio",
    "Desafiante%0ASeco%0ADesertificar%0ATensi&oacute;n",
    "Deliberadamente%0ASin brillo%0ADominar%0AAmistad",
    "Deliciosamente%0AVac&iacute;o%0AProcrastinar%0AF&iacute;sica",
    "D&eacute;bilmente%0AEnorme%0AAlabar%0AProyecto",
    "Eficientemente%0AEx&oacute;tico%0ASeparar%0APlaceres",
    "Energ&eacute;ticamente%0ADesvanecido%0ATomar%0ADolor",
    "Enormemente%0AFamiliar%0ADescansar%0APosesiones",
    "Entusiamo%0AFantas&iacute;a%0ASanar%0ABeneficios",
    "Emocionante%0AGrueso%0ADemorar%0APlanes",
    "Temerosamente%0AD&eacute;bil%0AParar%0AMentiras",
    "Ferozmente%0AFemenino%0AMentir%0AExpectativas",
    "Salvajemente%0AFestivo%0ARegresar%0ALegal",
    "Tontamente%0AImpecable%0AImitar%0ABurocracia",
    "Afortunadamente%0AFresco%0ALuchar%0ANegocio",
    "Fren&eacute;ticamente%0ALleno%0AInformar%0ACamino",
    "Libremente%0AGlorioso%0AOtorgar%0ANoticias",
    "Aterradoramente%0ABueno%0APosponer%0AExterior",
    "Totalmente%0AAgraciado%0AExponer%0AConsejo",
    "Generosamente%0ADuro%0ARegatear%0AParcela",
    "Suavemente%0A&Aacute;spero%0AEncarcelar%0ACompetencia",
    "Alegremente%0ASaludable%0ALiberar%0APrisi&oacute;n",
    "Graciosamente%0APesado%0ACelebrar%0AEnfermedad",
    "Gratamente%0AHist&oacute;rico%0ADesarrollar%0AComida",
    "Felizmente%0AHorrible%0AViajar%0AAtenci&oacute;n",
    "Apresuradamente%0AImportante%0ABloquear%0A&Eacute;xito",
    "Saludablemente%0AInteresante%0ADa&ntilde;ar%0AFracaso",
    "Amablemente%0AJuvenil%0ADegradar%0AViaje",
    "Impotencia%0AEscaso%0AExcederse%0ACelos",
    "Desesperanza%0APobre%0AAplazar%0ADisputa",
    "Inocentemente%0AGrande%0AEnfrentar%0AHogar",
    "Intensamente%0ALujoso%0AEliminar%0AInversi&oacute;n",
    "Interesante%0A&Aacute;gil%0AInterrumpir%0ASufrimiento",
    "Irritante%0AEscaso%0AUsurpaci&oacute;n%0ADeseos",
    "Jovialmente%0ALetal%0ACrear%0AT&aacute;cticas",
    "Alegremente%0ASolitario%0ATraicionar%0AEstancamiento",
    "Sentenciosamente%0AAgradable%0AAceptar%0AAleatoriedad",
    "Amablemente%0AMacabro%0AAbusar%0ADesgracia",
    "Excentricamente%0AMagn&iacute;fico%0AOprimir%0AMuerte",
    "Vago%0AMasculino%0AInspeccionar%0AInterrupci&oacute;n",
    "Ligeramente%0AMaduro%0AEmboscar%0APoder",
    "Holgadamente%0ADesordenado%0AEspiar%0ACarga",
    "Ruidosamente%0APoderoso%0AAdjuntar%0AIntrigas",
    "Cari&ntilde;osamente%0AMilitar%0ALlevar%0AMiedos",
    "Lealmente%0AModerno%0AAbrir%0AEmboscada",
    "Majestuosamente%0AExtravagante%0ADescuidar%0ARumor",
    "Significativamente%0AMundano%0AArruinar%0AHeridas",
    "Mec&aacute;nicamente%0AMisterioso%0AExtravagante%0AExtravagancia",
    "Miserablemente%0ANatural%0ATrucar%0ARepresentaci&oacute;n",
    "Burlonamente%0AIndescriptible%0ALlegar%0AAdversidad",
    "Misteriosamente%0AExtra&ntilde;o%0AProponer%0AOpulencia",
    "Naturalmente%0AP&aacute;lido%0ADividir%0ALibertad",
    "Cuidadosamente%0APeque&ntilde;o%0ARechazar%0AMilitar",
    "Educadamente%0APobre%0ADesconfiar%0AMundano",
    "Curiosamente%0APotente%0AEnga&ntilde;o%0AEnsayos",
    "Ofensivamente%0APintoresco%0ACruel%0AMasas",
    "Oficialmente%0ARaro%0AIntolerar%0AVeh&iacute;culo",
    "Parcialmente%0AReconfortante%0AConfiar%0AArte",
    "Pac&iacute;ficamente%0ANotable%0AEmocionarse%0AVictoria",
    "Perfectamente%0APodrido%0AActivar%0ADisputa",
    "Alegremente%0A&Aacute;spero%0AAsistir%0ARiquezas",
    "Cort&eacute;smente%0AArruinado%0AAtender%0ANormal",
    "Positivamente%0AR&uacute;stico%0Anegligente%0ATecnolog&iacute;a",
    "Poderosamente%0AAterrador%0AApasionar%0AEsperanza",
    "Curiosamente%0ASimple%0ATrabajar%0AMagia",
    "Beligerantemente%0APeque&ntilde;o%0AControlar%0AIlusiones",
    "Silenciosamente%0AMaloliente%0AAtraer%0APortales",
    "Aproximadamente%0ASuave%0AFracasar%0APeligro",
    "Groseramente%0ABlando%0APerseguir%0AArmas",
    "Despiadadamente%0AFuerte%0AVengar%0AAnimales",
    "Lentamente%0ATranquilo%0AProceder%0AClima",
    "Suavemente%0AFeo%0ADisputar%0AElementos",
    "R&aacute;pidamente%0AValioso%0ACastigar%0ANaturaleza",
    "Amenaza%0ABeligerante%0AGuiar%0AMasas",
    "Muy%0AC&aacute;lido%0ATransformar%0ALiderazgo",
    "Violentamente%0AAcuoso%0ADerrocar%0AFama",
    "Salvajemente%0AD&eacute;bil%0AOprimir%0AIra"
];