//Create global variables
let meme = document.querySelector('#meme-image');
let outerMemeContainer = document.querySelector('#meme-container')
  
//MAIN FUNCTION
function submitForm() {
    //Creace variables needed to get input values
    let topText = document.querySelector('#top-text-input').value;
    let bottomText = document.querySelector('#bottom-text-input').value;
    let image = document.querySelector('#url-image').value;

    //Create div for meme
    let innerMemeContainer = document.createElement('div');
    outerMemeContainer.appendChild(innerMemeContainer); // Add div inside meme div
    innerMemeContainer.classList.add('inner-div'); //Add class 

    //Append image to div
    let newImg = document.createElement("img"); //Create img element
    newImg.src = image; //Add src to img alement
    newImg.classList.add('loaded-image') //Add class
    innerMemeContainer.appendChild(newImg); //Add img to div


    //Insert top text
    let topTextDiv = document.createElement('div'); //Create div for top text
    innerMemeContainer.appendChild(topTextDiv); //Add div to meme 
    topTextDiv.classList.add('top-text'); //Add class 
    topTextDiv.innerText = topText; //Add text

    //Insert bottom txxt
    let bottomTextDiv = document.createElement('div');
    innerMemeContainer.appendChild(bottomTextDiv);
    bottomTextDiv.classList.add('bottom-text');
    bottomTextDiv.innerText = bottomText;

    //Create delete button
    let deleteBtn = document.createElement('button'); //Create delete button
    innerMemeContainer.appendChild(deleteBtn); //Add button to meme div
    deleteBtn.innerText = 'Delete'; // Add text to button
    deleteBtn.classList.add('delete-button'); //Add class

    //Create event listener to delete single meme when clicked on
    deleteBtn.addEventListener ( 'click', function () { //Create event listener with function
    innerMemeContainer.parentNode.removeChild(innerMemeContainer); //Remove single div that contains a meme
    });
}

