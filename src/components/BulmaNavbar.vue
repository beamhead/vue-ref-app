<template>
  <nav
    class="navbar is-light is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/img/icons/android-chrome-192x192.png" alt="korpen spanar"/>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Hem</router-link>
        <router-link to="/table" class="navbar-item">Table</router-link>
        <router-link to="/info" class="navbar-item">Info</router-link>
        <router-link to="/about" class="navbar-item">Om</router-link>
        <router-link to="/else" class="navbar-item">Nåt annat</router-link>
        <router-link to="/wmi-viewer" class="navbar-item">WMI Viewer</router-link>
        <router-link to="/wmi-battery" class="navbar-item">Client Battery</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Exempel</a>

          <div class="navbar-dropdown">
            <router-link to="/examples" class="navbar-item"
              >API-anrop</router-link
            >
            <router-link to="/controlles" class="navbar-item"
              >Kontroller</router-link
            >
            <router-link to="/tables" class="navbar-item">Tabeller</router-link>
            <router-link to="/charts" class="navbar-item">Diagram</router-link>
            <router-link to="/modal" class="navbar-item">Modal</router-link>
            <hr class="navbar-divider" />
            <router-link to="/" class="navbar-item"
              >Report an issue</router-link
            >
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/signup" class="button is-primary"
              ><strong>Sign up</strong></router-link
            >
            <router-link to="/" class="button is-light">Log in</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
export default {
  name: "BulmaNavbar"
};
</script>
