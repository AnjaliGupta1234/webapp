var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

recognition.onresult = function (event)
{
    console.log(event);
    var content = event.results[0][0].transcript;

    console.log(content);

    if(content =="selfie"){
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

setTimeout(function()  {
       img_id="s1";
       takesnapshot();
       speak_data = "taking your selfie in 10 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); 
    }, 5000);

    setTimeout(function()  {
        img_id="s2";
        takesnapshot();
        speak_data = "taking your selfie in 15 seconds";
 
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis); 
     }, 10000);

     setTimeout(function()  {
        img_id="s3";
        takesnapshot();
     },15000);
 }

 camera = document.getElementById("camera");
  
 Webcam.set({
     width:500, 
     height:400,
     image_format: 'jpeg',
     jpeg_qualtiy:90
 });

 function takesnapshot() {
     webcam.snap(function(data_uri){
         if (img_id == "s1")
         {
             document.getElementById("result1").innerHTML = '<img id = "s1" src="'+data_uri+'">';
         }

         if (img_id == "s2")
         {
             document.getElementById("result2").innerHTML = '<img id = "s2" src="'+data_uri+'">';
         }

         if (img_id == "s3")
         {
             document.getElementById("result3").innerHTML = '<img id = "s3" src="'+data_uri+'">';
         }
     });
     
 }
 


