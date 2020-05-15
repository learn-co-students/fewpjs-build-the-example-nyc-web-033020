// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal-message")
// const artical = document.getElementById("201811189")

document.body.addEventListener("click", e => {
  if (e.target.className == "like-glyph") {
    mimicServerCall()
      .then(res => {
        console.log('then')
        e.target.className += " activated-heart"
        e.target.innerHTML = FULL_HEART
      })
      .catch(err => {
        console.log('catch')
        errorModal.parentElement.className = ""
        errorModal.innerHTML = err
        setTimeout(() => {
          errorModal.parentElement.className = "hidden"
        }, 5000)
      })
  } else if (e.target.className == "like-glyph activated-heart") {
    e.target.className = 'like-glyph'
    e.target.innerHTML = EMPTY_HEART
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
    }, 300);
  });
}
