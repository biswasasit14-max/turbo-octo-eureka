//Subject to change

let solution = null;
        // Set your secret passkey here

        const PASSKEY = "OPEN";

        // Check passkey input (case-sensitive)
        function checkPasskey() {
  const key = document.getElementById("passkeyInput").value.trim();

  if (key.toUpperCase() === "OPEN") {
    // Enable the Open Link button
    document.getElementById("myButton").disabled = false;
    alert("Passkey accepted! You can now open the link.");
  } else {
    alert("Invalid passkey. Try again.");
  }
}
      
    .then(response => response.text())
    .then(data => {
        if (data === "success") {
            const secureBtn = document.getElementById("secureButton");
            secureBtn.disabled = false;
            secureBtn.innerText = "Access Granted ✅";
        } else {
            alert("CAPTCHA verification failed. Try again.");
            grecaptcha.reset(); // reset widget
        }
    })
    .catch(err => console.error("Error verifying CAPTCHA:", err));
}

