var piece;
piece = {type : null, format : null, metal : null, plate: null, rock : null};
var type; var format; var metal; var rock;

var pieceImg = document.getElementById("piece");
var budget = document.getElementById("budget");
var budgetValue = 0;

function getBudget(type, format, metal, rock) {
    if (type == "ring") {
        budgetValue += 250;
        if (format == 'aliança') {
            budgetValue += 50;
        } else if (format == 'chevalier') {
            budgetValue += 100;
        }

        if (metal == 'silver') {
            budgetValue += 0
        } else if (metal == 'gold' || metal == 'whiteGold' || metal == 'roseGold') {
            budgetValue += 120;
        }

        
    } else if (type == 'earring') {
        budgetValue += 240;
    } else if (type == 'necklace') {
        budgetValue += 200;
    } else if (type == 'bracelet') {
        budgetValue += 100;
    }

    
    budget.innerHTML = "Orçamento: $"+budgetValue.toFixed(2);
}

var secondDisplay = false;
var second = document.getElementById('second');
var types = ['ring', 'earring', 'necklace', 'bracelet'];

function chooseType(choice) {
    type = choice;
    piece.type = choice;
    format = document.getElementById(type+'Format');
    second.classList.remove('d-none');
    if (secondDisplay == false) {
        format.classList.remove('d-none');
        secondDisplay = true;
    } else {
        for (i=0; i<types.length; i++) {
            format = document.getElementById(types[i]+'Format');
            if (format.classList.contains('d-none') == false) {
                format.classList.add('d-none');
            }
        }
        format = document.getElementById(type+'Format');
        format.classList.remove('d-none');
    }
    getBudget(piece.type, piece.format, piece.metal, piece.rock);
}

var thirdDisplay = false;
var third = document.getElementById('third');
var formats = []

function chooseFormat(choice) {
    piece.format = choice;
    if (thirdDisplay == false) {
        third.classList.remove('d-none');
    }
}

var forthDisplay = false;
var forth = document.getElementById('forth');
var metals = ['silver', 'gold', 'whiteGold', 'roseGold']

function chooseMetal(choice) {
    piece.metal = choice;
    if (forthDisplay == false) {
        forth.classList.remove('d-none');
    }
}

var fithDisplay = false;
var fith = document.getElementById('fith');
var rocks = ['apatita', ]

function chooseRock(choice) {
    piece.rock = choice;
    if (fithDisplay == false) {
        fith.classList.remove('d-none');
    }
    if (splt[0] == 'heart' && piece.rock != 'rubi') {
        alert = document.getElementById("alertHeart");
        alert.classList.remove('d-none');
    } else {
        alert.classList.add('d-none');
    }
}

var sixthDisplay = false;
var sixth = document.getElementById('sixth');
function chooseForm(choice) {
    piece.metal = choice;
    splt = choice.split(' ')
    if (splt[0] == 'heart' && piece.rock != 'rubi') {
        alert = document.getElementById("alertHeart");
        alert.classList.remove('d-none');
    } else {
        alert.classList.add('d-none');
    }
    if (sixthDisplay == false) {
        sixth.classList.remove('d-none');
    }
}