const incrementBtn= document.getElementById('increment')
const decrementBtn= document.getElementById('decrement')
const saveBtn= document.getElementById('save')
const outputEl=document.getElementById('output')
const clearBtn= document.getElementById('clear')



clearBtn.addEventListener('click', function(){

clear()


})

const saveEntry= document.getElementById('save-entries')

let count=0

incrementBtn.addEventListener("click", function(){

    count= count + 1
    outputEl.textContent = count

   
})



decrementBtn.addEventListener("click", function(){
 decrement()
})



saveBtn.addEventListener('click', function(){
    let saveMe= count + " - "
    saveEntry.textContent += saveMe

    outputEl.textContent= 0
    count= 0

    console.log(count)
})

function decrement(){
    if(count < 0){
        console.log("need to input")
     }else if(count>0){
        count=count-1
    
        outputEl.textContent= count
     }
    }
        

    function clear(){
        count=0
        saveEntry.textContent= 'Previous Entries:'
    }


