// Not linked

function changeTitle(title){
    return document.querySelector('#header-title').innerText = title
}

function changeStyle(style){
    return document.getElementById('header-title').style.color = style
}

function addItem(item){
    // const newUl = document.querySelector('ul')
    // const newLi = document.createElement('li')
    // let classArray = ['list-group-item', 'bg-dark']
    // let bigClassArray = [...classArray, 'text-light']
    // newLi.classList.add(...bigClassArray)
    // newLi.textContent = item
    // return newUl.appendChild(newLi)

    const findUl = document.querySelector('ul') //find tag to update
    const newLi = document.createElement('li') //creating new li tag
    newLi.className = 'list-group-item' //set class name to desired class
    newLi.textContent = item//saying the newLi will be a textContent data type and setting to the param passed in
    return findUl.appendChild(newLi)//return the added newLi to the found Ul
}


function showItems(){
    return document.querySelectorAll('li').forEach(item => console.log(item));
}

function changedItems(styleChange, newText){
    document.querySelectorAll('li').forEach(item => item.style.color = styleChange);
    document.querySelectorAll('li').forEach(item => item.innerText = newText)
}