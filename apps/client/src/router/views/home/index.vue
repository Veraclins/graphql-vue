<script>
import appConfig from '@src/app.config';
import Layout from '@layouts/main';
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
  methods: {
    showModal(modal) {
      this.$root.$emit('show-modal', modal);
    },
  },
};
</script>

<template>
  <Layout>
    <div :class="$style.bannerBg" />
    <div :class="$style.bigTitle">
      <span :class="$style.bigTitleOne">RELIABILITY</span>
    </div>
    <section>
      <div :class="$style.contentBanner">
        <div class="content_banner_inner">
          <div :class="$style.innerLayout">
            <h1>
              <strong>This is VeraTech Solutions Hub.</strong>
            </h1>
            <h1>
              The Home of World Class Maintenance and Repairs for your
              <i>Modern Devices.</i>
            </h1>
            <h5>
              VeraTech Solutions Hub gives you the peace of mind you need. We
              care for your devices so you won't lose sleep. Whatever the need
              of your device, we got you covered.
            </h5>
            <div class="buttons_banner">
              <BaseButton
                outline
                class="buttons button_default"
                @click="showModal({ id: 'signup' })"
              >
                CREATE A NEW ACCOUNT
              </BaseButton>
              <BaseButton
                outline
                class="buttons button_blank"
                @click="showModal({ id: 'login' })"
              >
                LOGIN TO YOUR ACCOUNT
              </BaseButton>
            </div>
          </div>
        </div>
      </div>

      <div class="layout_content wow fadeInUp">
        <h1>10M+ users trust VeraTech to care for their devices</h1>
        <span class="banner_big_title_2">QUALITY</span>
        <p>
          Nothing beats the feeling of knowing that your device is in safe
          hands. VeraTech provides the confidence to be careless. We got your
          back! Whatever the fault, we are here to make it disappear!
        </p>
      </div>
      <section :class="$style.highlights">
        <div>
          <div :class="$style.pipeLeft">
            <div :class="$style.pipeColumn">
              <div :class="$style.pipeLeftBody">
                <h2 :class="$style.pipeHead"> 10,000+ </h2>
                <small>
                  Distinct devices serviced by VeraTech annually
                </small>
              </div>
            </div>
            <div :class="$style.pipeColumn">
              <div :class="$style.pipeLeftBody">
                <h2 :class="$style.pipeHead"> N50,000 </h2>
                <small>
                  Average cost we save our customers in new device costs per
                  year
                </small>
              </div>
            </div>
          </div>
          <p>Smartphones and Tablets</p>
          <div :class="$style.widget">
            <div :class="$style.leftFeature">
              <img
                src="@assets/images/smartphones.jpg"
                alt="Smartphones"
                width="100%"
              />
              <div :class="$style.leftFeatureBackLine" />
            </div>
            <div :class="$style.leftFeatureButton">
              <BaseButton plane @click="showModal({ id: 'signup' })">
                GET STARTED
              </BaseButton>
            </div>
          </div>
          <div :class="$style.pipeBottom">
            <div :class="$style.pipeColumn">
              <div :class="$style.pipeLeftBody">
                <h2 :class="$style.pipeHead">50</h2>
                <small>Satisfied customers daily</small>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div :class="$style.rightColumn">
            <div :class="$style.rightColumnImage">
              <img src="@assets/images/laptop-repair.jpeg" alt="" width="270" />
            </div>
            <div :class="$style.rightColumnDetail">
              <h4>Get the juice back for your Mac and Windows PC</h4>
              <p>Laptops and PC</p>
              <BaseButton
                plane
                :class="$style.rightColumnButton"
                @click="showModal({ id: 'signup' })"
              >
                GET STARTED
              </BaseButton>
            </div>
          </div>
          <div :class="$style.pipeRight">
            <div :class="$style.pipeColumn">
              <div :class="$style.pipeRightBody">
                <h2 :class="$style.pipeHead">20+ </h2>
                <small>Brands of computers we service</small>
              </div>
            </div>
            <div :class="$style.pipeColumn">
              <div :class="$style.pipeRightBody">
                <h2 :class="$style.pipeHead">20</h2>
                <small>Engineers on ground to attend to your requests</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div :class="$style.sectionPoint">
        <span :class="$style.centerPoint" />
      </div>
      <div :class="$style.bigTitle">
        <span :class="$style.bigTitleTwo">TRUSTWORTHY</span>
      </div>
      <div :class="$style.contentSection">
        <h2>Complex Faults, simple fixes</h2>
        <p>
          Our approach to repairs is rooted in a deep understanding of the
          devices. Nothing is too complex to be fixed. The world’s toughest
          problems are solved with sustained incremental small fixes.
        </p>
      </div>
      <div :class="$style.sectionPoint">
        <span :class="$style.centerPoint" />
      </div>
      <div :class="$style.contentSection">
        <h2>Software == Hardware</h2>
        <p>
          We are proficient in all round care for your devices. From software
          faults to physical hardware faults, we got you covered. Whatever the
          issue, no need to panic. Trust us to know what your device wants.
        </p>
      </div>

      <div :class="$style.timelineSection">
        <div :class="[$style.timelineBlock, $style.oddTimeline]">
          <div class="">
            <h2>A data-driven approach to repairs</h2>
            <p>
              When we receive a device, we run a complete system diagnostics. We
              ensure we have all the data necessary to get an accurate
              diagnostics of the fault.
            </p>
          </div>
        </div>
        <div :class="[$style.timelineBlock, $style.evenTimeline]">
          <div>
            <h2>Precise, Methodical, and Scientific</h2>
            <p>
              Using a suite of state of the art software and hardware tools, we
              methodically identify the precise issue and with scientific
              precision go about fixing it.
            </p>
          </div>
        </div>
        <div :class="[$style.timelineBlock, $style.oddTimeline]">
          <div class="">
            <h2>World-class Service, competitive Price</h2>
            <p>
              We’re consistently striving to give our customers the best quality
              service possible while maintaining a price regime that leave our
              customers grinning every time.
            </p>
          </div>
        </div>
        <div :class="$style.timelineButtonsSection">
          <div :class="$style.timelineButtonLeft">
            <div class="wow fadeInLeft">
              <BaseButton
                outline
                class="buttons button_default"
                @click="showModal({ id: 'signup' })"
              >
                CREATE A NEW ACCOUNT
              </BaseButton>
            </div>
          </div>
          <div :class="$style.timelineButtonRight">
            <div class="wow fadeInRight">
              <BaseButton
                outline
                class="buttons button_blank"
                @click="showModal({ id: 'login' })"
              >
                LOGIN TO YOUR ACCOUNT
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';

.contentBanner {
  z-index: 0;
  padding: 0 0 263px;
  text-align: center;

  &.innerLayout {
    max-width: 605px;
    margin: 0 auto 10px;
  }
}

.bannerBg {
  position: absolute;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: url('@assets/images/World_map-1024x640.png');
  background-repeat: no-repeat;
  background-size: auto;
}

.highlights {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @include small {
    flex-direction: column;
  }
}

.pipeLeft {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-right: 50px;
  padding-bottom: 50px;
  margin: 20px auto;
  text-align: right;
}
.pipeRight {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 50px;
  padding-left: 50px;
  margin: 20px auto;
  text-align: left;
}

.pipeBottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 20px;
  margin: 20px auto;
  text-align: right;
}

.pipeLeft,
.pipeRight,
.pipeBottom {
  @include small {
    justify-content: flex-start;
    padding: 0;
    text-align: left;
  }
}

.pipeLeftBody {
  padding-right: 20px;
}
.pipeRightBody {
  padding-left: 20px;
}
.pipeLeftBody,
.pipeRightBody {
  @include small {
    padding-left: 20px;
  }
}
.pipeHead {
  color: $color-secondary;
}
.pipeColumn {
  position: relative;
  max-width: 200px;
  margin: 20px;

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    content: '';
    border: 1px solid $color-main;
  }
}

.rightColumn {
  display: flex;
  justify-content: flex-start;
  max-width: 620px;

  @include small {
    flex-wrap: wrap;
  }
}
.rightColumnDetail {
  margin-left: 20px;

  @include small {
    margin: 0;
  }
}

.rightColumnButton {
  margin-left: -10px;

  @include small {
    margin-left: 60%;
  }
}
.rightColumnImage {
  margin-bottom: 20px;
}
.widget {
  max-width: 462px;
}

.leftFeature {
  position: relative;
}
.leftFeatureBackLine {
  position: absolute;
  top: 30px;
  right: auto;
  bottom: auto;
  left: 30px;
  z-index: -1;
  width: 100%;
  height: 100%;
  margin: auto;
  border: 1px solid $color-primary;

  @include small {
    left: 0;
  }
}
.leftFeatureButton {
  margin: 52px 0 47px;
  text-align: right;
}

.sectionPoint {
  position: relative;
  font-size: 12px;
  text-align: center;
}
.centerPoint {
  position: absolute;
  top: -200px;
  right: 0;
  left: 0;
  width: 1px;
  height: 180px;
  margin: auto;
  background: $color-main;

  &::after {
    position: absolute;
    right: 50%;
    bottom: -5px;
    width: 20px;
    height: 20px;
    content: '';
    background: $color-secondary;
    border-radius: 50%;
    transform: translate(50%, 0);
  }
}
.contentSection {
  width: 100%;
  max-width: 700px;
  padding: 50px 0 200px;
  margin: auto;
  text-align: center;

  p {
    max-width: 600px;
    margin: 20px auto;
  }
}

.bigTitle {
  position: relative;
  text-align: center;
}

.bigTitleTwo,
.bigTitleOne {
  position: absolute;
  top: 220px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -5;
  max-width: 100%;
  opacity: 0.08;
}

.bigTitleOne {
  top: 320px;
  font-size: 240px;

  @include small {
    font-size: 50px;
  }
}

.bigTitleTwo {
  top: 220px;
  font-size: 180px;

  @include small {
    font-size: 50px;
  }
}

.timelineSection {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 61px 0 0;
  margin-top: -150px;
  margin-bottom: 50px;

  &::after {
    position: absolute;
    top: 0;
    bottom: 25px;
    left: 50%;
    z-index: -1;
    width: 1px;
    content: '';
    background: #fff;
  }

  @include small {
    flex-wrap: wrap;
    &::after {
      left: 0;
    }
  }
}

.timelineBlock {
  position: relative;
  max-width: 50%;

  &::after {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 80px;
    height: 1px;
    content: '';
    background: #fff;
  }

  &::before {
    position: absolute;
    top: -9px;
    width: 18px;
    height: 18px;
    content: '';
    background: #ffaf30;
    border-radius: 50%;
  }

  @include small {
    max-width: 90%;
    text-align: left;
    &::after {
      left: 0;
    }
    &::before {
      left: 0;
    }
  }
}
.timelineBlock.oddTimeline {
  align-self: flex-start;
  padding: 0 90px 0 20px;

  &::after {
    right: 0;
  }

  &::before {
    right: -9px;
  }

  @include small {
    padding: 20px;
    text-align: left;
  }
}
.timelineBlock.evenTimeline {
  align-self: flex-end;
  padding: 0 20px 0 90px;

  &::after {
    left: 0;
  }

  &::before {
    left: -9px;
  }

  @include small {
    align-self: flex-start;
    padding: 20px;
    text-align: left;
  }
}

.oddTimeline {
  text-align: right;
}
.evenTimeline {
  text-align: left;
}

.timelineButtonsSection {
  position: relative;
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 600px;
  max-width: 100%;
  margin: 100px auto 0;

  @include small {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.timelineButtonLeft {
  &::after {
    position: absolute;
    top: 25px;
    left: 50%;
    z-index: -1;
    width: 80px;
    height: 1px;
    content: '';
    background: #fff;
  }

  &::before {
    position: absolute;
    top: 17px;
    left: 292px;
    width: 18px;
    height: 18px;
    content: '';
    background: #ffaf30;
    border-radius: 50%;
  }

  @include small {
    margin: 20px auto;
    &::after,
    &::before {
      display: none;
    }
  }
}

.timelineButtonRight {
  &::after {
    position: absolute;
    top: 25px;
    right: 50%;
    z-index: -1;
    width: 80px;
    height: 1px;
    content: '';
    background: #fff;
  }
}
</style>
