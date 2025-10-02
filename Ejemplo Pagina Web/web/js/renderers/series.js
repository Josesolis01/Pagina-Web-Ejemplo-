"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const seriesRenderer = {
    asCard: function (series) {
        let html = `<div class="col-md-4">
        <div class="card bg-dark text-light">
        <a href="serie_detail.html?photoId=${series.serieId}">
        <img src="${series.imageUrl}" class="card-img-top">
        </a>
        <div class="card-body">
        <h5 class="card-title text-center">${series.title}</h5>
        <p class="card-text">${series.releaseDate}</p>
        <p class="card-text">${series.platform}</p>
        </p>
        </div>
        </div>
        </div>`;

        let card = parseHTML(html);
        return card;
    },
    asDetails: function (series) {
        let html = `<div class="col-md-4">
        <div class="card bg-dark text-light">
            <a href = "photo_detail.html?photoId=${series.photoId}">
                <img src = "${series.imageUrl}" class="card-img-top">
            </a>
            <div class="card-body">
                <h5 class="card-tittle text-center">${series.title}</h5>
                <p class="card-text">${series.numSeasons}</p>
                <p class="card-text">${series.platform}</p>
                <p class = "text-end">${series.releaseDate}</p>
            </div>
            </div>
        </div>`;
        let photoDetails = parseHTML(html);
        return photoDetails;
    },

};

export { seriesRenderer };