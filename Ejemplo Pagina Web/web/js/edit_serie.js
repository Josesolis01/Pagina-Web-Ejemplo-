"use strict";

import { seriesAPI_auto } from "/js/api/_series.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
let currentPhoto = null;

async function main() {

    if (photoId !== null) {
        loadCurrentPhoto();
    }

    let registerForm = document.getElementById("form-photo-upload");
    registerForm.onsubmit = handleSubmitPhoto;
}

async function loadCurrentPhoto() {
    let pageTitle = document.getElementById("input-title");
    let imageUrlInput = document.getElementById("input-imageUrl");
    let titleInput = document.getElementById("input-title");
    let platformInput = document.getElementById("input-platform");
    let releaseDateInput = document.getElementById("input-releaseDate");
    let numSeasonsDateInput = document.getElementById("input-numSeasons");
    pageTitle.textContent = "Editing a photo";
    try {
        currentPhoto = await photosAPI_auto.getById(photoId);
        imageUrlInput.value = currentPhoto.imageUrl;
        titleInput.value = currentPhoto.title;
        platformInput.value = currentPhoto.platform;
        releaseDateInput.value = currentPhoto.releaseDate;
        numSeasonsDateInput.value = currentPhoto.numSeasons;
    } catch (err) {
        messageRenderer.showErrorAsAlert(err.response.data.message);
    }
}


async function handleSubmitPhoto(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    if (currentPhoto === null) { // Creating a new photo
        // Add the current user ID
        formData.append("userId", sessionManager.getLoggedId());
        try {
            let resp = await seriesAPI_auto.create(formData);
            let newId = resp.lastId;
            window.location.href = `serie_detail.html?photoId=${newId}`;
        } catch (err) {
            messageRenderer.showErrorAsAlert(err.response.data.message);
        }
    } else { // Updating an existing photo
        formData.append("userId", currentPhoto.userId);
        formData.append("date", currentPhoto.date);
        try {
            await photosAPI_auto.update(formData, photoId);
            window.location.href = `serie_detail.html?photoId=${photoId}`;
        } catch (err) {
            messageRenderer.showErrorAsAlert(err.response.data.message);
        }
    }
}

document.addEventListener("DOMContentLoaded", main);