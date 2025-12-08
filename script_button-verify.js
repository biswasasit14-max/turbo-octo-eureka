let solution = null;
        // Set your secret passkey here
        const PASSKEY = "OPEN123";

        // Check passkey input (case-sensitive)
        function checkPasskey() {
            const userKey = document.getElementById("passkeyInput").value.trim();
            if (userKey === PASSKEY) {
                alert("Passkey accepted! Access granted.");
                enableButton();
            } else {
                alert("Password accepted");
                
            }
        }

        window.onload = generateCaptcha;