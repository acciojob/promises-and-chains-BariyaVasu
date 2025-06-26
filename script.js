    const form = document.getElementById('voteForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form from reloading the page

      const name = document.getElementById('name').value.trim();
      const age = document.getElementById('age').value.trim();

      // Validate inputs
      if (!name || !age) {
        alert('Please enter valid details.');
        return;
      }

      const ageNumber = parseInt(age);

      // Create a Promise to simulate delay and decision
      const voteCheck = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ageNumber > 18) {
            resolve(name);
          } else {
            reject(name);
          }
        }, 4000);
      });

      // Handle the promise result
      voteCheck
        .then((userName) => {
          alert(`Welcome, ${userName}. You can vote.`);
        })
        .catch((userName) => {
          alert(`Oh sorry ${userName}. You aren't old enough.`);
        });
    });
