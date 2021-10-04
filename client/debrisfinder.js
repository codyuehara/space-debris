//import data from "./space_data.json"

//const parsedData = JSON.parse(data);
//const parsedData = require('./space_data.json');
//console.log(parseData);
fetch("./space_data.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        //console.log(data)
        getData(data);
    });


function getData(tle){
    for (let i = 0; i < tle.length; i++){
        console.log(tle[i].OBJECT_TYPE);
        //ex for Atlas Centaur R/B
        var tle_line1 = tle[i].TLE_LINE1;
        var tle_line2 = tle[i].TLE_LINE2;

        var satrec = satellite.twoline2satrec(tle_line1, tle_line2);

        var currentPosition = getPosition(satrec, new Date());

//space debris layer
        var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
        placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/dot-red.png";
        placemarkAttributes.imageScale = 3.0;

        var debrisLayer = new WorldWind.RenderableLayer("Debris");
        var placemark = new WorldWind.Placemark(currentPosition);

        placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
        //placemark.label = "Alpha Centaur";
        placemark.attributes = placemarkAttributes;

        debrisLayer.addRenderable(placemark);

//update WorldWind
        wwd.addLayer(debrisLayer);



        wwd.redraw();

// Update Satellite Position
        window.setInterval(function() {
            var position = getPosition(satrec, new Date());

            wwd.redraw();
        }, 0);
    }
}


//set up NASA WorldWind
var wwd = new WorldWind.WorldWindow("wwd");
wwd.navigator.range = 45e6;
//wwd.drawContext.clearColor = WorldWind.Color.colorFromBytes(0,0,0,0);
wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLayer());
wwd.addLayer(new WorldWind.AtmosphereLayer());
wwd.addLayer(new WorldWind.StarFieldLayer());

//loop through every object and get position

//function to update time


function getPosition(satrec, time){
    var posAndVel = satellite.propagate(satrec, time);

    var positionEci = posAndVel.position;
    var velocityEci = posAndVel.velocity;

    //convert local time to Greenwich Mean Sidereal Time
    var gmst = satellite.gstime(time);

    var positionGd = satellite.eciToGeodetic(positionEci, gmst);

    var longitude = satellite.degreesLong(positionGd.longitude);
    var latitude = satellite.degreesLat(positionGd.latitude);
    var altitude = positionGd.height * 1000;

    //console.log(longitude + ", " + latitude + ", " + altitude);
    return new WorldWind.Position(longitude, latitude, altitude);
}
