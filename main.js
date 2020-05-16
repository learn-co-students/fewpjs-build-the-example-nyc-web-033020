// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const error = document.querySelector('#modal')
error.classList.add('hidden')

document.addEventListener('click', function(e){
   const clickedHeart = e.target.textContent
   const card = e.target.parentElement
   console.log(card)

   if (clickedHeart === EMPTY_HEART){
     card.textContent = `Like! ${FULL_HEART}`
     card.style.color = "red"
     mimicServerCall().catch(() => {}).then(() => {})
   }

})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300)
  });
} 
