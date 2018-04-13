//console.log('JS is up!');

let clickCount = 0;


$(document).ready(onReady);
//console.log('Sea Creatures');

function onReady() {
    console.log('Sea Life');
    $('#button').on("click", clickHandler);
    displayCount();

//how to test the button --- $('#button').on("click", function(); 
//                             console.log('was clicked');

//let addOne = $()/


function clickHandler() {
    console.log('was clicked');
    clickCount++;
    console.log(clickCount);
    displayCount();
    }

function displayCount() {

    $('#totalCount').text(clickCount);
    console.log(clickCount);

}



  //  let clickCount = $('toatlCount').val
 //   console.log(displayCount).text(clickCount);
 //   


// "totalCount"
//    function displayCount(clickCount);
  //  console.log(displaycount).text(clickCount);

  // ------ span lines things up like this
  // div lines things up like this
  // div
  // div

}