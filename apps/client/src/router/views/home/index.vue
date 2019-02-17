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
    <section>
      <div :class="$style.contentBanner">
        <div class="content_banner_inner">
          <div :class="$style.bannerLeftBg" />
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
        <span class="banner_big_title">RELIABILITY</span>
      </div>
      <div class="layout_content wow fadeInUp" data-wow-offset="150">
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
                <p>Satisfied customers daily</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div :class="$style.rightColumn">
            <div class="post_blog_image">
              <img src="@assets/images/laptop-repair.jpeg" alt="" width="270" />
            </div>
            <div :class="$style.rightColumnDetail">
              <h4>Get the juice back for your Mac and Windows PC</h4>
              <p>Laptops and PC</p>
              <BaseButton plane @click="showModal({ id: 'signup' })">
                GET STARTED
              </BaseButton>
            </div>
          </div>
          <div :class="$style.pipeRight">
            <div :class="$style.pipeColumn">
              <div :class="$style.pipeRightBody">
                <h2 :class="$style.pipeHead">20+ </h2>
                <p>Brands of computers we service</p>
              </div>
            </div>
            <div :class="$style.pipeColumn">
              <div :class="$style.pipeRightBody">
                <h2 :class="$style.pipeHead">20</h2>
                <p>Engineers on ground to attend to your requests</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="content_section_2 section_viewer" data-section="skills">
        <div class="container">
          <div class="layout_content wow fadeInUp" data-wow-offset="150">
            <h1>Complex Faults, simple fixes</h1>
            <span class="banner_big_title_3">TRUSTWORTHY</span>
            <p>
              Our approach to repairs is rooted in a deep understanding of the
              devices. Nothing is too complex to be fixed. The world’s toughest
              problems are solved with sustained incremental small fixes.
            </p>
          </div>
        </div>
        <div class="section_point home_second_section">
          <span />
        </div>
      </div>
      <div class="content_section_4 section_viewer" data-section="online">
        <div class="container">
          <div class="layout_content wow fadeInUp" data-wow-offset="150">
            <h1>Software == Hardware</h1>
            <p>
              We are proficient in all round care for your devices. From
              software faults to physical hardware faults, we got you covered.
              Whatever the issue, no need to panic. Trust us to know what your
              device wants.
            </p>
          </div>
        </div>
        <div class="clear" />
        <div class="offline_top_bg" />
      </div>
      <div class="home_timeline_section">
        <div class="container">
          <div class="timeline_section_row">
            <div class="timeline_block odd_timeline">
              <div class="wow fadeInLeft">
                <h1>A data-driven approach to repairs</h1>
                <p>
                  When we receive a device, we run a complete system
                  diagnostics. We ensure we have all the data necessary to get
                  an accurate diagnostics of the fault.
                </p>
              </div>
            </div>
            <div class="clear" />
            <div class="timeline_block even_timeline">
              <div class="wow fadeInRight">
                <h1>Precise, Methodical, and Scientific</h1>
                <p>
                  Using a suite of state of the art software and hardware tools,
                  we methodically identify the precise issue and with scientific
                  precision go about fixing it.
                </p>
              </div>
            </div>
            <div class="clear" />
            <div class="timeline_block odd_timeline">
              <div class="wow fadeInLeft">
                <h1>World-class Service, competitive Price</h1>
                <p>
                  We’re consistently striving to give our customers the best
                  quality service possible while maintaining a price regime that
                  leave our customers grinning every time.
                </p>
              </div>
            </div>
            <div class="clear" />
            <div class="timeline_buttons_section">
              <div class="timeline_buttons timeline_button_left">
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
              <div class="timeline_buttons timeline_button_right">
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
            <div class="clear" />
          </div>
        </div>
        <div class="timeline_section_bg" />
        <div class="footer_top_bg" />
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
}

.pipeLeft {
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  padding-bottom: 50px;
  text-align: right;
}
.pipeRight {
  display: flex;
  justify-content: flex-start;
  padding-top: 50px;
  padding-left: 50px;
  text-align: left;
}

.pipeBottom {
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  text-align: right;
}
.pipeLeftBody {
  padding-right: 20px;
}
.pipeRightBody {
  padding-left: 20px;
}
.pipeHead {
  color: $color-secondary;
}
.pipeColumn {
  position: relative;
  max-width: 200px;
  margin: 0 20px;

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    content: '';
    border: 1px solid #fff;
  }
}

.rightColumn {
  display: flex;
  justify-content: flex-start;
  max-width: 620px;
}
.rightColumnDetail {
  margin-left: 20px;
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
  border: 1px solid #3359df;
}
.leftFeatureButton {
  margin: 52px 0 47px;
  text-align: right;
}
</style>
