song="";

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
 canvas=createCanvas(600, 500);
 canvas.position(300, 200);
 video=createCapture(VIDEO);
 video.hide();
 posenet=ml5.poseNet(video, modelloaded);
 posenet.on('pose', gotposes);
}

function modelloaded(){
    console.log("Posenet is initalised");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
}
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1.5);
}