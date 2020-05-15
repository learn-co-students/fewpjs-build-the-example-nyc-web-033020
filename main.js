// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// handle clicks for hearts
document.addEventListener('click', function(event) {
  // only want to trigger when clicked on specific nodes
  if (event.target.classList.contains('like-glyph')) {

    // One of two options: heart has been clicked, heart has not been clicked
    if (event.target.classList.contains('activated-heart')) {
      event.target.classList.remove('activated-heart')
      event.target.textContent = EMPTY_HEART
    } else {
      mimicServerCall().then(function(response) {
        console.log('successful call')
        event.target.classList.add('activated-heart')
        event.target.textContent = FULL_HEART
      }).catch(function(error) {
        console.log('failure call')
        const errorDiv = document.querySelector('#modal')
        errorDiv.classList.remove('hidden')
        const errorP = errorDiv.querySelector('p')
        errorP.textContent = error
        setTimeout(function() {
          errorDiv.classList.add('hidden')
        }, 5000)
      })
    }
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
