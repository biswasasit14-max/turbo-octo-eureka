let solution = null;

        // Set your secret passkey here
        const PASSKEY = "OPEN123";

       function checkRecaptcha() {
    const response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("Please complete the reCAPTCHA!");
    } else {
        alert("reCAPTCHA verified!");
        enableButton();
    }
}

        // Check passkey input (case-sensitive)
        function checkPasskey() {
            const userKey = document.getElementById("passkeyInput").value.trim();
            if (userKey === PASSKEY) {
                alert("Passkey accepted! Access granted.");
                enableButton();
            } else {
                alert("nein!");
                
            }
        }

        window.onload = generateCaptcha;