function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifir = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ctA9IPGWa/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}