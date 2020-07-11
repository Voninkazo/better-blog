console.log('it works');
const myPost = () => {
const divCard = document.createElement('div');
divCard.classList.add('card');

const myImg = document.createElement('img');
const sourceImg = document.getElementById('post-url').value;
myImg.setAttribute('src', `${sourceImg}`);
myImg.classList.add('card-img-top');
myImg.alt = 'Card image cap';
myImg.textContent = `${sourceImg.value}`;
divCard.appendChild(myImg);

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
divCard.appendChild(cardBody);

const cardTitle = document.createElement('h5');
cardTitle.classList.add('card-title');
cardTitle.textContent = `${cardTitle.value}`;
cardBody.appendChild(cardTitle);

const cardText = document.createElement('p');
cardText.classList.add('card-text');
cardText.textContent = `${cardText.value}`;
cardBody.appendChild(cardText);
return divCard;
} 

const submitButton = document.getElementById('submit-button');
const newPostList = document.getElementById('post-list');
submitButton.addEventListener('click', ($event) => {
  const realPost = myPost();
  newPostList.appendChild(realPost);//Here we append the new post inside of the div
  $event.preventDefault();
  // And we will try to reset the form so that we can write new inputs
  document.querySelector('form-group').reset();
});

const deleteButton = document.createElement('button');
deleteButton.type = `button`;
deleteButton.classList.add('btn', 'btn-sm', 'btn-light', 'btn-delete');
deleteButton.textContent = 'delte entry';
const parent = document.getElementsByClassName('card-body');
parent.appendChild(deleteButton);

// make out delete function ($event)
const deleteFunction = ($event) => {
	$event.currentTarget.parentElement.remove();
};
// way to delete the card : $event.currentTarget.parentElement.remove();
// loop over them and attach a listener
deleteButton.forEach((button) => {
	button.addEventListener('click', deleteFunction);
});