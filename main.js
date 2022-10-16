function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classfier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/iyP-u7wRz/model.json", modelReady);
}

function modelReady() {
    classfier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = 'rgb(' + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = 'rgb(' + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img1 = document.getElementById("beatbox");
        img2 = document.getElementById("humming");
        img3 = document.getElementById("laughter");

        if (results[0].label == "beatbox") {
            img1.src = 'beatbox.gif';
            img2.src = 'humming.png';
            img3.src = 'laughter.png';
        } else if (results[0].label == 'Humming') {
            img1.src = 'beatbox.png';
            img2.src = 'humming.gif';
            img3.src = 'laughter.png';
        } else {
            img1.src = 'beatbox.png';
            img2.src = 'humming.png';
            img3.src = 'laughter.gif';
        }

    }
}