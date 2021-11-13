var noseX = 0;
var noseY = 0;
var leftWrist_X = 0;
var rightWristX = 0;
var difference = 0;
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
function modelLoaded() {
    console.log("posenet is initialized");
}
function getPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWrist_X = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWrist_X - rightWristX);
    }
}
function draw() {
    background(150);
    fill("pink");
    square(noseX, noseY, difference);
    document.getElementById("side_length").innerHTML = "The length of the square is " + difference + "px";
}