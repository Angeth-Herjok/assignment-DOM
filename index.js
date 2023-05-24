document.body.style.backgroundColor="silver"


document.getElementById('title').style.color='green'

let h3Tags=document.getElementsByTagName('h3');
for(let i=0;i<h3Tags.length;i++){
    h3Tags[i].style.textTransform="uppercase"
}



let li=document.createElement('li')
li.innerHTML='Banana';
document.getElementById('fruList').appendChild(li)



const newVegList = document.createElement("li");
newVegList.textContent = "Spinach";
vegList.appendChild(newVegList);
