var camera;
var scene;
var renderer;
var orbControls;
var groundplane;
var cannon;
var ball;
var caliber = 0;
var updateCounter = 0;
var keyboard;
var balllaunched = false;

Physijs.scripts.worker = 'js/physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';