let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit');
let popupCloseButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__edit-form');
let nameInput = formElement.querySelector('.popup__input_fieldset_name');
let jobInput = formElement.querySelector('.popup__input_fieldset_description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

function popupOpened () {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
popupOpenButton.addEventListener('click', popupOpened);

function popupClosed () {
    popup.classList.remove('popup_opened');
    form.formElement(reset);
}
popupCloseButton.addEventListener('click', popupClosed);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupClosed ();
}
formElement.addEventListener('submit', formSubmitHandler); 