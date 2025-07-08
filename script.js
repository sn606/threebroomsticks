document.addEventListener("DOMContentLoaded", () => {
  // Show/hide password toggle
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("toggle-password");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", () => {
      passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
    });
  }

  // Contact form handling
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const messageBox = document.getElementById("message");

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = messageBox.value.trim();
      const password = passwordInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        !name ||
        !email ||
        !message ||
        !password ||
        !emailRegex.test(email)
      ) {
        alert("Please fill in all fields correctly.");
        return;
      }

      alert("Message sent successfully!");
      contactForm.reset();
    });

    // Auto-resize textarea
    if (messageBox) {
      messageBox.addEventListener("input", () => {
        messageBox.style.height = "auto";
        messageBox.style.height = messageBox.scrollHeight + "px";
      });
    }
  }

  // Reservation form
  const reservationForm = document.getElementById("reservation-form");
  if (reservationForm) {
    reservationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("guestName").value.trim();
      const date = document.getElementById("date").value;
      const guests = document.getElementById("guests").value;

      if (!name || !date || !guests) {
        alert("Please complete all fields.");
        return;
      }

      alert("Reservation submitted!");
      reservationForm.reset();
    });
  }

  // Cookie banner
  const cookieBanner = document.createElement("div");
  cookieBanner.id = "cookie-banner";
  cookieBanner.innerHTML = `
    <div style="background:#5a3e36;color:white;padding:1rem;position:fixed;bottom:0;width:100%;text-align:center;z-index:999;">
      We use cookies to improve your magical experience.
      <button id="accept-cookies" style="margin-left:1rem;padding:0.5rem 1rem;border:none;border-radius:8px;background:gold;cursor:pointer;">Accept</button>
    </div>
  `;
  if (!localStorage.getItem("cookiesAccepted")) {
    document.body.appendChild(cookieBanner);
    document
      .getElementById("accept-cookies")
      .addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.remove();
      });
  }
});

// Wand trail sparkle effect
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "wand-trail";
  sparkle.style.left = `${e.clientX - 4}px`;
  sparkle.style.top = `${e.clientY - 4}px`;
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 600);
});

// OPTIONAL: Menu loader from static array (works if menu-container exists)
const menuItems = [
  {
    name: "Hogsmeade Butterbeer",
    image: "hpimages/butterbeer.jpg",
    description: "A frothy, sweet beverage loved by all witches and wizards.",
  },
  {
    name: "Enchanted Chocolate Frog",
    image: "hpimages/chocolatefrog.jpg",
    description: "A magical chocolate treat with collectible wizard cards.",
  },
  {
    name: "Wizard's Winter Eggnog",
    image: "hpimages/eggnog.jpeg",
    description: "A creamy holiday classic with a magical twist.",
  },
  {
    name: "Butterbeer Charm Cupcake",
    image: "hpimages/butterbeer-cupcake.jpg",
    description: "Soft, golden cupcake topped with magical buttercream.",
  },
  {
    name: "Gillywater Elixir",
    image: "hpimages/gilly-water.jpg",
    description: "A crisp and rare drink, favored by potion-makers.",
  },
  {
    name: "Spellbound Hot Chocolate",
    image: "hpimages/hot-chocolate.jpg",
    description: "Velvety and warm — perfect for a snowy Hogsmeade day.",
  },
  {
    name: "Dark Forest Lollipop",
    image: "hpimages/blood-lollipop.webp",
    description: "A spooky, blood-flavored delight for daring tastebuds.",
  },
  {
    name: "Pumpkin Potion",
    image: "hpimages/pumpkin-juice.jpg",
    description: "Sweet and spiced — a Hogwarts dining hall staple.",
  },
  {
    name: "Bertie Bott’s Every Flavor Beans",
    image: "hpimages/bertiebott.jpg",
    description: "From booger to blueberry — the ultimate surprise snack.",
  },
  {
    name: "Hogwarts Treacle Tart",
    image: "hpimages/treacle-tart.jpg",
    description: "A golden crusted tart filled with rich treacle — Harry’s favorite.",
  },
];

const container = document.getElementById("menu-container");
if (container) {
  menuItems.forEach((item) => {
    const row = document.createElement("div");
    row.className = "menu-row parchment";
    row.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="menu-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
    `;
    container.appendChild(row);
  });
}




// burger

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});

