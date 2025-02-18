//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  // Show initial loading message
  output.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

  // Function to create a promise that resolves after a random time (1 to 3 seconds)
  function createPromise(index) {
    const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name: `Promise ${index}`, time }), time * 1000);
    });
  }

  // Creating 3 promises
  const promises = [createPromise(1), createPromise(2), createPromise(3)];

  // Wait for all promises to resolve
  Promise.all(promises).then((results) => {
    // Remove loading row
    output.innerHTML = "";

    let maxTime = 0;

    // Append rows with promise results
    results.forEach((result) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
      output.appendChild(row);
      maxTime = Math.max(maxTime, parseFloat(result.time));
    });

    // Append total row
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${maxTime.toFixed(3)}</strong></td>`;
    output.appendChild(totalRow);
  });
});
