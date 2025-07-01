// ==UserScript==
// @name         Alphabetize obs-raw Dropdowns
// @namespace    https://whazzittoya.github.io/
// @version      2025-06-30
// @description  Sorts dropdowns on the obs-raw website
// @author       You
// @match        https://obs-raw.streamer.bot/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=streamer.bot
// @grant        none
// @updateURL    https://whazzittoya.github.io/StreamerBot/OBSRaw-Sort.user.js
// @downloadURL  https://whazzittoya.github.io/StreamerBot/OBSRaw-Sort.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Function to sort child divs based on the text content of v-list-item-title elements
    function sortVMenuItems(vMenu) {
        const items = Array.from(vMenu.children);

        items.sort((a, b) => {
            const aText = a.querySelector(".v-list-item-title")?.textContent.trim() ?? "";
            const bText = b.querySelector(".v-list-item-title")?.textContent.trim() ?? "";
            return aText.localeCompare(bText);
        });

        items.forEach(item => vMenu.appendChild(item)); // Reorder elements in the DOM
    }

    // Create a MutationObserver to watch for added nodes
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.classList.contains("v-menu")) {
                    const list = node.querySelector(".v-list");
                    if (list !== null) {
                        console.log(`Sorting ${list} with ${list.childElementCount} children`);
                        sortVMenuItems(list);
                    }
                }
            });
        });
    });

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
})();
