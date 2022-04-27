// visualizzare 5 numeri casuali in html
    // funzione per creare 5 numeri random non ripetuti
    const randomNumberQuantity = 5;
    const randomNumberRangeLimit = 100;
    const randomNumbers = generateUniqueRndNumbers(randomNumberQuantity, randomNumberRangeLimit);
    console.log("randomNumbers",randomNumbers);
    // stamparli in html
    const randomNumbersContainer = document.getElementById("random-numbers");
    console.log("randomNumbersContainer", randomNumbersContainer);
    randomNumbersContainer.innerHTML = randomNumbers;

// far partire il timer in pagina
    // dopo 30 secondi cancellare i numeri in pagina
    const timerContainer = document.getElementById("timer-container");
    let count = parseInt(timerContainer.textContent);

    const timer = setInterval(function(){
    count--;
    if (count <= 0) {
        clearInterval(timer);
        timerContainer.innerHTML = "TimeOut!!!";
        randomNumbersContainer.innerHTML = "";
    } else {
        timerContainer.innerHTML = count;
    }
    }, 1000);

// far comparire il prompt dopo i 30 secondi
    // chiedere all'utente di inserire i 5 numeri visualizzati
    // confrontare i numeri inseriti con quelli generati casualmente
    // comunicare quali e quanti numeri sono stati indovinati


// FUNCTIONS
/**
 * Description generate X unique random number with a max limit range and create an array containing them
 * @param {Number} numberQuantity -> quantity of number you want to generate
 * @param {Number} maxLimit -> max value the number can get
 * @returns {Array} -> the array with the random unique numbers
 */
 function generateUniqueRndNumbers(numberQuantity, maxLimit) {
    const randomsUniqueNumbersArray = [];
    while (randomsUniqueNumbersArray.length < numberQuantity) {
        const randomNumber = getRndInteger(1, maxLimit);
        if ( !randomsUniqueNumbersArray.includes(randomNumber)) {
            randomsUniqueNumbersArray.push(randomNumber);
        }
    }
    return randomsUniqueNumbersArray;
}

// UTILITY FUNCTION
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}