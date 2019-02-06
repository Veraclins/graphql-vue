<script>
import appConfig from '@src/app.config';
import Layout from '@layouts/main';
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
};
</script>

<template>
  <Layout>
    <h1>Home Page</h1>
    <img class="logo" src="@assets/images/logo.png" alt="Logo" />
    <section>
      <div>
        oday we want to share some ideas for modal window effects with you.
        There are infinite possibilities for transitioning the appearance of a
        dialog box and we wanted to provide some ideas of how to show dialog
        boxes and provide some inspiration. The idea is to have a trigger button
        (or any element) which will make a modal window appear on click using a
        simple transition (or animation). Please note: this only works as
        intended in browsers that support the respective CSS properties. Modern
        browsers only! There are some knows issue with using visibility/opacity
        for iOS 6 Mobile Safari, so this probably won't work on older devices.
        The structure of the modal window consists of a main wrapper and a
        content division:

        <div id="modal-1" class="md-modal md-effect-1">
          <div class="md-content">
            <h3>Modal Dialog</h3>
            <div>
              <p
                >This is a modal window. You can do the following things with
                it:</p
              >
              <ul>
                <li
                  ><strong>Read:</strong> Modal windows will probably tell you
                  something important so don't forget to read what it says.</li
                >
                <li
                  ><strong>Look:</strong> modal windows enjoy a certain kind of
                  attention; just look at it and appreciate its presence.</li
                >
                <li
                  ><strong>Close:</strong> click on the button below to close
                  the modal.</li
                >
              </ul>
              <button class="md-close">Close me!</button>
            </div>
          </div>
        </div>

        ...

        <div class="md-overlay"></div>
        The main wrapper is used as a container that will simply be shown or
        hidden (with visibility, using the class “md-show”) and the inner
        content will have the transition. The overlay is placed after the
        modal(s), so we can control the appearance using the adjacent sibling
        selector: .md-modal { position: fixed; top: 50%; left: 50%; width: 50%;
        max-width: 630px; min-width: 320px; height: auto; z-index: 2000;
        visibility: hidden; backface-visibility: hidden; transform:
        translateX(-50%) translateY(-50%); } .md-show { visibility: visible; }
        .md-overlay { position: fixed; width: 100%; height: 100%; visibility:
        hidden; top: 0; left: 0; z-index: 1000; opacity: 0; background:
        rgba(143,27,15,0.8); transition: all 0.3s; } .md-show ~ .md-overlay {
        opacity: 1; visibility: visible; } For some effects we will also add a
        class to the html element. We want this for creating some 3D effects on
        the body and the content. Note that we are assuming that all the content
        of the page (except the modal and the overlay) are wrapped in a
        container: .md-perspective, .md-perspective body { height: 100%;
        overflow: hidden; } .md-perspective body { background: #222;
        perspective: 600px; } .container { background: #e74c3c; min-height:
        100%; } To be able to control each effect, we use an additional effect
        class to define what kind of transition we want for that specific modal
        window. An example for an individual effect is the following: /* Effect
        5: newspaper */ .md-show.md-effect-5 ~ .md-overlay { background:
        rgba(0,127,108,0.8); } .md-effect-5 .md-content { transform: scale(0)
        rotate(720deg); opacity: 0; transition: all 0.5s; } .md-show.md-effect-5
        .md-content { transform: scale(1) rotate(0deg); opacity: 1; } The
        trigger buttons will have a data-attribute that holds the reference to
        the modal box that we want to show:

        <button class="md-trigger" data-modal="modal-5">Newspaper</button>
        For the special perspective cases, we’ll also add the class
        “md-setperspective” to the trigger button. With JavaScript we’ll simple
        add the class “md-show” to the respective modal when we click on a
        button, and, if indicated, the “md-perspective” class to the html
        element. To experiment with new effects, add a new button and a new
        modal with an effect class and an ID, referencing to that ID in the
        button’s data-attribute “data-modal”. Then you can add another set of
        styles for that specific effect. If you only want the effect/transition
        to happen when the modal window appears, but not when it disappears,
        just add the transition to the “.md-show.md-effect-x .md-content”
        declaration (like we did for some of the examples).
      </div>
    </section>
  </Layout>
</template>

<style lang="scss" scoped>
@import '@design';

.logo {
  max-width: 100%;
  height: auto;
}
</style>
