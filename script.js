let parentSect = document.querySelector("#parent")
let quaa = document.querySelector("#quaa")
let squirrelDOM = "<div>";
const squirrelData = document.getElementById('parent');
const quaas = [

  ]

async function logJSONData() {
  const response = await fetch("https://data.cityofnewyork.us/resource/vfnx-vebw.json");
  const jsonData = await response.json();
  console.log(jsonData);

  for(let i=0; i<jsonData.length; i++){
    if(jsonData[i].primary_fur_color==="Cinnamon"){
      let div = document.createElement("div");
      if(jsonData[i].quaas===true){
      quaas.push (div);
    }
      div.classList.add("cinnamon");
      parentSect.append(div)
    };
    if(jsonData[i].primary_fur_color==="Gray"){
      let div = document.createElement("div");
      if(jsonData[i].quaas===true){
      quaas.push (div);
    }
      div.classList.add("gray");
      parentSect.append(div)
    };
    if(jsonData[i].primary_fur_color==="Black"){
      let div = document.createElement("div");
      if(jsonData[i].quaas===true){
      quaas.push (div);
    }
      div.classList.add("black");
      parentSect.append(div)
    };
  }
    squirrelDiv.innerHTML = elements;
    squirrelData.appendChild(squirredDiv);
  
}
// for(let i=0; i<quaas.length; i++){
      

// quaas[i].addEventListener("mouseover",(event)=>{
//   quaa.play();
//       console.log(quaas)
//     )};
//   };

logJSONData();

