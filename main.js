// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph")
const errorFlag = document.querySelector("#modal")

document.addEventListener("DOMContentLoaded", ()=>{
  addHeartClicks();
})

 let addHeartClicks = () =>{
  hearts.forEach( heart => {
    heart.addEventListener('click', function(e){
      console.log("click!")

      mimicServerCall("bogusUrl").then((serverMessage)=>{
        if (e.target.textContent === EMPTY_HEART){
          e.target.textContent = FULL_HEART
          e.target.className = "activated-heart"
        } else if(e.target.textContent === FULL_HEART){
          e.target.textContent = EMPTY_HEART
          e.target.className = ""
        }
      })
      .catch((error)=>{
        console.log(error)
        errorFlag.textContent = error
        errorFlag.className = ""
        window.setTimeout(function(){errorFlag.className="hidden"}, 2000)
      })  
      
      
    })
  })
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
