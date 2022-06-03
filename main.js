noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0; 
function preload(){

}

function setup(){
canvas=createCanvas(400,300);
canvas.position(500,150);
video=createCapture(VIDEO);
video.size(400,300);
video.position(0,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);


}

function modelLoaded(){
    console.log("Model is Loaded");
}
 
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+",NoseY="+noseY);
     
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference= floor(leftWristX-rightWristX);
     }
}


function draw(){
    background("lightgrey");
fill("#ff1492");
textSize(difference);
text('Arnav',noseX,noseY);
document.getElementById("arnav").innerHTML="Font Size = "+difference+" px";
}