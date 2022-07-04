<template>
  <div class="min-w-16 max-w-16 w-16 relative z-10">
    <div class="navigation cursor-pointer" @click="toggle">
      <img src="/icon.png" class="w-8 mx-auto pt-4">
      <div class="menu-button space-y-2 w-8 mx-auto z-10">
        <hr>
        <hr>
      </div>
    </div>
    <div
      class="menu flex"
      :class="{ 'menu-active': showMenu }"
    >
      <div
        class="menu menu-bg shadow"
        :class="{ 'menu-active': showMenu }"
      />
      <div
        class="mx-auto my-auto contact-menu"
        :class="{ 'contact-menu-active': showContact }"
      >
        <FeatureContactUser />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      showMenu: false,
      showContact: false
    }
  },
  methods: {
    toggle () {
      if (!this.showMenu) {
        this.showContent()
        return
      }

      this.hideContent()
    },
    showContent () {
      this.showMenu = true

      setTimeout(() => {
        this.showContact = true
      }, 300)
    },
    hideContent () {
      this.showContact = false

      setTimeout(() => {
        this.showMenu = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.z-10 {
  z-index: 10;
}

.navigation {
  position: sticky;
  top: 0;
  left: 0;
  background: #ffffff;
  height: 100vh;
  transition: .2s ease;
}

.menu-button {
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
}

hr {
  border: none;
  border-top: 1px solid #333333;
}

.menu {
  position: fixed;
  left: 4rem;
  top: 0;
  width: 0;
  height: 100%;
  transition: 0.3s ease;
  z-index: -1;
  background: #ffffff;
  overflow-x: auto;
}

.menu-bg {
  background-image: url('/background-menu.jpg');
  background-repeat: no-repeat;
  background-size: auto 100vh;
  background-position: center;
  opacity: 0.3;
}

.menu-active {
  width: 100%;
  background-size: auto 130vh;
}

@media only screen and (min-width: 800px) {
  .menu-active {
    width: 500px;
    background-size: auto 130vh;
  }
}

.contact-menu {
  opacity: 0;
  padding-top: 20px;
  transition: 0.2s ease;
}

.contact-menu-active {
  opacity: .8;
  padding-top: 0px;
}

.shadow {
  box-shadow: 16px 0px 25px -10px rgba(0,0,0,0.75);
}
</style>
