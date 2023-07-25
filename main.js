const mainContainer = document.querySelector('#mainContainer')

let mainHeader = document.createElement('header')
let headerText = document.createElement('h1')
headerText.innerText = 'Customer Directory'
mainHeader.appendChild(headerText)
mainContainer.appendChild(mainHeader)


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

{/* <div class="personBox">
        <img>imgDiv</img>
        <h2>nameDiv</h2>
        <h4>cityDiv</h4>


    </div> */}

function personDiv(person) {
    //create person div
    let personDiv = document.createElement('div')
    personDiv.classList.add('personBox')
    //create img div
    let imgDiv = document.createElement('img')
    imgDiv.src = person.picture.thumbnail
    personDiv.appendChild(imgDiv)
    //create name div
    let nameDiv = document.createElement('h2')
    nameDiv.innerText = capitalize(person.name.first) + " " + capitalize(person.name.last)
    personDiv.appendChild(nameDiv)
    //create city div
    let cityDiv = document.createElement('h4')
    cityDiv.innerText = person.city
    //create github link
    let gitHubLink = document.createElement('a')
    gitHubLink.href = person.gitHub 
    personDiv.appendChild(gitHubLink)
    //append main container
    mainContainer.appendChild(personDiv)
}

for (let person of customers) {
    personDiv(person)
}