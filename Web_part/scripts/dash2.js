// dashboard.js

// Check if the user is logged in
if (sessionStorage.getItem("loggedIn") !== "true") {
    // Redirect to login page if not logged in
    window.location.href = "../public/login.html";
}

let map;
let deviceMarker;
let deviceStatus = "Disconnected";
let locationUpdateInterval;

// Initialize the Google Map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 3,
    });

    // Add the device marker initially at a default location
    deviceMarker = new google.maps.Marker({
        position: { lat: 0, lng: 0 },
        map: map,
        title: "Device",
    });
}

// Start/Stop tracking the device
document.getElementById("trackButton").addEventListener("click", function() {
    if (deviceStatus === "Disconnected") {
        startTracking();
    } else {
        stopTracking();
    }
});

function startTracking() {
    deviceStatus = "Connected";
    document.getElementById("deviceStatus").textContent = "Device Status: Connected";
    document.getElementById("trackButton").textContent = "Stop Tracking";

    // Simulate real-time device location update (for demo purposes)
    simulateLocationUpdate();
}

function stopTracking() {
    deviceStatus = "Disconnected";
    document.getElementById("deviceStatus").textContent = "Device Status: Disconnected";
    document.getElementById("trackButton").textContent = "Start Tracking";

    // Stop updating location (for demo purposes)
    clearInterval(locationUpdateInterval);
}

// Simulate real-time location update
function simulateLocationUpdate() {
    locationUpdateInterval = setInterval(() => {
        const lat = 37.7749 + (Math.random() - 0.5) * 0.01; // San Francisco base lat
        const lng = -122.4194 + (Math.random() - 0.5) * 0.01; // San Francisco base lng

        // Update the device marker position on the map
        const newPosition = { lat: lat, lng: lng };
        deviceMarker.setPosition(newPosition);
        map.setCenter(newPosition);
    }, 2000); // Update every 2 seconds
}

// Live Location Button Event
document.getElementById("liveLocationButton").addEventListener("click", function() {
    console.log("Live location tracking started...");
    // Add real device tracking logic here
});

// Retrieve 30 Days Data (Simulated)
document.getElementById("retrieveDataButton").addEventListener("click", function() {
    console.log("Retrieving 30 days of data...");
    alert("Data for the last 30 days has been retrieved.");
});

// Delete Data (Simulated)
document.getElementById("deleteDataButton").addEventListener("click", function() {
    console.log("Deleting data...");
    alert("Data has been deleted.");
});

// Download Data Button Event
document.getElementById("downloadButton").addEventListener("click", function() {
    console.log("Downloading data...");
    const data = {
        date: new Date(),
        status: "Connected",
        location: deviceMarker.getPosition(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "device_data.json";
    link.click();
});

// Subscription Button Event
document.getElementById("subscribeButton").addEventListener("click", function() {
    alert("Thank you for subscribing!");
});
