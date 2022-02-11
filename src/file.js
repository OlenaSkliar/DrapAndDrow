const wrapper = document.querySelector(".wrapper"); 
const arrItem = [];

        
        LETTERLIST.forEach(function(item){        
                let letter = document.createElement("span");
                wrapper.appendChild(letter);
                letter.innerHTML = item;
        })

const item = document.querySelectorAll('.wrapper span');
const target = document.querySelector('.target-wrapper');
        for(i = 0; i <= item.length; i++){
            arrItem.push(item[i]);
        }


window.onload = function(){
let j = 1;
        arrItem.forEach(function(elem){
           
            console.log(elem);
            elem.id = j;
            j++;
            elem.draggable = true;
            elem.addEventListener('dragstart', (e) => {
                console.log('dragstart');
                e.dataTransfer.setData("id", elem.id);
            });
            target.addEventListener('dragover', (e) => { 
                e.preventDefault(); 
            });
            wrapper.addEventListener('dragover', (e) => { 
                e.preventDefault(); 
            });
            target.addEventListener('drop', (e) => { 
                e.preventDefault();
                console.log('drop');
                let data = e.dataTransfer.getData("id");
                let dataElem = document.getElementById(data);
                target.appendChild(dataElem);
            });
            wrapper.addEventListener('drop', (e) => { 
                e.preventDefault();
                let dataW = e.dataTransfer.getData("id");
                let dataElemW = document.getElementById(dataW);
                wrapper.appendChild(dataElemW);
            });
        })  
        
}