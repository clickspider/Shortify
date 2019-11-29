<template>
  <div id="app">
    <header class="main-header">
      <div class="container">
        <!-- Mobile Navigation-->
        <div class="mobile-navigation d-md-block d-lg-none">
          <div class="container">
            <div class="row">
              <a href="index.html">
                <img
                  src="./img/logo.svg"
                  alt="site-logo"
                  class="mobile-navigation__logo"
                />
              </a>

              <input
                for="navi-toggle"
                type="checkbox"
                class="mobile-navigation__checkbox"
                id="navi-toggle"
              />

              <label for="navi-toggle" class="mobile-navigation__button">
                <span class="mobile-navigation__icon">&nbsp;</span>
              </label>

              <nav class="mobile-navigation__nav">
                <ul class="navbar-nav mobile-navigation__list">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Resources</a>
                  </li>
                </ul>
                <hr />
                <a
                  href="#"
                  class="nav-link mb-24"
                  role="button"
                  aria-pressed="true"
                  >Login</a
                >
                <a
                  href="#"
                  class="btn btn-primary btn-primary--mid"
                  role="button"
                  aria-pressed="true"
                  >Sign Up</a
                >
              </nav>
            </div>
          </div>
        </div>

        <!-- Navigation Desktop-->
        <nav
          class="navbar desktop-navigation navbar-expand-lg d-none d-lg-block"
        >
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <img src="./img/logo.svg" alt="site-logo" />
            </a>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Resources</a>
              </li>
            </ul>
            <!-- Navbar btns - left -->
            <div class="navbar-btns">
              <a
                href="#"
                class="nav-link d-none d-md-inline-block"
                role="button"
                aria-pressed="true"
                >Login</a
              >
              <a
                href="#"
                class="btn btn-primary btn-primary--small d-none d-md-inline-block"
                role="button"
                aria-pressed="true"
                >Sign Up</a
              >
            </div>
          </div>
        </nav>

        <section class="welcome-section">
          <div class="container">
            <div class="row">
              <div class="col-md-7">
                <h1 class="heading-primary">More than just shorter links</h1>
                <h2 class="heading-secondary mb-42">
                  Build your brand’s recognition and get detailed insights on
                  how your links are performing.
                </h2>

                <a
                  href="#"
                  class="btn btn-primary btn-primary--large mx-xsm-auto"
                  role="button"
                  aria-pressed="true"
                  >Get Started</a
                >
              </div>
              <div class="col-md-5">
                <img
                  src="./img/illustration-working.svg"
                  alt="illustration-working"
                  class="d-none d-md-block"
                />
                <img
                  src="./img/illustration-working-mobile.svg"
                  alt="illustration-working"
                  class="welcome-section__img-mobile d-lg-none d-md-none d-sm-block"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>

    <main>
      <section class="statistics">
        <ShortLink />

        <div class="container text-xsm-center">
          <div class="statistics__heading-box text-center mx-auto">
            <h1 class="heading-tertiary">Advanced Statistics</h1>
            <span class="d-block heading-tertiary--sub"
              >Track how your links are performing across the web with our
              advanced statistics dashboard.</span
            >
          </div>

          <div class="row statistics__row">
            <div class="statistics__strip"></div>

            <div class="card-container">
              <div class="card">
                <div class="card-img-holder">
                  <img
                    src="./img/icon-brand-recognition.svg"
                    class="card-img-top"
                    alt="icon-brand-recognition"
                  />
                </div>
                <div class="card-body">
                  <h1 class="card-heading">Brand Recognition</h1>
                  <p class="card-text">
                    Boost your brand recognition with each click. Generic links
                    don’t mean a thing. Branded links help instil confidence in
                    your content.
                  </p>
                </div>
              </div>

              <div class="card-container">
                <div class="card">
                  <div class="card-img-holder">
                    <img
                      src="./img/icon-detailed-records.svg"
                      class="card-img-top"
                      alt="icon-detailed-records"
                    />
                  </div>
                  <div class="card-body">
                    <h1 class="card-heading">Detailed Records</h1>
                    <p class="card-text">
                      Gain insights into who is clicking your links. Knowing
                      when and where people engage with your content helps
                      inform better decisions.
                    </p>
                  </div>
                </div>

                <div class="card-container">
                  <div class="card">
                    <div class="card-img-holder">
                      <img
                        src="./img/icon-fully-customizable.svg"
                        class="card-img-top"
                        alt="icon-fully-customizable"
                      />
                    </div>
                    <div class="card-body">
                      <h1 class="card-heading">Fully Customizable</h1>
                      <p class="card-text">
                        Improve brand awareness and content discoverability
                        through customizable links, supercharging audience
                        engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="boost-section">
        <div class="container">
          <h1 class="heading-tertiary color-white">Boost your links today</h1>
          <a
            href="#"
            class="btn btn-primary btn-primary--large mx-auto"
            role="button"
            aria-pressed="true"
            >Get Started</a
          >
        </div>
      </section>
    </main>

    <footer class="main-footer">
      <div class="container">
        <div class="row">
          <img src="./img/logo-white.svg" alt="logo" class="logo" />

          <ul class="main-footer__links">
            <span class="main-footer__links--header">Features</span>

            <li class="main-footer__links--item">
              <a href="#">Link Shortening</a>
            </li>
            <li class="main-footer__links--item">
              <a href="#">Branded Links</a>
            </li>
            <li class="main-footer__links--item"><a href="#">Analytics</a></li>
          </ul>

          <ul class="main-footer__links">
            <span class="main-footer__links--header">Resources</span>

            <li class="main-footer__links--item"><a href="#">Blog</a></li>
            <li class="main-footer__links--item"><a href="#">Developers</a></li>
            <li class="main-footer__links--item"><a href="#">Support</a></li>
          </ul>

          <ul class="main-footer__links">
            <span class="main-footer__links--header">Company</span>

            <li class="main-footer__links--item"><a href="#">About</a></li>
            <li class="main-footer__links--item"><a href="#">Our Team</a></li>
            <li class="main-footer__links--item"><a href="#">Careers</a></li>
            <li class="main-footer__links--item"><a href="#">Contact</a></li>
          </ul>

          <div class="main-footer__icons">
            <a href="https://www.facebook.com/">
              <i class="ion-social-facebook"></i>
            </a>
            <a href="https://twitter.com">
              <i class="ion-social-twitter"></i>
            </a>
            <a href="https://www.pinterest.com/">
              <i class="ion-social-pinterest"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i class="ion-social-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import ShortLink from "./components/ShortLink.vue";

export default {
  name: "app",
  components: {
    ShortLink
  }
};
</script>

<style lang="scss">
@import "./sass/main";
</style>
