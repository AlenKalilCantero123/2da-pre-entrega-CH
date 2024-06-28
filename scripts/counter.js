// Contador animado
document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    let count = 0;
    const target = 100;
    const speed = 10; // Ajusta la velocidad del contador

    const updateCounter = () => {
      if (count < target) {
        count++;
        counterElement.textContent = count;
        setTimeout(updateCounter, speed);
      }
    };

    updateCounter();
  });