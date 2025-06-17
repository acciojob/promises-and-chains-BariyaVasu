//your JS code here. If required.
 const form = document.getElementById('voteForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent form reload

      const name = nameInput.value.trim();
      const age = parseInt(ageInput.value.trim());

      if (!name || isNaN(age)) {
        alert("Please enter valid details.");
        return;
      }

      checkVotingEligibility(name, age)
        .then(message => alert(message))
        .catch(error => alert(error));
    });

    function checkVotingEligibility(name, age) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000); // 4-second delay
      });
    }