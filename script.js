document.getElementById("voteForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());

  // Validation
  if (!name || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  // Promise to check age
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  })
  .then((message) => alert(message))
  .catch((error) => alert(error));
});
