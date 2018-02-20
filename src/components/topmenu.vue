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
          <router-link to="/signin" class="navbar-item">Logg inn</router-link>

        </div>
      </div>
    </div>
</template>
