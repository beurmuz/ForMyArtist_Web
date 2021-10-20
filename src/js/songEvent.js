// Fetch the items from the JSON file
// function loadItems() {
//     return fetch('data/data.json')
//       .then(response => response.json())
//       .then(json => json.items);
//   }
  
//   // Update the list with the given items
//   function displayItems(items) {
//     const container = document.querySelector('.items');
//     container.innerHTML = items.map(item => createHTMLString(item)).join('');
//   }
  
//   // Create HTML list item from the given data item
//   function createHTMLString(item) {
//     return `
//       <li class="item">
//           <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
//           <span class="item__description">${item.gender}, ${item.size}</span>
//       </li>
//       `;
//   }
  
//   function onButtonClick(event, items) {
//     const dataset = event.target.dataset;
//     const key = dataset.key;
//     const value = dataset.value;
  
//     if (key == null || value == null) {
//       return;
//     }
  
//     displayItems(items.filter(item => item[key] === value));
//   }
  
//   function setEventListeners(items) {
//     const logo = document.querySelector('.logo');
//     const buttons = document.querySelector('.buttons');
//     logo.addEventListener('click', () => displayItems(items));
//     buttons.addEventListener('click', event => onButtonClick(event, items));
//   }
  
//   // main
//   loadItems()
//     .then(items => {
//       displayItems(items);
//       setEventListeners(items);
//     })
//     .catch(console.log);
  

let songsList = ["iffy", "party", "깡", "달링", "RING RING", "RESPECT", "GIDDY UP", "랑데뷰", "The Purge", "Is It Love", "Me&Bae", "WHY YOU?", "그래 그냥 내게 바로", "How We Rock", "JUST U", "침대 노래", "FIRE", "너의 밤", "ㄱ에서부터 0에서부터", "World Domination"]
// User가 입력한 input태그의 값 가져오기

function returnValue(value) {
    let printResult = '';
    for(let i of songsList) {
        if(value.toLowerCase()===i.toLowerCase()) {
            printResult = "T";
            break;
        } else {
            printResult = "F";
        }
    }
    return printResult;
}

function getSearchValue() {
    const searchValue = document.querySelector(".se_input").value;
    const searchResult = document.querySelector(".searchResult");
    if(returnValue(searchValue)==="T") {
        searchResult.style.backgroundColor = "lightgray";
        searchResult.innerHTML = searchValue;
    } else {
        searchResult.style.backgroundColor = "pink";
        searchResult.innerHTML = "검색 결과가 없습니다.";
    }
}



