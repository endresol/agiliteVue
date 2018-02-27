<template>
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item brand-text">
          AgiLite
        </router-link>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Konkurranser</router-link>
          <router-link to="/results" class="navbar-item">Resultater</router-link>
          <router-link to="/clubs" class="navbar-item">Klubber</router-link>

        </div>
        <div class="navbar-end">
          <router-link to="/profile" class="navbar-item">Profil</router-link>
          <div class="navbar-item">
            <p class="control">
              <router-link to="/signin" class="button is-primary">
                <span class="icon">
                  <i class="fas fa-lock-open"></i>
                </span>
                <span>Logg inn</span>
              </router-link>
            </p>
          </div>
        </div>

      </div>
    </div>
</template>
