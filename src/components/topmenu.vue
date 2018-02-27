<template>
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="../">
          AgiLite
        </a>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/profile" class="navbar-item">Profil</router-link>
          <a class="navbar-item" href="admin.html">
            Konkurranser
          </a>
          <a class="navbar-item" href="admin.html">
            Resultater
          </a>
          <a class="navbar-item" href="admin.html">
            Live!
          </a>
          <a class="navbar-item" href="admin.html">
            Klubber
          </a>
        </div>
        <div class="navbar-end">
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
