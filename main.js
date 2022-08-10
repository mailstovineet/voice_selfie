var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    process=event.results[0][0].transcript;
    console.log(process);
    document.getElementById("textbox").innerHTML=process;
    if(process=="take my selfie"){
        console.log("taking selfie");
        speak();
    }
    else{
        document.getElementById("incorrect_words").innerHTML="Please say take my selfie";
    }
}

function speak(){
    var synth=window.speechSynthesis;
    var speaker="Taking Your Selfie in 5.  4.  3.  2.  1";
    var saythis=new SpeechSynthesisUtterance(speaker);
    synth.speak(saythis);
    Webcam.attach(cam);
    setTimeout(function(){
        take_selfie();
        download();
    },5000);
}

Webcam.set({
    width:400,
    height:400,
    image_format:'jpg',
    jpg_quality:90
});

var cam=document.getElementById("camera");

function take_selfie(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">'; 
    });
}

function download(){
    var a=document.getElementById("download_pic");
    var img_src=document.getElementById("selfie_img").src;
    a.href=img_src;
    a.click();
}