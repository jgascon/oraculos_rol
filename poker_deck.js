

function poker_deck() {

    this.number_of_cards = 52;

    this.deck_string = '';

    this.palos = [
        'T', //~ Trebol
        'C', //~ Corazon
        'P', //~ Pica
        'D', //~ Diamante
        'J' //~ Joker
    ]; //this.palos = [


    this.figuras = [
        'J', //~ Jack
        'Q', //~ Queen
        'K', //~ King
    ]; //this.palos = [


    this.store_deck_to_cookie = function() {
        let cookie_str = "poker_deck="+this.deck_string+"; expires=Mon, 28 Jan 2030 12:00:00 UTC; path=/; SameSite=Strict";
        //~ console.log("Saving cookies: ["+cookie_str+"]");
        document.cookie = cookie_str;
    } //this.store_deck_to_cookie = function()


    this.load_deck_from_cookie = function() {
        let cookies = document.cookie;
        //~ console.log("Loading cookie: ["+cookies+"]");
        cookies = cookies.split(';');
        //~ console.log("cookies[0]: ["+ cookies[0]+"]");
        if (cookies.length < 1 || cookies[0].indexOf("poker_deck=") < 0) {
            return;
        } //if (cookies.length < 1 || cookies[0].indexOf("poker_deck=") < 0) {

        this.deck_string = cookies[0].replace("poker_deck=", "");
        //~ console.log("Poker deck: ["+this.deck_string+"]");
    } //this.load_deck_from_cookie = function()


    this.reset = function() {
        this.deck_string = '';
        for (let i=0; i<this.number_of_cards; i++) {
            this.deck_string += String.fromCharCode(i+60);
        } //for (let i=0; i<this.number_of_cards; i++)
        //~ console.log("Resetting poker deck");
        this.store_deck_to_cookie();
    } // this.reset = function() {



    this.get_deck_size = function() {
        return this.deck_string.length;
    } //this.get_deck_size = function() {



    this.get_card_index = function() {
        if (this.deck_string.length == 0) {
            this.load_deck_from_cookie();
            if (this.deck_string.length == 0) {
                this.reset();
            } //if (this.deck_string.length == 0)
        } //if (this.deck_string.length == 0)

        let index = Math.floor(Math.random() * this.deck_string.length);
        let card_character = this.deck_string[index];
        let card_index = (card_character.charCodeAt(0) - 60);
        //~ console.log("get_card_index: "+card_index);

        this.deck_string = this.deck_string.substr(0, index) + this.deck_string.substr(index+1);
        this.store_deck_to_cookie();
        return card_index;
    } // this.get_card_index = function() {



    this.card_index_to_card_name = function(card_index) {
        let palo_index = Math.floor(card_index / 13);
        let numero = (card_index % 13) + 1;

        if (numero > 10) {
            numero = this.figuras[numero - 11];
        } //if (numero > 10)

        let palo = this.palos[palo_index];
        return ('' + palo + numero);
    } //this.card_index_to_card_name = function(card_index)



    this.card_index_to_div_image = function(card_index) {
        let palo_index = Math.floor(card_index / 13);
        let numero_index = (card_index % 13);
        let card_offset_x = 148 * numero_index;
        let card_offset_y = 215 * palo_index;
        let background_pos = 'background-position: -'+ card_offset_x +'px -'+ card_offset_y +'px;';
        //~ return '<p>'+this.deck_string.length+'</p>' + '<div class="card" style="'+background_pos+'"></div>';
        return '<div class="poker_card" style="'+background_pos+'"></div>';
    } //this.card_index_to_div_image = function(card_index)



    this.debug_text = function() {
        let html_code = '';

        for (let i=0; i<this.number_of_cards; i++) {
            let card_character = this.deck_string[i];
            let card_index = card_character.charCodeAt(0) - 48;
            let palo_index = Math.floor(card_index / 13);
            let numero = (card_index % 13) + 1;

            if (numero > 10) {
                numero = this.figuras[numero - 11];
            } //if (numero > 10)

            let palo = this.palos[palo_index];
            html_code += '<p>'+ "Index: "+card_index+ " palo ["+ palo +"] number ["+ numero +"]" +'</p>';
        }; //for (let i=0; i<this.number_of_cards; i++)

        let element = document.getElementById('cartas');
        element.innerHTML = html_code;
        element.scrollTop = "0";
    } // this.debug_text = function() {



    this.debug_images = function() {
        let html_code = '';

        for (let i=0; i<this.number_of_cards; i++) {
            let card_character = this.deck_string[i];
            let card_index = (card_character.charCodeAt(0) - 48);
            html_code += this.card_index_to_div_image(card_index);
        }; //for (let i=0; i<this.number_of_cards; i++)

        let element = document.getElementById('cartas');
        element.innerHTML = html_code;
        element.scrollTop = "0";
    } // this.debug = function() {



    this.debug_random_images = function() {
        let html_code = '';
        let card_index;

        for (let i=0; i<this.number_of_cards; i++) {
            card_index = this.get_card_index();
            html_code += this.card_index_to_div_image(card_index);
        }; //for (let i=0; i<this.number_of_cards; i++)

        let element = document.getElementById('cartas');
        element.innerHTML = html_code;
        element.scrollTop = "0";
    } // this.debug_random_images = function() {

} //function poker_deck()



let POKER_DECK = new poker_deck();

//~ POKER_DECK.reset();
//~ let card = POKER_DECK.get_card();
//~ POKER_DECK.debug_text();
//~ POKER_DECK.debug_images();
//~ POKER_DECK.debug_random_images();



function get_poker_deck_card() {
    let card_index = POKER_DECK.get_card_index();
    return POKER_DECK.card_index_to_div_image(card_index);
} //function get_poker_deck_card()



function get_poker_deck_size() {
    return POKER_DECK.get_deck_size();
} //function get_poker_deck_size()


function reset_poker_deck() {
    POKER_DECK.reset();
} //function reset_poker_deck()
