
const selects = document.querySelectorAll('.contacts-forms__select, .popup__form-select');

selects.forEach(el => {
    new Choices(el, {
        shouldSort: true,
        position: 'bottom', 
        searchEnabled: true,
    });
});