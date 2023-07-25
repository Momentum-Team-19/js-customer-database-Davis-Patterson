const mainContainer = document.querySelector('#mainContainer')

let mainHeader = document.createElement('header')
let headerText = document.createElement('h1')
headerText.innerText = 'Customer Directory'
mainHeader.appendChild(headerText)
mainContainer.appendChild(mainHeader)

function personDiv(person) {

}

for (let person of customers) {
    buildPersonDiv(person)
}