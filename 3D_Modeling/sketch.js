let chevalier;

function setup() {
    createCanvas(400, 300, WEBGL)
}

function preload(){
    chevalier = loadModel('chevalier.obj');
}

function draw() {
    backgorund(0);
    ambientLight(100);
    directionLight(255, 255, 255, 0, 0, 1);
    model(chevalier);
}