document.querySelector('#addRandomBtn')
 .addEventListener('click',function(){

    let randomNumber = Math.floor(Math.random()*100 +1)


    let liElement = document.createElement('li')

    liElement.innerHTML = randomNumber
    liElement.addEventListener('click',function(){
        alert(randomNumber)
    })

    let numberListElement = document.querySelector('#number-list')
    numberListElement.appendChild(liElement)
 })