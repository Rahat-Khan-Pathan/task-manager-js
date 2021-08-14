let greenButton = document.getElementById('green');
let salmonButton = document.getElementById('salmon');
let redButton = document.getElementById('red');
let violetButton = document.getElementById('violet');
let skyBlueButton = document.getElementById('skyblue');
let card = document.getElementById('card');
let row=document.getElementById('row');
let addTask = document.getElementById('add');
addTask.addEventListener('click',function(event){
    let h5 = document.createElement('h5');
    h5.innerText = document.getElementById('input').value;
    document.getElementById('input').value =''; 
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    buttons.setAttribute('id','buttons')
    let cardTitle=document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.appendChild(h5);
    let closeButton = document.createElement('span');
    let close = document.createElement('i');
    close.setAttribute('class','fas fa-window-close')
    close.setAttribute('id','close');
    closeButton.appendChild(close);
    cardTitle.appendChild(closeButton);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(buttons);  
    let card=document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id','card');
    card.appendChild(cardBody);
    let col=document.createElement('div');
    col.classList.add('col');
    col.appendChild(card);
    document.getElementById('row').appendChild(col);
    let green=document.createElement('button');
    let salmon=document.createElement('button');
    let red=document.createElement('button');
    let violet=document.createElement('button');
    let skyBlue=document.createElement('button');
    green.setAttribute('id','green');
    salmon.setAttribute('id','salmon');
    red.setAttribute('id','red');
    violet.setAttribute('id','violet');
    skyBlue.setAttribute('id','skyblue');
    buttons.appendChild(green);
    buttons.appendChild(salmon);
    buttons.appendChild(red);
    buttons.appendChild(violet);
    buttons.appendChild(skyBlue);
})
row.addEventListener('click',function(event){
    if(event.target.id == 'close')
    {
        event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);
    }
    else if(event.target.id == 'green')
    {
        event.target.parentNode.parentNode.parentNode.style.backgroundColor = 'lightgreen';;
    }
    else if(event.target.id == 'salmon')
    {
        event.target.parentNode.parentNode.parentNode.style.backgroundColor = 'salmon';
    }
    else if(event.target.id == 'red')
    {
        event.target.parentNode.parentNode.parentNode.style.backgroundColor = 'red';
    }
    else if(event.target.id == 'violet')
    {
        event.target.parentNode.parentNode.parentNode.style.backgroundColor = 'violet';
    }
    else if(event.target.id == 'skyblue')
    {
        event.target.parentNode.parentNode.parentNode.style.backgroundColor = 'skyblue';
    }
})