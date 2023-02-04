// De-creepify some web apps.
// Copyright (C) 2023 Charles Cazabon <charlesc-webext-decreepifier@pyropus.ca>.
// Licensed under the GNU GPL version 2 (only).  See file LICENSE for details.
"use strict";

function kill_event(event) {
    // overkill 9000
	event.stopImmediatePropagation();
	event.stopPropagation();
    event.preventDefault();
}

function blocker(eventname) {
    window.addEventListener(eventname, (event) => {
        console.debug("decreepifier: blocking", eventname, "event");
        kill_event(event);
    }, {capture: true});
}

blocker('visibilitychange');
blocker('blur');
blocker('focus');

// Set up decoy properties and functions
Object.defineProperty(document, 'hidden', {value: false, writable: false});
Object.defineProperty(document, 'visibilityState', {value: 'visible', writable: false});
Object.defineProperty(document, 'webkitVisibilityState', {value: 'visible', writable: false});
window.hasFocus = function () { return true; };
window.dispatchEvent(new Event('focus'));
window.dispatchEvent(new Event('visibilitychange'));
