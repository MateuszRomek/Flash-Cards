import elements from "./elements.js";
import cardsArray from "./cardsArray.js";
import {
    toggleModal, openCardsView, updatedAllCardsNumber,
    findCurrentCardIndex,updateCurrentCardNumber,
    clearLocalStorage,
       } from "./utilities.js";

import { flipCard, openNextCard, openPrevCard, populateCard } from "./cardScripts.js";


const {
    flipButton, prevButton, nextButton,
    form, questionInput, answerInput,
    addNewCardButton, closeModalButton, modalOuter,
    clearLocalStorageButton,
} = elements;

/* This function render flash card on page load
 based on localstorage current item index */
function openCurrentIndex() {
    const currentIndex = JSON.parse(localStorage.getItem('currentIndex'));
    if(currentIndex === null) return;
    populateCard(null, currentIndex);
    updateCurrentCardNumber(findCurrentCardIndex() + 1);
}

//This function saves cards array to local storage
function saveCardsData(array) {
    localStorage.setItem('cardsArray', JSON.stringify(array));
}

/*This function save user input (question and answer)
 in card array and also saves this array to local storage.
 */
function pushData(event) {
  event.preventDefault();
  const question = questionInput.value;
  const answer = answerInput.value;
  const userCard = {
   question,
   answer
  };

  modalOuter.classList.add('hidden');
  cardsArray.push(userCard);

  form.reset();
  saveCardsData(cardsArray);
}




// Event Listeners
form.addEventListener('submit', pushData);
form.addEventListener('submit', openCardsView);
form.addEventListener('submit', updatedAllCardsNumber);
form.addEventListener('submit', populateCard);

nextButton.addEventListener('click', openNextCard);
prevButton.addEventListener('click', openPrevCard);

window.addEventListener('load', openCardsView);
window.addEventListener('load', updatedAllCardsNumber);
window.addEventListener('load', openCurrentIndex);


clearLocalStorageButton.addEventListener('click', clearLocalStorage )
closeModalButton.addEventListener('click', toggleModal);
addNewCardButton.addEventListener('click', toggleModal);
flipButton.addEventListener('click', flipCard);


//Key Events
window.addEventListener('keyup', function (e) {
    switch(e.key) {
        case 'Escape':
            modalOuter.classList.add('hidden');
            break;
        case 'ArrowRight':
            openNextCard();
            break;
        case 'ArrowLeft':
            openPrevCard();
            break;
        case 'f':
            if(cardsArray.length > 0){
                flipButton.click();
            } else {
                break;
            }
            break;
    }
});