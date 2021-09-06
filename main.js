song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song=loadSound("music.mp3");

    video=createCapture(VIDEO);
    video.hide();
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreLeftWrist =results[0].pose.keypoints[9].score;
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.leftWrist.x;
        rightWristY=results[0].pose.leftWrist.y;
    }
}
function modelLoaded(){
    console.log("PoseNEt is intializied");
}

function draw(){
    image(video,0,0,600,500);
    fill("#800080");
    stroke("#8F00FF");
    
    if (scoreLeftWrist > 0.2) {
    
        circle(leftWristX,leftWristY,20);
    InNumberleftWristY=Number(leftWristY);
    remove_decimals=floor(InNumberleftWristY);
    leftwristY_divide_1000=remove_decimals/1000;
    volume=leftwristY_divide_1000*2;
    document.getElementById("volume").innerHTML="Volume="+volume;
    song.setVolume(volume);
    
}

    

}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
