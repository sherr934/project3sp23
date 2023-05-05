let parentSect = document.querySelector("#parent")
let kuk = document.querySelector("#kuk")
let quaa = document.querySelector("#quaa")
let moan = document.querySelector("#moan")

const cityBtn = document.getElementById('city-sounds-btn');
const cityPlayIcon = document.getElementById('city-play-icon');
const cityPauseIcon = document.getElementById('city-pause-icon');
const cityAudio = new Audio('citysounds.mp3');

const natureBtn = document.getElementById('nature-sounds-btn');
const naturePlayIcon = document.getElementById('nature-play-icon');
const naturePauseIcon = document.getElementById('nature-pause-icon');
const natureAudio = new Audio('naturesounds.mp3');

let isPlaying = false;

document.addEventListener('DOMContentLoaded', function() {
  var soundsButton = document.getElementById('soundsbtn');
  var overlay = document.getElementById('overlay');

  soundsButton.addEventListener('click', function() {
    overlay.style.display = 'none'; // hide the overlay
  });
});

let squirrelDOM = "<div>";
const squirrelData = document.getElementById('parent');



cityBtn.addEventListener('click', function() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    cityPlayIcon.style.display = 'none';
    cityPauseIcon.style.display = 'inline-block';
    cityAudio.play();
  } else {
    cityPauseIcon.style.display = 'none';
    cityPlayIcon.style.display = 'inline-block';
    cityAudio.pause();
    cityAudio.currentTime = 0; // Reset audio to beginning
  }
});

natureBtn.addEventListener('click', function() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    naturePlayIcon.style.display = 'none';
    naturePauseIcon.style.display = 'inline-block';
    natureAudio.play();
  } else {
    naturePauseIcon.style.display = 'none';
    naturePlayIcon.style.display = 'inline-block';
    natureAudio.pause();
    natureAudio.currentTime = 0; // Reset audio to beginning
  }
});

async function logJSONData() {
  const response = await fetch("https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=3023");
  const jsonData = await response.json();

  let kukCount =0;
  let quaaCount =0;
  let moanCount =0;
  for(let i=0; i<jsonData.length; i++){
    //cinnamon fur 
    if(jsonData[i].kuks===true){
          console.log("kuk:", kukCount)  
          kukCount++
    }

    if(jsonData[i].quaas===true){
          console.log("quaa:", quaaCount)  
          quaaCount++
    }

    if(jsonData[i].moans===true){

          console.log("moans:", moanCount)  
          moanCount++
    }

    if(jsonData[i].primary_fur_color==="Cinnamon"){
      let div = document.createElement("div");
      if(jsonData[i].kuks===true){
        div.addEventListener("mouseover", ()=>{
          kuk.play();
          console.log(kuk,"playing")
        })
        //only ones with kuks show
        div.classList.add("cinnamon");
        parentSect.append(div)
      }

      if(jsonData[i].quaas===true){
        div.addEventListener("mouseover", ()=>{
          quaa.play();
          console.log(quaa,"playing")
        })
        //only ones with quaas show
        div.classList.add("cinnamon");
        parentSect.append(div)
      }
      
      if(jsonData[i].moans===true){
        div.addEventListener("mouseover", ()=>{
          moan.play();
          console.log(moan,"playing")
        })
        //only ones with moans show
        div.classList.add("cinnamon");
        parentSect.append(div)
      }

    };

    //gray fur
    if(jsonData[i].primary_fur_color==="Gray"){
      let div = document.createElement("div");
      if(jsonData[i].kuks===true){
        div.addEventListener("mouseover", ()=>{
          kuk.play();
        })
      //only ones with kuks show
      div.classList.add("gray");
      parentSect.append(div) 
      }

      if(jsonData[i].quaas===true){
        div.addEventListener("mouseover", ()=>{
          quaa.play();
        })
      //only ones with quaas show
      div.classList.add("gray");
      parentSect.append(div) 
      }

      if(jsonData[i].moans===true){
        div.addEventListener("mouseover", ()=>{
          moan.play();
        })
      //only ones with moans show
      div.classList.add("gray");
      parentSect.append(div) 
      }
 
    };

    //black fur
    if(jsonData[i].primary_fur_color==="Black"){
      let div = document.createElement("div");
      if(jsonData[i].kuks===true){
        div.addEventListener("mouseover", ()=>{
          kuk.play();
        })
        //only ones with kuks show
        div.classList.add("black");
        parentSect.append(div)      
      }
      if(jsonData[i].quaas===true){
        div.addEventListener("mouseover", ()=>{
          quaa.play();
        })
        //only ones with quaas show
        div.classList.add("black");
        parentSect.append(div)      
      }
      if(jsonData[i].moans===true){
        div.addEventListener("mouseover", ()=>{
          moan.play();
        })
        //only ones with moans show
        div.classList.add("black");
        parentSect.append(div)      
      }
    };
  }
    // squirrelDiv.innerHTML = elements;
    // squirrelData.appendChild(squirrelDiv);
}



// for(let i=0; i<kuks.length; i++){
      

// kuks[i].addEventListener("mouseover",(event)=>{
//   kuk.play();
//       console.log(kuks)
//     )};
//   };


logJSONData();

