/*
main.js

*/

function run(){
    var map = L.map('map')
                    .setView([
                        37.996162679728116, 
                        -80.0079345703125
                        ], 7);
                        
    var layer = L.esri.basemapLayer('Streets').addTo(map);
}