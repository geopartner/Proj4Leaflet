var epsg25832 = new L.Proj.CRS('EPSG:25832', '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs', {
    bounds: L.bounds([120000, 5900000], [1000000, 6500000]),
    origin: [120000, 6500000],
    resolution: 1638.4
})

var map = L.map('map', {
    crs: epsg25832,
});
var attrib = "&copy Geodatastyrelsen";
L.tileLayer('https://a.kortforsyningen.kms.dk/orto_foraar?login=qgisdk&password=qgisdk&request=GetTile&version=1.0.0&service=WMTS&Layer=orto_foraar&style=default&format=image/jpeg&TileMatrixSet=View1&TileMatrix={zoom}&TileRow={y}&TileCol={x}', {
    "attribution": "Geodatastyrelsen",
    "continuousWorld": true,
    "zoom": function (layer) {
        if (layer.z < 10) {
            return 'L0' + layer.z;
        } else {
            return 'L' + layer.z;
        }
    },
    maxNativeZoom: 13
}).addTo(map);


map.setView([56, 12], 0);
