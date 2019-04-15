// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "CREMA PARA TODOS",
    about: "Proyecto de rediseño de cremas instantáneas en conjunto con la empresa Maggi",
}, {
    figure: "media/foto-02.jpg",
    title: "DESDE MI TIERRA \"Corazón de Lana\"",
    about: "Serie de libros educativos para escolares diseñados en conjunto a Baloon Latam",
}, {
    figure: "media/foto-03.jpg",
    title: "TRODA",
    about: "Sistema de adaptación para silla de ruedas que permite la evacuación por escaleras",
}, {
    figure: "media/foto-04.jpg",
    title: "INFOGRAFÍA \"Fierljeppen\"",
    about: "Diseño, diagramación e ilustración explicativa del deporte Fierljeppen",
}, {
    figure: "media/foto-05.jpg",
    title: "LÁMPARA DE YESO",
    about: "Fabricación de una luminaria a partir de la exploración del material de yeso",
}, {
    figure: "media/foto-06.jpg",
    title: "ALONG",
    about: "Instrumento para mejorar el funcionamiento del ejercicio de elongación en personas con movilidad reducida",
}, {
    figure: "media/foto-07.jpg",
    title: "TORTIER",
    about: "Sistema de apoyo para la brumación de las tortugas en el zoológico Metropolitano de Santiago",
},  {
    figure: "media/foto-08.jpg",
    title: "DESDE MIS MANOS \"Lana Creativa\"",
    about: "Serie de kits educativos para escolares que enseñan de técnicas artesanales a través del hacer",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
