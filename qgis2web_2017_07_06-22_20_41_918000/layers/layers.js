var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Ciudad_de_Ayacucho0 = new ol.format.GeoJSON();
var features_Ciudad_de_Ayacucho0 = format_Ciudad_de_Ayacucho0.readFeatures(json_Ciudad_de_Ayacucho0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ciudad_de_Ayacucho0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ciudad_de_Ayacucho0.addFeatures(features_Ciudad_de_Ayacucho0);var lyr_Ciudad_de_Ayacucho0 = new ol.layer.Vector({
                source:jsonSource_Ciudad_de_Ayacucho0, 
                style: style_Ciudad_de_Ayacucho0,
                title: 'Ciudad_de_Ayacucho<br />\
        <img src="styles/legend/Ciudad_de_Ayacucho0_0.png" /> AYACUCHO<br />\
        <img src="styles/legend/Ciudad_de_Ayacucho0_1.png" /> CARMEN ALTO<br />\
        <img src="styles/legend/Ciudad_de_Ayacucho0_2.png" /> LAS NAZARENAS<br />\
        <img src="styles/legend/Ciudad_de_Ayacucho0_3.png" /> SAN JUAN BAUTISTA<br />\
        <img src="styles/legend/Ciudad_de_Ayacucho0_4.png" /> SAN JUAN DE URUBAMBA<br />\
        <img src="styles/legend/Ciudad_de_Ayacucho0_5.png" /> YANAMA<br />\
        <img src="styles/legend/Ciudad_de_Ayacucho0_6.png" /> <br />'
            });

lyr_Ciudad_de_Ayacucho0.setVisible(true);
var layersList = [baseLayer,lyr_Ciudad_de_Ayacucho0];
lyr_Ciudad_de_Ayacucho0.set('fieldAliases', {'IDMANZANA': 'IDMANZANA', 'NOMCCPP': 'NOMCCPP', 'Shape_Leng': 'Shape_Leng', });
lyr_Ciudad_de_Ayacucho0.set('fieldImages', {'IDMANZANA': 'Hidden', 'NOMCCPP': 'TextEdit', 'Shape_Leng': 'Hidden', });
lyr_Ciudad_de_Ayacucho0.set('fieldLabels', {'NOMCCPP': 'no label', });
lyr_Ciudad_de_Ayacucho0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});