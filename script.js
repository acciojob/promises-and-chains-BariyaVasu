document.getElementById("voteForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const nameInput = document.getElementById("name").value.trim();
  const ageInput = document.getElementById("age").value.trim();

  const age = parseInt(ageInput);

  // Input validation
  if (!nameInput || isNaN(age)) {
    alert("Please enter valid details."); // Note: Period at the end
    return;
  }

  // Promise to simulate a delay and check age
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${nameInput}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  })
    .then((message) => {
      alert(message);
    })
    .catch((errorMessage) => {
      alert(errorMessage);
    });
});
