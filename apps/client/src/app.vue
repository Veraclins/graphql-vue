<script>
import appConfig from '@src/app.config';

export default {
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      // title = typeof title === 'function' ? title(this.$store) : title // TODO
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    },
  },
};
</script>

<template>
  <div id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern

// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import '~normalize.css/normalize.css';
// Style loading bar between pages.
// https://github.com/rstacruz/nprogress
@import '~nprogress/nprogress.css';

// Design variables and utilities from src/design.
@import '@design';

@font-face {
  font-family: DINRegular;
  src: url('~@assets/fonts/FF-DIN-Pro.woff2') format('woff2'),
    url('~@assets/fonts/FF-DIN-Pro.woff') format('woff'),
    url('~@assets/fonts/FF-DIN-Pro.otf') format('opentype');
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: LetterGothicStd;
  src: url('~@assets/fonts/LetterGothicStd.woff2') format('woff2'),
    url('~@assets/fonts/LetterGothicStd.woff') format('woff'),
    url('~@assets/fonts/LetterGothicStd.otf') format('opentype');
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: LetterGothicStd-Bold;
  src: url('~@assets/fonts/LetterGothicStd-Bold.woff2') format('woff2'),
    url('~@assets/fonts/LetterGothicStd-Bold.woff') format('woff'),
    url('~@assets/fonts/LetterGothicStd-Bold.otf') format('opentype');
  font-style: normal;
  font-weight: 700;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin-top: 80px;
  color: $color-text;
  letter-spacing: 0.1rem;
  background: $color-main;
}

#app {
  @extend %typography-small;
}

// ===
// Base element styles
// ===
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
a {
  color: $color-link-text;
  text-decoration: none;
}

p,
span {
  font-family: DINRegular, sans-serif;
  font-size: 14px;
  font-weight: 400;
}

p {
  font-family: LetterGothicStd-Bold, sans-serif;
  font-weight: 400;
  line-height: 25px;
}
strong {
  font-size: 1.5rem;
  font-weight: 900;
}

small {
  font-family: LetterGothicStd, sans-serif;
  font-size: 12px;
  font-weight: 400;
}

p small {
  font-family: DINRegular, sans-serif;
}

h1 {
  font-size: 36px;
  line-height: 43px;
}

h2,
h2 span {
  font-size: 30px;
  line-height: 36px;
}

h3 {
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
}

h4,
h5 {
  font-size: 20px;
  font-weight: 400;
}

h1,
h2,
h3,
h4 {
  font-family: LetterGothicStd-Bold, sans-serif;
}

h5 {
  font-family: DINRegular, sans-serif;
  line-height: 31px;
}

h6,
p {
  font-size: 16px;
}

h6 {
  font-family: LetterGothicStd, sans-serif;
  font-weight: 400;
}

.container {
  padding: 8px 8%;
  margin: 0 auto;

  @include small {
    padding: 8px 2%;
  }
}
// ===
// Vendor
// ===

#nprogress .bar {
  background: $color-link-text;
}
</style>
