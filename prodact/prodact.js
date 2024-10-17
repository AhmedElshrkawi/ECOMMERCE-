

//// functhion fillter prodact  on categare/////
document.addEventListener('DOMContentLoaded', function () {

  var filterButtons = document.querySelectorAll('.fillter-buttons button');
  var filterableCards = document.querySelectorAll('.filterable-cards .card');

  filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          var filterValue = this.getAttribute('data-nam'); 

          filterButtons.forEach(function (btn) {
              btn.classList.remove('active');
          });
          this.classList.add('active');

          filterableCards.forEach(function (card) {
              var cardDataNam = card.getAttribute('data-nam');

              if (filterValue === 'all' || filterValue === cardDataNam) {
                  card.style.display = 'block'; 
              } else {
                  card.style.display = 'none'; 
              }
          });
      });
  });
});
fillterButtons.forEach(button => button.addEventListener('click',fillterCards));

/////////////////////////////// buton up to /////////////////////////////////////////////////////// 

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
}
document.getElementById("scrollToTop").onclick = function(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};


//////////////////backToHomeBtn ////////////////// 
document.getElementById("backToHomeBtn").onclick = function() {
  window.location.href = "../home page/index.html"; 
};

