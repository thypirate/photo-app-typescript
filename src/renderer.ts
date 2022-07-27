import { Photo } from "./interface";
import { html } from "lit-html";

export const renderPhoto = (photo: Photo) => {
  return html`<li><img src=${photo.urls.small} /></li>`;
};
