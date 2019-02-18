<script>
export default {
  computed: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<template>
  <footer class="container" :class="[$style.footer]">
    <BaseLink name="home">
      <img
        src="@assets/images/veratech.png"
        alt="Logo"
        width="144"
        height="42"
      />
    </BaseLink>
    <div>
      <p>
        <strong>Office Address: </strong> 235 Ikorodu Road, Ilupeju, Lagos
      </p>
      <p>
        <small>
          Designed with love by
          <strong>
            <BaseLink href="https://twitter.com/icstps">
              Agada Clinton
            </BaseLink>
          </strong>
          © {{ getYear }} VeraTech.
        </small>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" module>
@import '@design';

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: $color-main;
  background: linear-gradient(135deg, $color-primary 0, $color-main-bg 100%);
}

.footerItem {
  flex: 1;
}
</style>
