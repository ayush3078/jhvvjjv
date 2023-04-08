leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;

function setup() {
    canvas=createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video,0,0,450,400);
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelloded() {
    console.log("hello!");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        console.log("Left wrist x="+ leftWristx);
        leftWristy=results[0].pose.leftWrist.y;
        console.log("Left wrist y="+ leftWristy);

        rightWristx=results[0].pose.rightWrist.x;
        console.log("Right wrist x="+ rightWristx);
        rightWristy=results[0].pose.rightWrist.y;
        console.log("Right wrist y="+ rightWristy);
    }
}