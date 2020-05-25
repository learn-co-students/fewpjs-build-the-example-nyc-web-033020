// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
const errorModal = document.querySelector('#modal')
errorModal.className = "hidden"

document.addEventListener('click', function(e){
  if (e.target.className === "like-glyph") {
    mimicServerCall()
    .then(error => {
      alert("Something happened!")
      document.getElementById("modal").className = " "
    })
    e.target.parentNode.children[0].textContent = FULL_HEART
    e.target.parentNode.children[0].className = 'activated-heart'
  } else if (e.target.className === "activated-heart" ) {
    e.target.parentNode.children[0].textContent = EMPTY_HEART
    e.target.parentNode.children[0].className = 'like-glyph'
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
