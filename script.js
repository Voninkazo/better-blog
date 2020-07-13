console.log('it works');
  const newPostList = document.getElementById('post-list');
  const divCard = document.querySelector('.card');
  const cardBody = document.getElementsByClassName('card-body');
  const cardTitle = document.getElementById('postTitle');
  const cardText = document.getElementById('post-content');
  const cardAuthor = document.querySelector(`[name = "postAuthor"]`);
  const deleteButton = document.getElementById('delete-button');
  const submitButton = document.getElementById('submit-button');
  const buttonHidden = document.getElementById('show-form');

  const myPost = () => {
    const myHtml =`
    <div class="card">
					<img
						class="card-img-top"
						src="https://picsum.photos/500/200"
						alt="Card image cap"
					/>
					<div class="card-body">
						<h5 class="card-title">${cardTitle.value} <small> by ${cardAuthor.value}</small></h5>
						<p class="card-text">
							${cardText.value}
						</p>
						<button type="button" id="delete-button" class="btn btn-sm btn-light btn-delete">
							Delete entry
						</button>
          </div>
    `
    return myHtml;
  }
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    divCard.insertAdjacentHTML("beforebegin", myPost());
});