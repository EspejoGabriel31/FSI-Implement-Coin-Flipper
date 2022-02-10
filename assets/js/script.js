// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    let heads = 0
    let tails = 0
    

    const pennyButton = document.querySelector('#flip')
    const clearButton = document.querySelector('#clear')

    pennyButton.addEventListener('click',function(){
        let headsFlip = Math.random() < 0.5
        if(headsFlip){
            console.log('Heads!')
            //let headsImg = document.querySelector('#penny-image')
           // headsImg.src = './assets/images/penny-heads.jpg'
            document.getElementById('penny-image').src = './assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            heads++
        }
        else{
            console.log('Tails!')   
           // let tailssImg = document.querySelector('#penny-image')
            //tailsImg.src = './assets/images/penny-tails.jpg'
            document.getElementById('penny-image').src = './assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'
            tails++
        }
        let total = heads + tails
        document.getElementById('heads').textContent = heads
        document.getElementById('tails').textContent = tails
        percentHeads = Math.round((heads / total) * 100)
        percentTails = Math.round((tails / total) * 100)

        document.getElementById('heads-percent').textContent = `${percentHeads}%`
        document.getElementById('tails-percent').textContent = `${percentTails}%`
    })

    clearButton.addEventListener('click',function(){
        heads = 0
        tails = 0
        document.getElementById('penny-image').src = './assets/images/penny-heads.jpg'
        document.getElementById('message').textContent = 'Let\'s Get Rolling!'
        document.getElementById('heads').textContent = heads
        document.getElementById('tails').textContent = tails
        document.getElementById('heads-percent').textContent = `${0}%`
        document.getElementById('tails-percent').textContent = `${0}%`
    })
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})