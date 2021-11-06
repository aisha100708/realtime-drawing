function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 500);
    video.position(20, 200);
    canvas.position(700, 200);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', getPoses);
}
function draw() {
    background(150);
}
function modelLoaded() {
    console.log("posenet is initialized");
}
function getPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}