
//set up NASA WorldWind
var wwd = new WorldWind.WorldWindow("wwd");
//wwd.drawContext.clearColor = WorldWind.Color.colorFromBytes(0,0,0,0);
wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLayer());
wwd.addLayer(new WorldWind.AtmosphereLayer());
wwd.addLayer(new WorldWind.StarFieldLayer());

//ex for Atlas Centaur R/B
var tle_line1 = '1 06155U 72065B   16111.89078645  .00000269  00000-0  46396-4 0  9993';
var tle_line2 = '2 06155  35.0043  52.6400 0037491 110.2876 250.1858 14.71170973329733';

var satrec = satellite.twoline2satrec(tle_line1, tle_line2);
var posAndVel = satellite.propagate(satrec, new Date());

var positionEci = posAndVel.position;
var velocityEci = posAndVel.velocity;

//convert local time to Greenwich Mean Sidereal Time
var gmst = satellite.gstime(new Date());

var positionGd = satellite.eciToGeodetic(positionEci, gmst);

var longitude = satellite.degreesLong(positionGd.longitude);
var latitude = satellite.degreesLat(positionGd.latitude);
var altitude = positionGd.height;

console.log(longitude + ", " + latitude + ", " + altitude);
currentPosition = new WorldWind.Position(longitude, latitude, altitude);

//space debris layer
var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/sunTexture.png";
placemarkAttributes.imageScale = 0.5;

var debrisLayer = new WorldWind.RenderableLayer("Debris");
var placemark = new WorldWind.Placemark(currentPosition);

placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
placemark.label = "Alpha Centaur";
placemark.attributes = placemarkAttributes;

debrisLayer.addRenderable(placemark);

//update WorldWind
wwd.addLayer(debrisLayer);



wwd.redraw();
