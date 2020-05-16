// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modalDiv = document.getElementById('modal');
const modalMessagePar = document.getElementById('modal-message')

modalDiv.classList.add('hidden');

document.body.addEventListener('click', (event) => {
  if (event.target.className === 'like-glyph' || event.target.className === 'like-glyph activated-heart'){
    mimicServerCall()
    .then(resp => {
      if (event.target.innerHTML === EMPTY_HEART){
        event.target.innerHTML = FULL_HEART
        event.target.classList.add('activated-heart')
      } else {
        event.target.innerHTML = EMPTY_HEART
        event.target.classList.remove('activated-heart')
      }
    })
    .catch(error => {
      // console.log(error)
      modalMessagePar.innerText = error;
      modalDiv.classList.remove('hidden');

      setTimeout(function(){
        modalDiv.classList.add('hidden');
      }, 5000);      
    });

  }

});
    
//-);-----------------------------------------------------------------------------
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
