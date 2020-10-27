// Create the character level generator with a pre trained model
const rnn = ml5.charRNN('Beemovie', modelLoaded);


function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

function create(){// Generate content

    document.getElementById("output").innerHTML = "Please do not leave the browser, we are currently making a new shrek quote...";


// Generate content
rnn.generate({
    seed: 'Barry',
    length: document.getElementById("length").value,
    temperature: map_range(document.getElementById("temperature"),0,100,0,1),
  },(err, results) => {

    document.getElementById("output").innerHTML =  "Barry," + results.sample;

});

}