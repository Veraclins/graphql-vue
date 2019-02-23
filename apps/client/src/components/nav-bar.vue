<script>
import NavBarRoutes from './nav-bar-routes.vue';
import { getSession } from '@src/services/auth/session';
import { logout } from '@services/auth';

export default {
  components: { NavBarRoutes },
  data() {
    return {
      user: null,
      menuActive: false,
      loggedInNavRoutes: [
        {
          name: 'dashboard',
          title: 'Dashboard',
        },
      ],
      adminNavRoutes: [
        {
          name: 'admin',
          title: 'Admin Page',
        },
      ],
    };
  },
  mounted() {
    this.user = getSession();
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    closeMenu() {
      this.menuActive = this.menuActive ? !this.menuActive : this.menuActive;
    },
    logOut() {
      logout();
      this.user = null;
    },
    showModal(modal) {
      this.$root.$emit('show-modal', modal);
    },
  },
};
</script>

<template>
  <header class="container" :class="$style.navbar">
    <div :class="$style.navbarLeft">
      <BaseLink name="home">
        <img
          src="@assets/images/veratech.png"
          alt="Logo"
          width="144"
          height="42"
        />
      </BaseLink>
      <a
        :class="[$style.menu, { [$style.active]: menuActive }]"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <ul
      :class="[$style.navbarRight, { [$style.show]: menuActive }]"
      @click="closeMenu"
    >
      <NavBarRoutes
        v-if="user && user.role === 'ADMIN'"
        :routes="adminNavRoutes"
      />
      <template v-if="user">
        {{ user.username }}
        <NavBarRoutes :routes="loggedInNavRoutes" />
        <NavButton @click="showModal({ id: 'create-request' })">
          Create Request
        </NavButton>
        <NavButton @click="logOut">
          Log Out
        </NavButton>
      </template>
      <template v-else>
        <NavButton @click="showModal({ id: 'login' })">
          Login
        </NavButton>
        <NavButton @click="showModal({ id: 'signup' })">
          Register
        </NavButton>
      </template>
    </ul>
  </header>
</template>

<style lang="scss" module>
@import '@design';

.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  background: $color-primary;

  li {
    display: inline-block;
    margin-left: $size-grid-padding;
  }
  .navbarLeft {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  }
  .navbarRight {
    display: flex;
    flex: 3;
    align-items: center;
    justify-content: flex-end;

    @include small {
      position: fixed;
      top: 58px;
      right: -300px;
      bottom: 0;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 60%;
      max-width: 300px;
      max-height: 300px;
      padding: 20px;
      margin: 0;
      overflow: hidden;
      background: #3358df;
      transition: 0.3s ease;
      li,
      button {
        margin-bottom: $size-grid-padding;
      }
    }
  }
  .show {
    right: 0;
  }
  .menu {
    position: relative;
    display: none;
    width: 25px;
    height: 20px;

    @include small {
      display: block;
    }
    span {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      display: block;
      height: 2px;
      margin: -1px 0 0;
      background: #fff;
      transition: 0.3s ease;
    }

    span:first-child {
      top: 0;
      margin-top: 0;
    }

    span:last-child {
      top: auto;
      bottom: 0;
      margin-top: 20px;
    }
  }

  .active span:first-child,
  .active span:last-child {
    opacity: 0;
  }

  .active span:nth-child(2) {
    transform: rotate(45deg);
  }

  .active span:nth-child(3) {
    transform: rotate(-45deg);
  }
}
</style>
