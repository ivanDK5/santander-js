
let diametro=1.4,grosor=0.5,response;

if (diametro < 1.4) {
 response = "La rueda es opara un vehiculo grande";
} else if (diametro > 0.8 && diametro < 1.4) {
 response = "La rueda es para un vehiculo mediano";
} else if (diametro>1.4 && grosor <0.4 || diametro<=1.4 && diametro >0.8 && grosor <0.25)  {
 response = "El grosor para esta rueda es inferior al recomendado";
}else{
 response="La rueda es para un vehículo pequeño"
}

console.log(response) // Good afternoon