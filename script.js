let parentSect = document.querySelector("#parent")
let kuk = document.querySelector("#kuk")
let quaa = document.querySelector("#quaa")
let moan = document.querySelector("#moan")

const btn = document.getElementById('city-sounds-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const audio = new Audio('citysounds.mp3');

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



btn.addEventListener('click', function() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline-block';
    audio.play();
  } else {
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'inline-block';
    audio.pause();
    audio.currentTime = 0; // Reset audio to beginning
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
        })
        //only ones with kuks show
        div.classList.add("cinnamon");
        parentSect.append(div)
      }

      if(jsonData[i].quaas===true){
        div.addEventListener("mouseover", ()=>{
          quaa.play();
        })
        //only ones with quaas show
        div.classList.add("cinnamon");
        parentSect.append(div)
      }
      
      if(jsonData[i].moans===true){
        div.addEventListener("mouseover", ()=>{
          moan.play();
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
        div.addEventListener("click", ()=>{
          kuk.play();
        })
      //only ones with kuks show
      div.classList.add("gray");
      parentSect.append(div) 
      }

      if(jsonData[i].quaas===true){
        div.addEventListener("click", ()=>{
          quaa.play();
        })
      //only ones with quaas show
      div.classList.add("gray");
      parentSect.append(div) 
      }

      if(jsonData[i].moans===true){
        div.addEventListener("click", ()=>{
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
        div.addEventListener("click", ()=>{
          kuk.play();
        })
        //only ones with kuks show
        div.classList.add("black");
        parentSect.append(div)      
      }
      if(jsonData[i].quaas===true){
        div.addEventListener("click", ()=>{
          quaa.play();
        })
        //only ones with quaas show
        div.classList.add("black");
        parentSect.append(div)      
      }
      if(jsonData[i].moans===true){
        div.addEventListener("click", ()=>{
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

