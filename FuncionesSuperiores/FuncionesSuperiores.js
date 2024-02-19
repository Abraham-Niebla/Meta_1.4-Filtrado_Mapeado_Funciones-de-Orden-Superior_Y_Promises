const ataqueGolpe = function(){
	return "Atacando con Golpe";}

const ataqueRayo = function(){
	return "Atacando con Rayo fulminante";}

const ataqueHielo = function(){
    return "Atacando con Ventisca";}

const ataqueFuego = function(){
    return"Atacando con Ascuas";}

const atacar = function(ataque = ataqueGolpe, objetivo = "Nadie"){
    return ataque() + " a " + objetivo;};

console.log(atacar(ataqueGolpe, "Pikachu"));
console.log(atacar(ataqueRayo, "Ditto"));
console.log(atacar(ataqueHielo, "Charizard"));
console.log(atacar(ataqueFuego, "Squirtle"));