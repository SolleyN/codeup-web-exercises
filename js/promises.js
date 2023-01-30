"use strict";

async function getLastCommitDate(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events`,
      {
        headers: {
          Authorization: `token ${keys.github}`,
        },
      }
    );
    const events = await response.json();
    for (const event of events) {
      if (event.type === "PushEvent") {
        return event.created_at;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  let lastCommit = await getLastCommitDate("SolleyN");
  console.log(lastCommit);
})();

// getLastCommitDate("SolleyN").then((date) => console.log(date));
