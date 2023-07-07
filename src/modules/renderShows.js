import { getShows } from "./getShows";

export const renderShows = async () => {
  try {
    const shows = await getShows();
    const container = document.getElementById("shows-container");
    const pagination = document.querySelector(".pagination");

    const cardsPerPage = 4;
    let currentPage = 1;
    let startIndex = (currentPage - 1) * cardsPerPage;
    let endIndex = startIndex + cardsPerPage;

    const updatePagination = () => {
      pagination.innerHTML = "";
      const totalPages = Math.ceil(shows.length / cardsPerPage);
      const maxDisplayPages = 5; // Maximum number of pagination links to display

      const createPaginationItem = (content, isActive = false) => {
        const pageItem = document.createElement("li");
        pageItem.classList.add("page-item");
        if (isActive) {
          pageItem.classList.add("active");
        }
        const pageLink = document.createElement("a");
        pageLink.classList.add("page-link");
        pageLink.href = "#";
        pageLink.innerText = content;
        pageItem.appendChild(pageLink);
        return pageItem;
      };

      if (currentPage > 1) {
        const previousPageItem = createPaginationItem("Previous");
        pagination.appendChild(previousPageItem);
      }

      let startPage, endPage;
      if (totalPages <= maxDisplayPages) {
        startPage = 1;
        endPage = totalPages;
      } else {
        if (currentPage <= 2) {
          startPage = 1;
          endPage = maxDisplayPages;
        } else if (currentPage >= totalPages - 1) {
          startPage = totalPages - maxDisplayPages + 1;
          endPage = totalPages;
        } else {
          startPage = currentPage - 2;
          endPage = currentPage + 2;
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        const pageItem = createPaginationItem(i, i === currentPage);
        pagination.appendChild(pageItem);
      }

      if (currentPage < totalPages) {
        const nextPageItem = createPaginationItem("Next");
        pagination.appendChild(nextPageItem);
      }
    };

    const renderCards = () => {
      container.innerHTML = "";

      const currentShows = shows.slice(startIndex, endIndex);

      currentShows.forEach((show) => {
        const card = document.createElement("div");
        card.classList.add("col");
        card.innerHTML = `
          <div class="card h-100 hover-action">
            <img src="${show.image.medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title fs-3 fw-bold">${show.name}</h5>
              <div class="genres row row-cols-sm-3 ms-1 gap-1">
                ${show.genres
                  .map(
                    (genre) =>
                      `<span class="bg-primary rounded px-1 text-light text-center py-1">${genre}</span>`
                  )
                  .join("")}
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex flex-direction-row justify-content-between">
                <button type="button" class="btn btn-danger">Comments</button>
                <div>
                  <button class="btn btn-light d-flex gap-1 heart-border">
                    <span class="numLikes">45</span>
                    <img class="heart" src="assets/images/heartnobg.png" alt="">
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;

        container.appendChild(card);
      });

      updatePagination();
    };

    const handlePageClick = (event) => {
      event.preventDefault();
      const targetPage = event.target.innerText;

      if (targetPage === "Previous" && currentPage > 1) {
        currentPage--;
      } else if (targetPage === "Next" && endIndex < shows.length) {
        currentPage++;
      } else if (!isNaN(parseInt(targetPage))) {
        currentPage = parseInt(targetPage);
      }

      startIndex = (currentPage - 1) * cardsPerPage;
      endIndex = startIndex + cardsPerPage;

      renderCards();
    };

    pagination.addEventListener("click", handlePageClick);

    renderCards();
  } catch (error) {
    console.error("Error occurred while rendering shows:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderShows();
});
