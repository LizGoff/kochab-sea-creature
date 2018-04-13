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
    addNewCreature();
    }

function displayCount() {
    $('#totalCount').text(clickCount);
    //console.log(clickCount);
    }

    function addNewCreature(){
        $('#addNewCreature').append('<tr>' + '<td>' + $('#newCreaturesName').val() + '</td>' + '<td>' + $('#newCreaturesSize').val() + ' ft</td>' + '<td>' + $('#newCreaturesType').val() + '</td>' + '<td>' + $('#newCreaturesSpeed').val() + ' mph</td>');
        console.log('addNewCreature');
    }
}

//investigate how to clear the fieds in addNewCreatures
//investigate how to not enter blank info into list that is created below in the table
//look back at kochab-jquery-review






//'newCreaturesName'

//function addNewCreature() {
 //   $('#nameInput').val();
 //   console.log("value in for name");
//}

 

  //  let clickCount = $('totalCount').val
 //   console.log(displayCount).text(clickCount);
 //   


// "totalCount"
//    function displayCount(clickCount);
  //  console.log(displaycount).text(clickCount);

  // ------ span lines things up like this
  // div lines things up like this
  // div
  // div

