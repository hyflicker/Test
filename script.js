async function sendData(url = '', data = {}, method = "POST") {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}


function addPerson(personObj) {
  sendData("https://jsonbox.io/box_4c8006a81a7017b9e6cc", personObj)
}

function removePerson(id) {
  sendData(`https://jsonbox.io/box_4c8006a81a7017b9e6cc/${id}`, {}, "DELETE")
}

async function getPeople() {
  let res = await fetch("https://jsonbox.io/box_4c8006a81a7017b9e6cc");
  let jsonRes = await res.json();
  return jsonRes;
}






// (async () => {
//   let data = await 
//   console.log(321, data);
// })()


(async () => {
  let data = await sendData("https://jsonbox.io/box_4c8006a81a7017b9e6cc/5eb5795d1bfd330017acf75e", {}, "DELETE")
  console.log(321, data);

  fetch("https://jsonbox.io/box_4c8006a81a7017b9e6cc")
  .then(res => res.json())
  .then(res => console.log(123, res));
})()



// // simple localStorage database
// let databaseName = "database";
// function setItem (itemName, itemValue) {
//   let isDatabaseAvailable = localStorage.getItem(databaseName);
//   if (!isDatabaseAvailable) {
//     localStorage.setItem(databaseName, "{}");
//   }
//   let currentDatabaseObject = JSON.parse(localStorage.getItem(databaseName));
//   currentDatabaseObject[itemName] = itemValue;
//   localStorage.setItem(databaseName, JSON.stringify(currentDatabaseObject));
// }

// function getItem (itemName) {
//   let isDatabaseAvailable = localStorage.getItem(databaseName);
//   if (!isDatabaseAvailable) {
//     localStorage.setItem(databaseName, "{}");
//   }
//   let currentDatabaseObject = JSON.parse(localStorage.getItem(databaseName));
//   return currentDatabaseObject[itemName];
// }



// // queue code
// let personsNameInput = document.querySelector(".persons-name");
// let queueElem = document.querySelector(".queue");

// document.addEventListener("click", function (event) {
//   if (event.target.closest(".button__add-to-queue")) {
//     let personsName = personsNameInput.value;
//     let peopleArray = getItem("people");
    
//     if (!peopleArray) {
//       peopleArray = [];
//     }

//     peopleArray.push(personsName);
//     setItem("people", peopleArray);
//     personsNameInput.value = "";
//     render();
//   }
// });

// function render () {
//   let peopleArray = getItem("people") || [];
//   let peopleHtml = peopleArray.map(person => {
//     return `<div>${person}</div>`;
//   }).join("");
  
//   queueElem.innerHTML = peopleHtml;
// }

// render();