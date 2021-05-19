let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit');
let popupCloseButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__edit-form');
let nameInput = formElement.querySelector('.popup__fieldset-name');
let jobInput = formElement.querySelector('.popup__fieldset-description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

popupOpenButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
})

popupCloseButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened')
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 