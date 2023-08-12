const showCards = (show) => `  <div class="card card-show hover-action">
<img class="h-50" src="${show.image.medium}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title fs-4 fw-bold">${show.name}</h5>
  <div class="genres row row-cols-sm-3 ms-1 gap-1">
    ${show.genres
    .map(
      (genre) => `<span class="bg-primary  rounded px-0 text-light text-center py-1">${genre}</span>`
    )
    .join('')}
  </div>
  </div>
<div class="card-footer d-flex justify-content-around align-items-center">
  <button type="button" class="btn btn-modal btn-danger" data-show-id="${
  show.id
}">Comments</button>
  <div class="d-flex gap-0">

  <span class="numLikes" id="numLikes_${show.id}"></span>
   <button type="button" id="likes" class="btn  btn-light d-flex gap-1 heart-border heartbg " data-show-id="${
  show.id
}">            
  </button>

  </div>
  </div>
</div>
`;

const showModal = (show) => `
<img class="close-modal" src="./assets/images/cancelmodal.svg" alt="">
<div class="row g-2 px-4">
  <div class="col-md-4 py-3">
    <img
      src="${show.image.medium}"
      class="img-fluid rounded"
      alt="..."
    />
  </div>
  <div class="col-md-8">
    <div class="card-body card-details px-4 py-2">
      <h5 class="card-title text-light fs-3">${show.name}</h5>
      <ul class="px-0 py-3 ">
        <li class="list-group-item text-light">💥 Premiered: ${
  show.premiered
}</li>
        <li class="list-genres list-group-item text-light">🎬 Genres:  <div class="genres row row-cols-3 ms-1 gap-1">
        ${show.genres
    .map(
      (genre) => `<span class="bg-danger  rounded  text-light text-center ">${genre}</span>`
    )
    .join('')}
      </div></li>
        <li class="list-group-item text-light">🈯 Language: ${
  show.language
}</li>
        <li class="list-group-item text-light">☀️ Rating: ${
  show.rating.average
}</li>
      </ul>
    </div>
  </div>
 <div class="overflow"><h6 class="text-light ">${show.summary}</h6> </div>
 
 
  <h1>COMMENTS <span class="numComments"  id="numComments_${
  show.id
}"></span></h1>
  <div class="comments" id="comments-container">
  </div>
  
  <form class="input-comment " data-show-id="${
  show.id
}"  my-0 mx-auto" id="user-input-comment">
    <div class="mb-3">
      <input
        type="text"
        class="form-control  "
        id="userName"
        placeholder="Your Name"
      />
    </div>
    <div class="mb-3  ">
      <textarea
        class="form-control "
        id="comments"
        rows="3"
        placeholder="Your Comment"
      ></textarea>
     
    </div>
    <button class=" mb-3 btn btn-primary btn-submit data-show-id="${
  show.id
}"  id="submit">Submit Comment</button>
  </form>
 
</div>

`;

const showComments = (comment) => `

<div class="date text-dark pe-2">📅${comment.creation_date}</div>

<div class="name">
  <h4 class="text-dark pe-3">⚡
  ${comment.username}</h4>
</div>
<div class="comment">
  <p class="text-dark">💭${comment.comment}</p>
</div>
`;

export { showCards, showModal, showComments };
