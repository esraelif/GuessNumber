// //*pc ye 3 tane sayı tutturduk, 1-9 arasında olabilmesi için 10 ile çarpıp yukarı yuvarladık
let rastgeleNumberPC1 = Math.ceil(Math.random() * 10)
let rastgeleNumberPC2 = Math.ceil(Math.random() * 10)
let rastgeleNumberPC3 = Math.ceil(Math.random() * 10)
console.log(rastgeleNumberPC1)


//*CHECK butonuna basıldıgında
document.querySelector(".check").addEventListener("click", () => {

    let guess1 = document.getElementById("userGuess1").value;

    let guess2 = document.getElementById("userGuess2").value;
    let guess3 = document.getElementById("userGuess3").value;
    let selectedOption = "Your Choice: " + guess1 + ", " + guess2 + ", " + guess3;

    document.getElementById("selectedOption").innerText = selectedOption;

})


//*Her turn butonu calıstırdıgında


function generateRandomNumber() {
    var randomNumber1 = Math.floor(Math.random() * 10);
    document.getElementById("randomNumberDisplay1").value = randomNumber1;
    var randomNumber2 = Math.floor(Math.random() * 10);
    document.getElementById("randomNumberDisplay2").value = randomNumber2;
    var randomNumber3 = Math.floor(Math.random() * 10);
    document.getElementById("randomNumberDisplay3").value = randomNumber3;

}
let numberOfPlays3 = document.querySelectorById("tree")
let totalscore = 0
if (tree) {
    const guess1 = document.querySelector(".msg1".value)
    if (randomNumber1 == guess1) {
        totalscore += 50
    } else {
        score = 0
    }
    const guess2 = document.querySelector(".msg2".value)
    if (randomNumber2 == guess2) {
        totalscore += 50
    } else {
        score = 0
    }
    const guess3 = document.querySelector(".msg3".value)
    if (randomNumber3 == guess3) {
        totalscorescore += 50
    } else {
        score = 0
    }

}

let numberOfPlays5 = document.querySelectorById("five")
if (five) {
    const guess1 = document.querySelector(".msg1".value)
    if (randomNumber1 == guess1) {
        totalscore += 30
    } else {
        score = 0
    }
    const guess2 = document.querySelector(".msg2".value)
    if (randomNumber2 == guess2) {
        totalscore += 30
        score = 0
    }
    const guess3 = document.querySelector(".msg3".value)
    if (randomNumber3 == guess3) {
        totalscorescore += 30
    } else {
        score = 0
    }

}
let numberOfPlays7 = document.querySelectorById("seven")
if (seven) {
    const guess1 = document.querySelector(".msg1".value)
    if (randomNumber1 == guess1) {
        totalscore += 15
    } else {
        score = 0
    }
    const guess2 = document.querySelector(".msg2".value)
    if (randomNumber2 == guess2) {
        totalscore += 15
        score = 0
    }
    const guess3 = document.querySelector(".msg3".value)
    if (randomNumber3 == guess3) {
        totalscorescore += 15
    } else {
        score = 0
    }

}


