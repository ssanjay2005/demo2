const sendOTP = async () => {
    const phone = document.getElementById("phone").value;
    if (!phone) {
        alert("Enter a valid phone number");
        return;
    }

    const response = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
    });

    const data = await response.json();
    if (data.success) {
        document.getElementById("phoneSection").style.display = "none";
        document.getElementById("otpSection").style.display = "block";
        document.getElementById("message").innerText = "OTP sent to your phone!";
    } else {
        document.getElementById("message").innerText = data.message;
    }
};

const verifyOTP = async () => {
    const phone = document.getElementById("phone").value;
    const otp = document.getElementById("otp").value;

    const response = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
    });

    const data = await response.json();
    if (data.success) {
        document.getElementById("message").innerText = "OTP Verified! Login Successful 🎉";
    } else {
        document.getElementById("message").innerText = "Invalid OTP, Try Again!";
    }
};
