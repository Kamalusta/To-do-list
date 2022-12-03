const button = document.querySelector('.add');
const input = document.querySelector('.input');
const list = document.querySelector('.list');
const sortIcon = document.querySelector('.sort img')
let counter=0;

button.addEventListener('click',adding);
document.addEventListener('keydown',(event=>{
    if(event.key=='Enter')
        adding();
}));
sortIcon.addEventListener('click',increase);
function increase(event){
    event.target.src='/icons/Group 90.png';
    const listArr=[];
    const list=document.querySelectorAll('.list p');
    for (let i = 0; i < list.length; i++) {
         listArr[i] = list[i].innerText; 
    }
    listArr.sort();
    for (let i = 0; i < list.length; i++) {
    list[i].innerText=listArr[i]
    }
    sortIcon.removeEventListener('click',increase)
    sortIcon.addEventListener('click',decrease);
    sortIcon.addEventListener('mouseover',(event=>{
        event.target.src='/icons/Group 91.png'
    }));
    sortIcon.addEventListener('mouseleave',(event=>{
        event.target.src='/icons/Group 90.png'
    }))
}
function decrease(event){
    event.target.src='/icons/Group 74.png';
    const listArr=[];
    const list=document.querySelectorAll('.list p');
    for (let i = 0; i < list.length; i++) {
         listArr[i] = list[i].innerText; 
    }
    listArr.sort().reverse();
    for (let i = 0; i < list.length; i++) {
    list[i].innerText=listArr[i]
    }
    sortIcon.removeEventListener('click',decrease)
    sortIcon.addEventListener('click',increase);
    sortIcon.addEventListener('mouseover',(event=>{
        event.target.src='/icons/Group 73.png'
    }));
    sortIcon.addEventListener('mouseleave',(event=>{
        event.target.src='/icons/Group 74.png'
    }))
}
function adding(){
    if(counter<5 & input.value!=''){
    counter++;
    list.style.visibility='visible';
    let elementDiv = document.createElement('div');
    elementDiv.draggable='true';
    list.append(elementDiv);
    const tasks=document.querySelectorAll('.list div')
    tasks.forEach(task=>{
        task.classList.add('tasks');
    })
    let elementP = document.createElement('p');
    elementP.innerText=input.value;
    elementP.contentEditable='true';
    tasks.forEach(task=>{
        task.append(elementP);
    })
    let elementImg = document.createElement('img');
    elementImg.src= '/icons/Group 77.png';
    tasks.forEach(task=>{
        task.append(elementImg)
    })
    const deletBtn=document.querySelectorAll('.list img');
    deletBtn.forEach(btn=>{
        btn.addEventListener('mouseover',(event=>{
            event.target.src='/icons/Group 70.png';
        }));
        btn.addEventListener('mouseout',(event=>{
            event.target.src='/icons/Group 77.png';
        })); 
        btn.addEventListener('click',deleting);
    })
    }
    input.value='';
    // const listItens = document.querySelectorAll('.tasks');
    // [].forEach.call(listItens, function(item) {
    // addEventsDragAndDrop(item);
    // });
}
function deleting(event){
        event.target.parentElement.remove();
        counter--;
        if(counter<1)
            list.style.visibility='hidden';
}

function dragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  };
  
  function dragEnter(e) {
    this.classList.add('over');
  }
  
  function dragLeave(e) {
    e.stopPropagation();
    this.classList.remove('over');
  }
  
  function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }
  
  function dragDrop(e) {
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }
  
  function dragEnd(e) {
    const listItens = document.querySelectorAll('.tasks');
    [].forEach.call(listItens, function(item) {
      item.classList.remove('over');
    });
    this.style.opacity = '1';
  }
  
  function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
  }
  