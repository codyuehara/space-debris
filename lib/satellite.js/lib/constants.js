/*!
 * satellite-js v4.1.3
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.x2o3 = exports.j3oj2 = exports.j4 = exports.j3 = exports.j2 = exports.tumin = exports.vkmpersec = exports.xke = exports.earthRadius = exports.mu = exports.minutesPerDay = exports.rad2deg = exports.deg2rad = exports.twoPi = exports.pi = void 0;
var pi = Math.PI;
exports.pi = pi;
var twoPi = pi * 2;
exports.twoPi = twoPi;
var deg2rad = pi / 180.0;
exports.deg2rad = deg2rad;
var rad2deg = 180 / pi;
exports.rad2deg = rad2deg;
var minutesPerDay = 1440.0;
exports.minutesPerDay = minutesPerDay;
var mu = 398600.5; // in km3 / s2

exports.mu = mu;
var earthRadius = 6378.137; // in km

exports.earthRadius = earthRadius;
var xke = 60.0 / Math.sqrt(earthRadius * earthRadius * earthRadius / mu);
exports.xke = xke;
var vkmpersec = earthRadius * xke / 60.0;
exports.vkmpersec = vkmpersec;
var tumin = 1.0 / xke;
exports.tumin = tumin;
var j2 = 0.00108262998905;
exports.j2 = j2;
var j3 = -0.00000253215306;
exports.j3 = j3;
var j4 = -0.00000161098761;
exports.j4 = j4;
var j3oj2 = j3 / j2;
exports.j3oj2 = j3oj2;
var x2o3 = 2.0 / 3.0;
exports.x2o3 = x2o3;