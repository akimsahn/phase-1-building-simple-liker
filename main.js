// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const like = document.querySelector('span.like-glyph')
like.addEventListener('click', (e) => {
  mimicServerCall()
  .then(() => {
    console.log(e.target.textContent)
    const heart = e.target
    if (heart.classList.contains('activated-heart')) {
      heart.textContent = EMPTY_HEART
      heart.classList.remove('activated-heart')
    } else {
      heart.textContent = FULL_HEART
      heart.classList.add('activated-heart')
    }
  })
  .catch(err => {
    const errModal = document.querySelector('div#modal')
    errModal.classList.remove('hidden')
    document.querySelector('#modal-message').textContent = err
    setTimeout(() => errModal.classList.add('hidden'),3000)
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
