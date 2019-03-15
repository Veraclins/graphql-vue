<script>
import NavBar from '@components/nav-bar';
import Footer from '@components/footer';
import Modals from '@layouts/modals';

export default {
  components: { NavBar, Modals, Footer },
};
</script>

<template>
  <div>
    <NavBar />
    <div class="container" :class="$style.content">
      <slot />
    </div>
    <Footer />
    <Modals />
    <PopUp />
  </div>
</template>

<style lang="scss" module>
@import '@design';
.content {
  min-height: 82vh;
  font-size: 16px;
  text-align: left;
}
</style>
