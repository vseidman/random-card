window.onload = () => {
    let body = document.body
    body.style.background = "green"
    body.style.height = "100vh"
    body.style.display = "flex"
    body.style.justifyContent = "center"
    body.style.alignItems = "center"


    let card = document.querySelector("#app")
    card.style.border = "1px solid black"
    card.style.height = "400px"
    card.style.width = "300px"
    card.style.borderRadius = "20px"
    card.style.backgroundColor = "white"
    card.style.textAlign = "center"
    card.style.display = "inlineBlock"
    card.style.position = "relative"
    card.style.padding = "20px"
    card.style.margin = "auto"
    
    let generateRandomNumbers = () => {
        let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        let numb = Math.floor(Math.random() * numbers.length)
        return numbers[numb]
    }
    
    let generateRandomFigure = () => {
        let figure = ["&spades;","&clubs;","&hearts;","&diams;"]
        let idxFigure = Math.floor(Math.random() * figure.length)
        return figure[idxFigure]
    }
    
    let randomIcon = generateRandomFigure() 

    let iconColor = randomIcon === "&hearts;" ? "red" : "black";

    let containerIcons = document.createElement("i")
    containerIcons.innerHTML = randomIcon 
    containerIcons.style.bottom = "20px"
    containerIcons.style.right = "20px"
    containerIcons.style.fontSize = "70px"
    containerIcons.style.float = "left"
    containerIcons.style.color = iconColor
    
    let containerNumber = document.createElement("p")
    containerNumber.innerHTML = generateRandomNumbers()
    containerNumber.style.fontSize = "130px"
    
    let containerIconsTwo = document.createElement("i")
    containerIconsTwo.innerHTML = randomIcon 
    containerIconsTwo.style.position = "absolute"
    containerIconsTwo.style.bottom = "20px"
    containerIconsTwo.style.right = "20px"
    containerIconsTwo.style.fontSize = "70px"
    containerIconsTwo.style.color = iconColor
    
    
    card.appendChild(containerIcons)
    card.appendChild(containerNumber)
    card.appendChild(containerIconsTwo)
}