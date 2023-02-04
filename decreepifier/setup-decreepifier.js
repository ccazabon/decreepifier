// De-creepify some web apps.
// Copyright (C) 2023 Charles Cazabon <charlesc-webext-decreepifier@pyropus.ca>.
// Licensed under the GNU GPL version 2 (only).  See file LICENSE for details.
"use strict";

const decreepifier = {
    id: "decreepifier",
    world: 'MAIN',
    allFrames : true,
    js: ["decreepify.js"],
    matches: ["<all_urls>"],
    persistAcrossSessions: true,
    runAt: "document_start"
}

chrome.runtime.onInstalled.addListener(async () => {
    await chrome.scripting.unregisterContentScripts().catch(() => {});
    await chrome.scripting.registerContentScripts([decreepifier])
        .then((result) => {
            console.debug("injector success: injected", decreepifier, "result:", result);
            return result;
        })
        .catch((e) => {
            console.error("inject error", e);
        });
});
