    const form = document.getElementById('voteForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const age = document.getElementById('age').value.trim();

      if (!name || !age) {
        // 🔧 Remove period to match Cypress test
        alert('Please enter valid details');
        return;
      }

      const ageNum = parseInt(age);

      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ageNum > 18) {
            resolve(name);
          } else {
            reject(name);
          }
        }, 4000);
      })
      .then(user => alert(`Welcome, ${user}. You can vote.`))
      .catch(user => alert(`Oh sorry ${user}. You aren't old enough.`));
    });