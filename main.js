function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log("PoseNet is Initialized");
}
var difference;
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristY = " + rightWristX + "difference = " + difference);
    }
}

function draw() {
    background('#c58ef5');
    textSize(difference);
    fill('#f59b42');
    text('Vaishnavi', 50, 400);
    document.getElementById("font_size").innerHTML = "The font size will be = " + difference + " px";
}
