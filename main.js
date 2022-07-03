lefthandWristx=0;
lefthandWristy=0;
righthandWristx=0;
righthandWristy=0;

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
    lefthandWristx=results[0].pose.leftWrist.x;
    lefthandWristy=results[0].pose.leftWrist.y;
    righthandWristx=results[0].pose.rightWrist.x;
    righthandWristy=results[0].pose.rightWrist.y;
    console.log("lefthandWristx : "+ lefthandWristx+"  lefthandWristy : "+lefthandWristy);
    console.log("righthandWristx : "+righthandWristx+" righthandWristy : "+righthandWristy);  

}
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill('#FF0000');
    stroke('#FF0000');
    circle(lefthandWristx, lefthandWristy, 20);
    in_number_leftHandWristY=Nmuber(lefthandWristy);
    removeDecimalsy=floor(in_number_leftHandWristY);
    volume=removeDecimalsy/500;
    document.getElementById("volume").innerHTML="volume : "+volume;
    song.setVolume(volume);
    
    in_number_leftHandWristx=Nmuber(lefthandWristx);
    removeDecimalsx=floor(in_number_leftHandWristx);

}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1.5);
}