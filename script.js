var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight<br>oh yikes, you must be look like a skeleton right now, please consume more calories and protein to fill your body';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy<br>You are normal, there is nothing to worry about, keep up the good work';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight<br> You are overweight, this is not normal, but you can fix your condition with diet and excercise regulary';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese<br>You are too fat, this definetely not healthy, please take a serious action by decreasing your ruitine lunch and do intense excercise regulary as soon as possible';
     }else if(35<=bmi){
    result = 'Extremely obese<br>there is nothing we can help, please go check it to your nearby hospital';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
