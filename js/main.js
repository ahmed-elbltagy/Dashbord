let ticketsSection = document.querySelector(".tickets");
let cards = document.querySelectorAll( ".tickets .box p" );
let started= false;
window.addEventListener( "scroll", function(){
  if ( window.scrollY >= ticketsSection.offsetTop - 170 ){
    if(!started){
      cards.forEach( ( card ) => { 
        let goal = card.dataset.goal;
        let interval = setInterval(function() {
          card.textContent++;
          if (card.textContent == goal) {
            clearInterval(interval);
          }
        }, 2000 / goal);
      } )
      started=true;
    }
  }
} );


