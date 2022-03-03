difference = 0;
nose_x = 0;
nose_y = 0;
function preload() {

}

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(700,150);

    video = createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {

    background("#222222");

    textSize(difference);
    fill("blue");
    text("Thor", nose_x, nose_y);

}

function ModelLoaded() {
    console.log("Posenet Is Initialized.");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
    }
}