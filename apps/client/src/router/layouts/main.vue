<script>
import NavBar from '@components/nav-bar';
import Modals from '@layouts/modals';

export default {
  components: { NavBar, Modals },
};
</script>

<template>
  <div>
    <NavBar />
    <div class="container" :class="$style.content">
      <slot />
    </div>
    <Modals />
  </div>
</template>

<style lang="scss" module>
@import '@design';
.content {
  font-size: 22px;
  line-height: 35px;
  text-align: justify;
}
</style>
