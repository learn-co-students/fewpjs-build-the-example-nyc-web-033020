// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal');
errorModal.className = 'hidden'

document.addEventListener("DOMContentLoaded", () => {
	errorModal.className = 'hidden'
})

document.addEventListener("click", e => {
	mimicServerCall()
	.then( res => handleSuccess(e) )
	.catch( err => handleError(err) )
})

// Handle Error
const handleError = err => {
	document.getElementById('modal-message').innerHTML = err;
	errorModal.className = 'show';
	setTimeout(() => {
		errorModal.className = 'hidden';
	}, 5000 )
}

// Handle Success
const handleSuccess = event => {
	if (event.target.innerHTML === FULL_HEART)
	{
		event.target.innerHTML = EMPTY_HEART;
		event.target.className = 'empty-heart';
	} else {
		event.target.innerHTML = FULL_HEART
		event.target.className = 'activated-heart';
	}
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
