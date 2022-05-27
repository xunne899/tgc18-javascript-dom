//model

let model = {
    number: 0 
}



function setNumber(newNumber){
    if (newNumber >= 0 && newNumber <= 10){
        model.number = newNumber
    }
}



// controller

function controller(){
    document.querySelector('#btnIncrement').addEventListener('click',function(){
        
        setNumber(model.number + 1)
        updateview()
    })

    document.querySelector('#btnIncrement').addEventListener('click',function(){
        setNumber(model.number - 1)
        updateview()
    })

    document.querySelector('#btnIncrement').addEventListener('click',function(){
        let newNumber = document.querySelector('#newNumber').value
      setNumber(newNumber);
        updateview()
    })
}

// view

function updateview(){
    let numberBox = document.querySelector('#number')
    numberBox.innerHTML = model.number;

    if (model.number %2){
        numberBox.getElementsByClassName.backgroundColor = 'green'
    }
    else{
        numberBox.getElementsByClassName.backgroundColor = 'red'
    }
}

controller()
updateview()