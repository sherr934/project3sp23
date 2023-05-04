let parentSect = document.querySelector("#parent")
let kuk = document.querySelector("#kuk")
let quaa = document.querySelector("#quaa")
let moan = document.querySelector("#moan")

let squirrelDOM = "<div>";
const squirrelData = document.getElementById('parent');
// const kuks = [

//   ]

async function logJSONData() {
  const response = await fetch("https://data.cityofnewyork.us/resource/vfnx-vebw.json");
  const jsonData = await response.json();
  console.log(jsonData);

  for(let i=0; i<jsonData.length; i++){
    //cinnamon fur
    if(jsonData[i].primary_fur_color==="Cinnamon"){
      let div = document.createElement("div");
      if(jsonData[i].kuks===true){
        div.addEventListener("click", ()=>{
          kuk.play();
        })
        //only ones with kuks show
        div.classList.add("cinnamon");
        parentSect.append(div)
      }

      if(jsonData[i].quaas===true){
        div.addEventListener("click", ()=>{
          quaa.play();
        })
        //only ones with quaas show
        div.classList.add("cinnamon");
        parentSect.append(div)
      }
      
      if(jsonData[i].moans===true){
        div.addEventListener("click", ()=>{
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

