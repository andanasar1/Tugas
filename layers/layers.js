var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotaBekasi_1 = new ol.format.GeoJSON();
var features_KotaBekasi_1 = format_KotaBekasi_1.readFeatures(json_KotaBekasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBekasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBekasi_1.addFeatures(features_KotaBekasi_1);
var lyr_KotaBekasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBekasi_1, 
                style: style_KotaBekasi_1,
                popuplayertitle: 'KotaBekasi',
                interactive: true,
    title: 'KotaBekasi<br />\
    <img src="styles/legend/KotaBekasi_1_0.png" /> Bantargebang<br />\
    <img src="styles/legend/KotaBekasi_1_1.png" /> Bekasi Barat<br />\
    <img src="styles/legend/KotaBekasi_1_2.png" /> Bekasi Selatan<br />\
    <img src="styles/legend/KotaBekasi_1_3.png" /> Bekasi Timur<br />\
    <img src="styles/legend/KotaBekasi_1_4.png" /> Bekasi Utara<br />\
    <img src="styles/legend/KotaBekasi_1_5.png" /> Jatiasih<br />\
    <img src="styles/legend/KotaBekasi_1_6.png" /> Jatisampurna<br />\
    <img src="styles/legend/KotaBekasi_1_7.png" /> Medansatria<br />\
    <img src="styles/legend/KotaBekasi_1_8.png" /> Mustikajaya<br />\
    <img src="styles/legend/KotaBekasi_1_9.png" /> Pondok Gede<br />\
    <img src="styles/legend/KotaBekasi_1_10.png" /> Pondok Melati<br />\
    <img src="styles/legend/KotaBekasi_1_11.png" /> Rawalumbu<br />\
    <img src="styles/legend/KotaBekasi_1_12.png" /> <br />' });
var format_KepadatanBekasi_2 = new ol.format.GeoJSON();
var features_KepadatanBekasi_2 = format_KepadatanBekasi_2.readFeatures(json_KepadatanBekasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KepadatanBekasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanBekasi_2.addFeatures(features_KepadatanBekasi_2);
var lyr_KepadatanBekasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KepadatanBekasi_2, 
                style: style_KepadatanBekasi_2,
                popuplayertitle: 'KepadatanBekasi',
                interactive: true,
    title: 'KepadatanBekasi<br />\
    <img src="styles/legend/KepadatanBekasi_2_0.png" /> 6000.000000<br />\
    <img src="styles/legend/KepadatanBekasi_2_1.png" /> 7000.000000<br />\
    <img src="styles/legend/KepadatanBekasi_2_2.png" /> 9000.000000<br />\
    <img src="styles/legend/KepadatanBekasi_2_3.png" /> 11000.000000<br />\
    <img src="styles/legend/KepadatanBekasi_2_4.png" /> 12000.000000<br />\
    <img src="styles/legend/KepadatanBekasi_2_5.png" /> 13000.000000<br />\
    <img src="styles/legend/KepadatanBekasi_2_6.png" /> 14000.000000<br />\
    <img src="styles/legend/KepadatanBekasi_2_7.png" /> 15000.000000<br />\
    <img src="styles/legend/KepadatanBekasi_2_8.png" /> 17000.000000<br />\
    <img src="styles/legend/KepadatanBekasi_2_9.png" /> 18000.000000<br />\
    <img src="styles/legend/KepadatanBekasi_2_10.png" /> 19000.000000<br />\
    <img src="styles/legend/KepadatanBekasi_2_11.png" /> <br />' });
var format_PertumbuhanBekasi_3 = new ol.format.GeoJSON();
var features_PertumbuhanBekasi_3 = format_PertumbuhanBekasi_3.readFeatures(json_PertumbuhanBekasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PertumbuhanBekasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PertumbuhanBekasi_3.addFeatures(features_PertumbuhanBekasi_3);
var lyr_PertumbuhanBekasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PertumbuhanBekasi_3, 
                style: style_PertumbuhanBekasi_3,
                popuplayertitle: 'PertumbuhanBekasi',
                interactive: true,
    title: 'PertumbuhanBekasi<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_0.png" /> 0.32<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_1.png" /> 0.42<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_2.png" /> 0.44<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_3.png" /> 0.58<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_4.png" /> 0.6<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_5.png" /> 0.63<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_6.png" /> 0.82<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_7.png" /> 1.120000<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_8.png" /> 1.350000<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_9.png" /> 2.000000<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_10.png" /> 2.420000<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_11.png" /> 3.110000<br />\
    <img src="styles/legend/PertumbuhanBekasi_3_12.png" /> <br />' });
var format_PendudukBekasi_4 = new ol.format.GeoJSON();
var features_PendudukBekasi_4 = format_PendudukBekasi_4.readFeatures(json_PendudukBekasi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PendudukBekasi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PendudukBekasi_4.addFeatures(features_PendudukBekasi_4);
var lyr_PendudukBekasi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PendudukBekasi_4, 
                style: style_PendudukBekasi_4,
                popuplayertitle: 'PendudukBekasi',
                interactive: true,
    title: 'PendudukBekasi<br />\
    <img src="styles/legend/PendudukBekasi_4_0.png" /> <br />\
    <img src="styles/legend/PendudukBekasi_4_1.png" /> 111440.000000<br />\
    <img src="styles/legend/PendudukBekasi_4_2.png" /> 131290.000000<br />\
    <img src="styles/legend/PendudukBekasi_4_3.png" /> 132560.000000<br />\
    <img src="styles/legend/PendudukBekasi_4_4.png" /> 163380.000000<br />\
    <img src="styles/legend/PendudukBekasi_4_5.png" /> 214220.000000<br />\
    <img src="styles/legend/PendudukBekasi_4_6.png" /> 225790.000000<br />\
    <img src="styles/legend/PendudukBekasi_4_7.png" /> 233680.000000<br />\
    <img src="styles/legend/PendudukBekasi_4_8.png" /> 254110.000000<br />\
    <img src="styles/legend/PendudukBekasi_4_9.png" /> 261480.000000<br />\
    <img src="styles/legend/PendudukBekasi_4_10.png" /> 265300.000000<br />\
    <img src="styles/legend/PendudukBekasi_4_11.png" /> 286110.000000<br />\
    <img src="styles/legend/PendudukBekasi_4_12.png" /> 347840.000000<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_KotaBekasi_1.setVisible(true);lyr_KepadatanBekasi_2.setVisible(true);lyr_PertumbuhanBekasi_3.setVisible(true);lyr_PendudukBekasi_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KotaBekasi_1,lyr_KepadatanBekasi_2,lyr_PertumbuhanBekasi_3,lyr_PendudukBekasi_4];
lyr_KotaBekasi_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'Kecamatan': 'Kecamatan', });
lyr_KepadatanBekasi_2.set('fieldAliases', {'WADMKC': 'WADMKC', 'Kecamatan': 'Kecamatan', 'Kepadatan': 'Kepadatan', });
lyr_PertumbuhanBekasi_3.set('fieldAliases', {'WADMKC': 'WADMKC', 'Kecamatan': 'Kecamatan', 'LajuTumbuh': 'LajuTumbuh', });
lyr_PendudukBekasi_4.set('fieldAliases', {'WADMKC': 'WADMKC', 'Kecamatan': 'Kecamatan', 'Penduduk': 'Penduduk', });
lyr_KotaBekasi_1.set('fieldImages', {'WADMKC': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_KepadatanBekasi_2.set('fieldImages', {'WADMKC': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kepadatan': 'TextEdit', });
lyr_PertumbuhanBekasi_3.set('fieldImages', {'WADMKC': 'TextEdit', 'Kecamatan': 'TextEdit', 'LajuTumbuh': 'TextEdit', });
lyr_PendudukBekasi_4.set('fieldImages', {'WADMKC': 'TextEdit', 'Kecamatan': 'TextEdit', 'Penduduk': 'TextEdit', });
lyr_KotaBekasi_1.set('fieldLabels', {'WADMKC': 'no label', 'Kecamatan': 'inline label - visible with data', });
lyr_KepadatanBekasi_2.set('fieldLabels', {'WADMKC': 'no label', 'Kecamatan': 'no label', 'Kepadatan': 'inline label - visible with data', });
lyr_PertumbuhanBekasi_3.set('fieldLabels', {'WADMKC': 'no label', 'Kecamatan': 'no label', 'LajuTumbuh': 'inline label - visible with data', });
lyr_PendudukBekasi_4.set('fieldLabels', {'WADMKC': 'no label', 'Kecamatan': 'no label', 'Penduduk': 'inline label - visible with data', });
lyr_PendudukBekasi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});