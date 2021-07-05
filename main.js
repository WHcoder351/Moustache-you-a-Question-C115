noseX = 0;
noseX = 0;
function preload(){

}
function setup() {
    canvas = createCanvas(310, 310);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(320, 320);
    video.hide();
    Pose = ml5.poseNet(video, mL);
    Pose.on('pose', Gotposes);
}
function Gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x is " + results[0].pose.nose.x);
        console.log("nose y is " + results[0].pose.nose.y);
    }
}
function draw() {
    image(video, 0, 0, 320, 320);  
}

function mL() {
    console.log("PoseNet has Started");
}

function snap() {
    save('MyMustache-Image.png')
}