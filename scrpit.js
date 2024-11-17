function showResults() {
    // Simulated results
    const resultsDiv = document.getElementById("results");
    resultsDiv.style.display = "block";
    
    // Example of dynamic content
    document.getElementById("disease").textContent = "Powdery Mildew";
    document.getElementById("recommendation").textContent =
      "Apply appropriate fungicide and monitor the plant regularly.";
  }
  