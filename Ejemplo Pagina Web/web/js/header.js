"use strict";

import { sessionManager } from "/js/utils/session.js";

// DOM elements that we will use
const userLink = document.getElementById("showUsername");
const logoutButton = document.getElementById("logout-button");
const headerLogin = document.getElementById("header-login");
const headerRegister = document.getElementById("header-register");
const headerLogout = document.getElementById("header-logout");
const headerSeries = document.getElementById("header-series");
const headerEditSerie = document.getElementById("header-edit_serie");

function main() {
    showUser();
    addLogoutHandler();
    hideHeaderOptions();
}

///////////////////////////////////////////////////////////////////////////////

function showUser() {
    // Greet the user in the navbar
    let displayText = "Guest";

    if (sessionManager.isLogged()) {
        let loggedUser = sessionManager.getLoggedUser();
        displayText = "Hi, @" + loggedUser.username;
    }

    userLink.textContent = displayText;
}

function addLogoutHandler() {
    // Assign the "Logout" link to the session logout() function
    logoutButton.onclick = function () {
        sessionManager.logout();
        window.location.href = "index.html";
    };
}

function hideHeaderOptions() {
    // Hide the appropriate options
    if (sessionManager.isLogged()) {
        headerLogin.style.display = "none";
        headerRegister.style.display = "none";
    } else {
        headerLogout.style.display = "none";
        headerSeries.style.display = "none";
        headerEditSerie.style.display = "none";
    }
}

////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", main);