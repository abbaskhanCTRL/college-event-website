// Simulated registration dataset (100 tuples)
let registrations = [];

for (let i = 1; i <= 100; i++) {
  registrations.push({
    studentId: "STU" + i,
    event: i % 2 === 0 ? "National Hackathon 2026" : "AI & ML Workshop",
    time: new Date().toLocaleString()
  });
}

function registerEvent(eventName) {
  alert("Registration successful for " + eventName);
}

function submitFeedback(e) {
  e.preventDefault();
  alert("Thank you for your valuable feedback!");
}
