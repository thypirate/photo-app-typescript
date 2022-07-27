import "./style.css";
import { PhotoSearchAPIResult } from "./interface";
import { render, html, nothing } from "lit-html";
import { renderPhoto } from "./renderer";
import { fetchImagesFromAPI } from "./unsplash";

fetchImagesFromAPI("dogs", 5).then((data) => {
  renderApp(null);
});

const onFormSubmit = async (event: SubmitEvent) => {
  event.preventDefault();
  if (!event.target) {
    return;
  }
  const formData = new FormData(event.target as HTMLFormElement);
  const query = formData.get("search-query");
  if (query && typeof query === "string") {
    const results = await fetchImagesFromAPI(query, 4);
    renderApp(results);
  }
};

const renderApp = (data: PhotoSearchAPIResult | null): void => {
  const div = document.getElementById("app");
  if (!div) {
    throw new Error("could not find app div");
  }
  const htmlToRender = html`
    <h1>Yet another photo app</h1>
    <form id="search" @submit=${onFormSubmit}>
      <input type="text" name="search-query" placeholder="try typing cats" />
      <input type="submit" value="Search" />
    </form>
    <ul>
      ${data
        ? data.results.map((photo) => {
            return renderPhoto(photo);
          })
        : nothing}
    </ul>
  `;
  render(htmlToRender, div);
};
