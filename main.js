lefthandWristx=0;
lefthandWristy=0;
righthandWristx=0;
righthandWristy=0;
scoreleftWrist=0;
scorerightWrist=0;

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
    scoreleftWrist=results[0].pose.keypoints[9].score;
    scorerightWrist=result[0].pose.keypoints[10].score;
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
    if(scorerightWrist>0.2){
    circle(righthandWristx, righthandWristy, 20);
    if(righthandWristy>0 && righthandWristy<=100){
        document.getElementById("speed").innerHTML="Speed : 0.5";
        song.rate(0.5);
    }
    else if(righthandWristy>100 && righthandWristy<=200){
        document.getElementById("speed").innerHTML="Speed : 1";
        sound.rate(1);
    }
    else if(righthandWristy>200 && righthandWristy<=300){
        document.getElementById("speed").innerHTML="Speed : 1.5";
        sound.rate(1.5);
    }
    else if(righthandWristy>300 && righthandWristy<=400){
        document.getElementById("speed").innerHTML="Speed : 2";
        sound.rate(2);
    }
    else if(righthandWristy>400 && righthandWristy<=500){
        document.getElementById("speed").innerHTML="speed : 2.5";
        sound.rate(2.5);
    }
    }

    
    if(scoreleftWrist>0.2){
    circle(lefthandWristx, lefthandWristy, 20);
    in_number_leftHandWristY=Number(lefthandWristy);
    removeDecimalsy=floor(in_number_leftHandWristY);
    volume=removeDecimalsy/500;
    document.getElementById("volume").innerHTML="volume : "+volume;
    song.setVolume(volume);
    }
}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1.5);
}