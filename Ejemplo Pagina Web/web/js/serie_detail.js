"use strict";
import { seriesRenderer } from "/js/renderers/series.js";
import { seriesAPI_auto } from "/js/api/_series.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

// Get the ID of the photo to load from the URL params
let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
async function main() {
    // Check that we have an ID before doing anything else
    if (photoId === null) {
        messageRenderer.showErrorAsAlert("Please, provide a photoId");
        return;
    }
    loadPhotoDetails();

    let deleteBtn = document.querySelector("#button-delete");
    deleteBtn.onclick = handleDelete;

    let editBtn = document.querySelector("#button-edit");
    editBtn.onclick = handleEdit;

    hideActionsColumn();
}

function hideActionsColumn() {
    let actions_col = document.getElementById("actions-col");
    if (!sessionManager.isLogged()) {
        actions_col.style.display = "none";
    }
}

function handleEdit(event) {
    window.location.href = "edit_serie.html?photoId=" + photoId;
}

async function handleDelete(event) {
    let answer = confirm("Do you really want to delete this serie?");
    if (answer) {
        try {
            await seriesAPI_auto.delete(photoId);
            window.location = "/series.html";
        } catch (err) {
            messageRenderer.showErrorAsAlert(err.response.data.message);
        }
    }
}

async function loadPhotoDetails() {
    let photoContainer = document.querySelector("#photo-details-column");
    try {
        let serie = await seriesAPI_auto.getById(photoId)
        let serieDetails = seriesRenderer.asDetails(serie);
        photoContainer.appendChild(serieDetails);
    } catch (err) {
        messageRenderer.showErrorAsAlert("Error loading photo", err);
    }
}

document.addEventListener("DOMContentLoaded", main);