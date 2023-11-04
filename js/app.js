// make reference to the variables
const userList = document.querySelector('ul')
const userInput = document.querySelector('input')
const addMe = document.querySelector('button')

// addMe button clicks ad the item a variable
addMe.addEventListener('click', () => {
    const inputCollection = userInput.value
    userInput.value = ''

    // then add the list element span element and a button
    const list = document.createElement('li')
    const listText = document.createElement('span')
    const listButton = document.createElement('button')
    
    list.appendChild(listText)
    listText.textContent = inputCollection
    list.appendChild(listButton)
    listButton.textContent = "Delete"
    userList.appendChild(list)

    
})


