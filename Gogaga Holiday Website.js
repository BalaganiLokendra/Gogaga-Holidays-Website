document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    // Here you can add your login logic
    console.log("Logging in with username:", username, "and password:", password);
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    // Here you can add your signup logic
    console.log("Signing up with username:", username, "and password:", password);
});

document.getElementById('numTickets').addEventListener('change', function() {
    var numTickets = parseInt(this.value);
    var passengerDetailsDiv = document.getElementById('passengerDetails');
    passengerDetailsDiv.innerHTML = ''; // Clear previous inputs

    for (var i = 1; i <= numTickets; i++) {
        var passengerDiv = document.createElement('div');
        passengerDiv.innerHTML = `
          <label for="fullName${i}">Full Name of Passenger ${i}</label>
          <input type="text" id="fullName${i}" placeholder="Full Name" required><br>
          <label for="age${i}">Age of Passenger ${i}</label>
          <input type="number" id="age${i}" min="1" max="100" required><br>
        `;
        passengerDetailsDiv.appendChild(passengerDiv);
    }
});