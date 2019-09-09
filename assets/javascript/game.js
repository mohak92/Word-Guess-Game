document.addEventListener("DOMContentLoaded", function () {

    var drivers = ["Sebastian Vettel", "Charles Leclerc", "Kimi Raikkonen", "Antonio", "Antonio Giovinazzi"
                    , "Lewis Hamilton", "Valtteri Bottas", "Alexander Alborn", "Max Verstappen", "Michael Schumacher"];
    var driverImages = [
        "assets/images/sebastianVettel.png", 
        "", 
        "", 
        "", 
        "", 
        "", 
        "", 
        "", 
        "assets/images/max.jpg" 
        ,""
    ];
    console.log(drivers.length)
    console.log(driverImages.length)
    var randomSelector = Math.floor(Math.random() * drivers.length);
    console.log(drivers[randomSelector]);
    console.log(randomSelector);
    document.getElementById('image').src=driverImages[randomSelector];
    document.onkeyup = function (event) {
        
    };
});

function reset() {
    window.location.reload(true);
}