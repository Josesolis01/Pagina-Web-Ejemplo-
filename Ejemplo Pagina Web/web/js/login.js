"use strict";

import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";
import { authAPI } from "/js/api/auth.js";

const loginForm = document.getElementById("login-form");
const errorsDiv = document.getElementById("errors");

function main() {
    loginForm.onsubmit = handleSubmitLogin;
}

function handleSubmitLogin(event) {
    event.preventDefault();
    errorsDiv.innerHTML = "";
    
    let formData = new FormData(loginForm);
    sendLogin(formData);
}

async function sendLogin(formData) {
    try {
        let loginData = await authAPI.login(formData);
        let sessionToken = loginData.sessionToken;
        let loggedUser = loginData.user;
        sessionManager.login(sessionToken, loggedUser);
        window.location.href = "index.html";
    } catch (error) {
        let message = error.response.data.message;
        messageRenderer.showErrorAsAlert( message);
    }
}



document.addEventListener("DOMContentLoaded", main);