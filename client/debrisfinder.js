

var wwd = new WorldWind.WorldWindow("wwd");
wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.AtmosphereLayer());
//wwd.addLayer(new WorldWind.BMNGLandsatLayer());
//wwd.addLayer(new WorldWind.CompassLayer());
//wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
//wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
wwd.addLayer(new WorldWind.StarFieldLayer());





