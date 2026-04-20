const locationIconLogic = (locationIcon) => {
  locationIcon.addEventListener("click", () => {
    const errorDiv = document.createElement("div");
    errorDiv.className = "light-div";
    errorDiv.id = "error-div";
    errorDiv.innerHTML = `<p>Something went wrong. Please try again!</p>
                          <p id='closeBtn'><i class="fa-solid fa-x" style="font-size: 25px;"></i></p>
                         `;
    locationIcon.style.pointerEvents = "none";

    header.insertAdjacentElement("afterend", errorDiv);
    setTimeout(() => {
      errorDiv.style.display = "none";
      locationIcon.style.pointerEvents = "auto";
    }, 5000);

    document.getElementById("closeBtn").addEventListener("click", () => {
      errorDiv.style.display = "none";
      locationIcon.style.pointerEvents = "auto";
    });
  });
};
