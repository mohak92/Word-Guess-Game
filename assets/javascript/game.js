document.addEventListener("DOMContentLoaded", function () {

    //Array declaration of driver to guess
    var drivers = ["Sebastian Vettel", "Charles Leclerc", "Kimi Raikkonen", "Antonio Giovinazzi"
        , "Lewis Hamilton", "Valtteri Bottas", "Alexander Albon", "Max Verstappen", "George Russel",
        "Robert Kubica", "Daniil Kvyat", "Pierre Gasly", "Daniel Ricciardo", "Nico Hulkenberg", "Kevin Magnussen",
        "Romain Grosjean", "Lance Stroll", "Sergio Perez", "Lando Norris", "Carlos Sainz Jr", "Michael Schumacher"];

    //Array declaration of driver's photo
    var driverImages = [
        "assets/images/sebastianVettel.png",
        "assets/images/charles.jpeg",
        "assets/images/kimi.jpg",
        "assets/images/antonio.jpg",
        "assets/images/Lewis-Hamilton.jpg",
        "assets/images/Valtteri-Bottas.jpg",
        "assets/images/alex.jpg",
        "assets/images/max.jpg",
        "assets/images/george.jpeg",
        "assets/images/robert.jpeg",
        "assets/images/danill.jpeg",
        "assets/images/pierre.jpeg",
        "assets/images/daniel.jpeg",
        "assets/images/nico.jpeg",
        "assets/images/kevin.jpeg",
        "assets/images/romain.jpeg",
        "assets/images/lance.jpeg",
        "assets/images/sergio.jpeg",
        "assets/images/lando.jpeg",
        "assets/images/carlos.jpeg",
        "assets/images/micheal.jpeg"
    ];

    // Logging length of both arrays
    console.log(drivers.length);
    console.log(driverImages.length);

    //declaring a constant and variables
    let maxGuess = 10
    var numGuess = 0;
    var wins = 0;
    var pauseGame = false
    var wordToMatch;
    var displayImage;
    var lettersGuessed = [];
    var wordToGuess = [];


    // Calling the load game function
    loadGame();

    // Wait for key press
    document.onkeypress = function (event) {
        // Validate if the key pressed is an alphabet
        if (myRegex(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase())
        }
    }

    // Check if letter is in word & process
    function checkForLetter(letter) {
        var rightGuess = document.createElement("audio")
        var wrongGuess = document.createElement("audio")
        rightGuess.setAttribute("src", "assets/sounds/correctLetterGuessed.mp3")
        wrongGuess.setAttribute("src", "assets/sounds/incorrectLetterGuessed.mp3")

        if (wordToMatch.includes(letter)) {
            for (var i = 0; i < wordToMatch.length; i++) {
                if (letter === wordToMatch[i]) {
                    wordToGuess[i] = letter;
                }
            }
            rightGuess.play();
            if (wordToGuess.join("") === wordToMatch) {
                wordToGuess = wordToMatch.split();
                // Increment wins
                wins++
                pauseGame = true
                updatePage()
                setTimeout(loadGame, 5000)
            }
        } else if (!wordToMatch.includes(letter)) {
            wrongGuess.play();
            lettersGuessed.push(letter)
            numGuess--;
            if (numGuess === 0) {
                // Display word before reseting game
                wordToGuess = wordToMatch.split();
                pauseGame = true;
                setTimeout(loadGame, 5000);
            }
        }

        updatePage()

    }

    // function declaration to load the game
    function loadGame() {
        numGuess = maxGuess;
        pauseGame = false;
        var i = 0;

        // Randomly get a new word using math.random()
        var randomSelector = Math.floor(Math.random() * drivers.length);
        wordToMatch = drivers[randomSelector].toUpperCase();
        displayImage = driverImages[randomSelector];
        // logging which word was randomly selected
        console.log(wordToMatch);

        // Reset word arrays
        lettersGuessed = [];
        wordToGuess = [];

        // Resetting the guessed word using while loop
        while (i < wordToMatch.length) {
            if (wordToMatch[i] === " ") {
                wordToGuess.push(" ");
            } else {
                wordToGuess.push("_");
            }
            i++;
        }

        //Calling the updatePage function to update the HTML page
        updatePage();
    }

    // function declaration to update html page
    function updatePage() {
        document.getElementById("totalWins").innerText = wins;
        document.getElementById("currentWord").innerText = wordToGuess.join(" ");
        document.getElementById("remainingGuesses").innerText = numGuess;
        document.getElementById("lettersGuessed").innerText = lettersGuessed.join(" ");
        document.getElementById('image').src = displayImage;
    }

    // Validation function declaration if keypressed is between A-Z or a-z
    function myRegex(ch) {
        return /^[A-Z]$/i.test(ch);
    }

});

//This function resets the game score will be 0
function resetGame() {
    window.location.reload(true);
}