
// function generateOTP()
// {

//     var digits = '0123456789';

//     var otpLength = 4;

//     var otp = '';

//     for(let i=1; i<=otpLength; i++)

//     {

//         var index = Math.floor(Math.random()*(digits.length));

//         otp = otp + digits[index];

//     }

//     return otp;

// }



// document.addEventListener("DOMContentLoaded", function() {
//     const otpInput = document.getElementById("otp");
//     const generateBtn = document.getElementById("generate-btn");

//     // Function to update OTP input field with a new OTP
//     function updateOTP() {
//         const newOTP = generateOTP();
//         otpInput.value = newOTP;
//     }

//     // Event listener for the "Generate New OTP" button
//     generateBtn.addEventListener("click", function() {
//         updateOTP();
//     });

//     // Event listener for the "Enter" key to generate a new OTP
//     otpInput.addEventListener("keyup", function(event) {
//         if (event.key === "Enter") {
//             updateOTP();
//         }
//     });

//     // Initial OTP generation when the page loads
//     updateOTP();
// });

function generateOTP()
{

    var digits = '0123456789';

    var otpLength = 6;

    var otp = '';

    for(let i=1; i<=otpLength; i++)

    {

        var index = Math.floor(Math.random()*(digits.length));

        otp = otp + digits[index];

    }

    return otp;

}



document.addEventListener("DOMContentLoaded", function() {
    const otpInput = document.getElementById("otp");
    const generateBtn = document.getElementById("generate-btn");

    // Function to update OTP input field with a new OTP
    function updateOTP() {
        const newOTP = generateOTP();
        otpInput.value = newOTP;
    }

    // Event listener for the "Generate New OTP" button
    generateBtn.addEventListener("click", function() {
        updateOTP();
    });

    // Event listener for the "Enter" key to generate a new OTP
    otpInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            updateOTP();
        }
    });

    // Initial OTP generation when the page loads
    updateOTP();
});