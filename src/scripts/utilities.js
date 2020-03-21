import elements from "./elements.js";
import cardsArray from "./questionsArray.js";

const { modalOuter,
        allCardsNumber, currentCardNumber,
        cardContainer, questionCard,
      } = elements;


export function toggleModal() {
    modalOuter.classList.toggle('hidden')
}

//If cards array is not empty, show flash card view
export function openCardsView() {
    if(cardsArray.length) {
        cardContainer.classList.remove('hidden');
    }
}

//Update all cards number (span) under flash card view
export function updatedAllCardsNumber() {
    allCardsNumber.textContent = cardsArray.length;
}

//Update current card number (span) under flash card view.
export function updateCurrentCardNumber(index) {
    currentCardNumber.textContent = index;
}


export function findCurrentCardIndex() {
    if(cardsArray.length <= 0) return;
    const currentCardQuestion = questionCard.textContent;
    const currentCardIndex = cardsArray.indexOf(cardsArray.find( ({question, answer}) => {
        return question === currentCardQuestion;
    }));
    return currentCardIndex;
}

//This function saves to local storage current index of user card
export function saveCurrentIndex() {
    localStorage.setItem('currentIndex', JSON.stringify(findCurrentCardIndex()));
}