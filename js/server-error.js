// MOUSE EVENTS(CLICK)
// Create the HTML of the message
var msg1 = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg1 += '<div><h2>System Maintenance</h2>';
msg1 += 'Our servers are being updated between 3 and 4 a.m. ';
msg1 += 'During this time,there may be minor disruptions to service.</div>';

var elNote = document.getElementById('server-error'); // Create a new element
elNote.setAttribute('id', 'note'); // Add an id of note
elNote.innerHTML = msg1; // Add the messAGE
document.body.appendChild(elNote); // Add it to the page

function dismissNote() { // Declare function
    document.body.removeChild(elNote); // Remove the note
}

var elClose = document.getElementById('close'); // Get the close button
elClose.addEventListener('click', dismissNote, false); // Click close-clear note