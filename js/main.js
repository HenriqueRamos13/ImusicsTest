
const comments = document.querySelector('.comments');
const closeBtn = document.getElementById('close-coments');
const openBtns = [...document.querySelectorAll('.card-comments')];
const scrollItem = document.querySelector('.custom-scroll');


function closeComents() {
  console.log(1312)
  comments.style.display = 'none'
}

function openComments() {
  comments.style.display = 'block'
  scrollItem.scrollTo(0, 999)

}

closeBtn.addEventListener('click', closeComents)
openBtns.forEach(element => {
  element.addEventListener('click', openComments)
})
