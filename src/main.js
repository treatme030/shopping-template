'use strict';
//Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json')//fetch: 네트워크를 통해 간단하게 데이터를 받아 옴
    .then(response => response.json())//json으로 변환
    .then(json => json.items);
    
}

//Update the list with the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}//container에 items를 HTMLString으로 추가해줌

//Cteate HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
      </li>
    `;
}

function setEventListeners(items){
    const logo = document.querySelector(".logo");
    const buttons = document.querySelector(".buttons");
    logo.addEventListener()
}
//main
loadItems()
.then(items => {
    console.log(items);
    displayItems(items);
    // setEventListeners(items);
})
.catch(console.log);