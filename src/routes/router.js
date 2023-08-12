import { renderShows } from "../components/renderShows.js";

export const handleRoute = () => {
  const path = window.location.pathname;

  if (path === "/action") {
    renderShows(true); // Render action movies
  } else if (path === "/comedy") {
    renderShows(false, "Comedy"); // Render comedy shows
  } else if (path === "/crime") {
    renderShows(false, "Crime"); // Render crime shows
  } else {
    renderShows(); // Render all shows (home page)
  }
};

// Listen for the 'popstate' event to handle browser back/forward navigation
window.addEventListener("popstate", handleRoute);
