// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let err = document.getElementById("modal") 
function hideError(){ err.className = "hidden" }
hideError()

document.addEventListener('click', (e) =>{
  if (e.target.innerText === EMPTY_HEART){
    mimicServerCall()
    .then(activateHeart(e))
    .catch(function() {
      alert("error! API DIDN'T WORK")
      err.className = ""
      setTimeout(hideError, 5000);
    })
  } else if (e.target.innerText === FULL_HEART){
    e.target.innerText = EMPTY_HEART
    e.target.className = ""
  }
})

function activateHeart(e){
    e.target.innerText = FULL_HEART
    e.target.className = "activated-heart"
  }

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
    }, 300);
  });
}


