
document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#whisky-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteListButton = document.querySelector('#delete-list');
    deleteListButton.addEventListener('click', handleDeleteListClick);
  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const whiskyListItem = createWhiskyListItem(event.target);
    const whiskyList = document.querySelector('#whisky-list');
    whiskyList.appendChild(whiskyListItem);
  
    event.target.reset();
  }
  
  const createWhiskyListItem = function (form) {
    const whiskyListItem = document.createElement('li');
    whiskyListItem.classList.add('whisky-list-item');
  
    const brand = document.createElement('h2');
    brand.textContent = form.brand.value;
    whiskyListItem.appendChild(brand);
  
    const description = document.createElement('h3');
    description.textContent = form.description.value;
    whiskyListItem.appendChild(description);
  
    const region = document.createElement('p');
    region.textContent = form.region.value;
    whiskyListItem.appendChild(region);
  
    return whiskyListItem;
  }
  
  const handleDeleteListClick = function (event) {
    const whiskyList = document.querySelector('#whisky-list');
    whiskyList.innerHTML = '';
  }

//   Notes:
//   By using addEventListener, when the document's DOMContentLoaded event fires, we can be guaranteed to have access to the DOM elements. At this point, the DOM is ready to be manipulated.

// We can use document.querySelector to target any single element by querying its ID, class or the tag name unsing the CSS selector syntax:

// An ID selector is prefixed with a # - querySelector('#my-id')
// A class selector is prefixed with a . - querySelector('.my-class')
// A tag selector has no prefix - querySelector('p')