import { getShowsDetails } from "../api/getShowsDetails.js";
import { showModal, showComments } from "../utils/templates.js";
import { postComments } from "../api/postcomments.js";
import { getComments } from "../api/getComments.js";

// Function to count the comments and update the span
const countComments = (container, commentsData) => {
  const numCommentsSpan = container.querySelector(".numComments");
  if (numCommentsSpan) {
    numCommentsSpan.textContent = `(${commentsData.length})`;
  }
};

export const showModals = async () => {
  try {
    const container = document.getElementById("shows-container");
    const modalContainer = document.getElementById("modal-container");
    const overlay = document.querySelector(".overlay");

    container.addEventListener("click", async (event) => {
      event.preventDefault();
      const button = event.target;
      if (button.classList.contains("btn-modal")) {
        const { showId } = button.dataset; // Get the show id
        const shows = await getShowsDetails(showId);
        const commentsData = await getComments(showId);

        overlay.classList.add("active");

        modalContainer.innerHTML = "";

        Array.from(shows).forEach((show) => {
          const popup = document.createElement("div");
          popup.classList.add("card", "card-modal", "mb-3", "my-5", "mx-auto");
          popup.dataset.showId = show.id;
          popup.style.maxWidth = "540px";
          popup.innerHTML = showModal(show);

          // Add event listener to close button
          const closeButton = popup.querySelector(".close-modal");
          closeButton.addEventListener("click", () => {
            modalContainer.removeChild(popup);
            overlay.classList.remove("active");
          });

          modalContainer.appendChild(popup);

          // Get the updated comments for the current showId
          const getCommentsContainer = popup.querySelector(
            "#comments-container"
          );

          if (commentsData && commentsData.length > 0) {
            commentsData.forEach((comment) => {
              const innerComment = document.createElement("div");
              innerComment.classList.add(
                "item",
                "d-flex",
                "justify-content-between",
                "align-items-center",
                "my-2",
                "px-2",
                "mx-auto"
              );

              innerComment.innerHTML += showComments(comment);

              getCommentsContainer.appendChild(innerComment);
            });

            // Call the countComments function to update the comment count
            countComments(popup, commentsData);
          } else {
            const commentsMessage = document.createElement("p");
            commentsMessage.classList.add(
              "comments-message",
              "text-center",
              "text-light",
              "w-100"
            );
            commentsMessage.textContent =
              "No comments yet, Be the first to add a comment!";
            getCommentsContainer.appendChild(commentsMessage);
          }

          const userInputComment =
            document.getElementById("user-input-comment");

          userInputComment.addEventListener("submit", async (event) => {
            event.preventDefault();
            const userName = document.getElementById("userName").value;
            const comment = document.getElementById("comments").value;

            if (showId) {
              try {
                await postComments(showId, userName, comment);

                const innerComment = document.createElement("div");
                innerComment.classList.add(
                  "item",
                  "d-flex",
                  "justify-content-between",
                  "align-items-center",
                  "my-2",
                  "px-2",
                  "mx-auto",
                  "w-75"
                );
                const date = new Date();
                const formatDate = date.toLocaleDateString();
                innerComment.innerHTML = `
                <div class='date text-dark pe-2'>📅${formatDate}</div>
                <div class='name'>
                  <h4 class='text-dark pe-3'>⚡ ${userName}</h4>
                </div>
                <div class='comment'>
                  <p class='text-dark'>💭${comment}</p>
                </div>`;

                getCommentsContainer.appendChild(innerComment);

                document.getElementById("userName").value = "";
                document.getElementById("comments").value = "";
                const createdMessage =
                  document.querySelector(".comments-message");

                if (createdMessage) {
                  createdMessage.remove();
                }

                // Increment the comment count after adding a new comment
                commentsData.push(comment);
                countComments(popup, commentsData);
              } catch (error) {
                console.log(error);
              }
            } else {
              console.log("Comments not created");
            }
          });
        });
      }
    });
  } catch (error) {
    console.log("Error occurred in showModals", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  showModals();
});
