"use strict";


import {seriesAPI_auto} from "/js/api/_series.js";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { messageRenderer } from "/js/renderers/messages.js";

async function main() {
    loadAllSeries();
}
async function loadAllSeries() {
    let galleryContainer = document.querySelector("div.container");
    try {
        let series = await seriesAPI_auto.getAll();
        let cardGallery = galleryRenderer.asCardGallery(series);
        galleryContainer.appendChild(cardGallery);
    } catch (err) {
        messageRenderer.showErrorAsAlert("Error while loading series", err);
    }
}
document.addEventListener("DOMContentLoaded", main);