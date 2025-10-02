"use strict";

import { usersAPI_auto  } from "/js/api/_users.js";
import { usersRenderer } from "/js/renderers/users.js";

// DOM elements that we will use
const usersDiv = document.getElementById("userCards");

// Main function that will run when the page is ready
async function main() {
    let users = await usersAPI_auto .getAll();
    let userCards = usersRenderer.asCardGallery(users);
    usersDiv.append(userCards);
}

document.addEventListener("DOMContentLoaded", main);