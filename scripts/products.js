document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".small-box");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cards.forEach(card => {
    card.addEventListener("click", function() {
      const productName = card.querySelector("h4").textContent;
      const productPrice = card.querySelector(".price").textContent.replace("$", "");
      const product = { name: productName, price: parseFloat(productPrice) };

      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateServices();
    });

    card.addEventListener("mouseover", function() {
      card.style.cursor = "pointer";
    });
  });

  function updateServices() {
    const serviciosInput = document.getElementById("servicios");
    const totalInput = document.getElementById("precio-total");
    const urgenciaCheckbox = document.getElementById("urgencia");

    let serviciosText = cart.map(item => `${item.name} ($${item.price})`).join(" + ");
    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    if (urgenciaCheckbox.checked) {
      totalPrice *= 2;
    }

    serviciosInput.value = serviciosText;
    totalInput.value = `$${totalPrice}`;
  }

  document.getElementById("urgencia").addEventListener("change", updateServices);

  document.getElementById("vaciar-carrito").addEventListener("click", function() {
    localStorage.removeItem("cart");
    cart = [];
    updateServices();
  });

  document.getElementById("presupuesto-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const servicios = document.getElementById("servicios").value;
    const precioTotal = document.getElementById("precio-total").value;
    const urgenciaCheckbox = document.getElementById("urgencia");

    let message = `Presupuesto generado para ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nServicios: ${servicios}\nTotal: ${precioTotal}`;
    if (urgenciaCheckbox.checked) {
      message += `\nEl presupuesto se duplica por urgencia.`;
    }

    alert(message);

    localStorage.removeItem("cart");
    cart = [];
    updateServices();
    document.getElementById("presupuesto-form").reset();
  });

  updateServices();
});
