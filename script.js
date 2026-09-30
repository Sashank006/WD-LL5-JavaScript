// Event setup
let eventName = "Tech Summit";
let attendeeName = "Jordan";
let speakerName = "Dr. Lee";
let roomNumber = 204;

let attendee2 = "Sam";
let attendee3 = "Taylor";

let attendeeCount = 0;

// Display information
console.log(eventName);
console.log(attendeeName);
console.log(speakerName);
console.log(roomNumber);

// Personalized messages
console.log("Welcome " + attendeeName + " to " + eventName);
console.log(attendeeName + " will be in Room " + roomNumber);
console.log("Today's speaker is " + speakerName);

// Talking to the user
alert("Welcome to " + eventName + "!");

// LevelUp 1: greeting function
function attendeeGreeting(name) {
  console.log(name + " just checked in!");
}

// LevelUp 4: one function that does the whole check-in
function checkIn(name) {
  attendeeCount = attendeeCount + 1;
  attendeeGreeting(name);
  console.log("Total attendees: " + attendeeCount);
}

// LevelUp 2: multiple attendees
checkIn(attendeeName);
checkIn(attendee2);
checkIn(attendee3);

// LevelUp 3: console mastery
console.table([
  { name: attendeeName, room: roomNumber },
  { name: attendee2, room: roomNumber },
  { name: attendee3, room: roomNumber },
]);

console.warn("Room " + roomNumber + " is nearly full");
console.info("Speaker for today: " + speakerName);
