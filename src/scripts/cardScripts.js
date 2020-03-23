import elements from "./elements.js";
import cardsArray from "./cardsArray.js";
import { findCurrentCardIndex, updateCurrentCardNumber, saveCurrentIndex } from "./utilities.js";

const { card, cardContainer, questionCard, answerCard }= elements;

export function flipCard() {
    card.classList.toggle('card--flipped')
}
/*Populate current flash card with data based on
given index for cards array
 */
export function populateCard(e, index = 0) {
    if(cardsArray.length) {

        const { question, answer } = cardsArray[index];
        questionCard.textContent = question;
        answerCard.textContent = answer;

    }
}
// Get current index and increment it by one
export function openNextCard() {
    if(cardContainer.classList.contains('hidden')) return;
    card.classList.remove('card--flipped');
    const nextCardIndex = findCurrentCardIndex() + 1;
    if(nextCardIndex > cardsArray.length - 1) return;

    populateCard(null, nextCardIndex);
    updateCurrentCardNumber(findCurrentCardIndex() + 1);
    saveCurrentIndex()
}
// Get current index and subtract from it 1
export function openPrevCard() {
    if(cardContainer.classList.contains('hidden')) return;
    card.classList.remove('card--flipped');   
    const nextCardIndex = findCurrentCardIndex() - 1;
    if(nextCardIndex < 0) return;

    populateCard(null, nextCardIndex);
    updateCurrentCardNumber(findCurrentCardIndex() + 1);
    saveCurrentIndex();
}

