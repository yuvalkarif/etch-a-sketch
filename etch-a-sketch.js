console.log("All Working");
let cont = document.querySelector(".container");
for (let j = 1; j <= 16; j++) {
    let lineCont = document.createElement("div");
    lineCont.setAttribute("id", `line${j}`)
    lineCont.setAttribute("class", `line`)
    cont.appendChild(lineCont);

    for (let i = 1; i <= 16; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", `div`)
        div.setAttribute("id", `div${i}`)
        lineCont.appendChild(div);
        
        
    }
}
cont.addEventListener("mouseover",hover);
function hover(e){
    if(e.target.className==`div`)
    e.target.setAttribute("class", `${e.target.className} active`);
}
let btn = document.querySelector(".btn");
btn.addEventListener("click",resetE);

function resetE(e){
    cont.innerHTML=``;
    let x = prompt(`enter x`, 1);
    let y = prompt(`enter y`, 1);
    generateGrid(y,x);
    
    let listArr = Array.from(cont.children);
    listArr.forEach(function(e){
    let divs =  Array.from(e.children);
    const div = Array.from(divs).map((child)=>child.setAttribute("class",`div`));
   

});

}
function generateGrid(x,y){
for (let j = 1; j <= x; j++) {
    let lineCont = document.createElement("div");
    lineCont.setAttribute("id", `line${j}`)
    lineCont.setAttribute("class", `line`)
    cont.appendChild(lineCont);

    for (let i = 1; i <= y; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", `div`)
        div.setAttribute("id", `div${i}`)
        lineCont.appendChild(div);
        
        
    }
}
}