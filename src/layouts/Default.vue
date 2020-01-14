<template>
  <div class="layout">
    <div id="content-wrapper">
      <Header />
      <vue-cookie-accept-decline
        :ref="'myPanel1'"
        :elementId="'myPanel1'"
        :debug="false"
        :position="'bottom-left'"
        :type="'floating'"
        :disableDecline="false"
        :transitionName="'slideFromBottom'"
        :showPostponeButton="false"
        @status="cookieStatus"
        @clicked-accept="cookieClickedAccept"
        @clicked-decline="cookieClickedDecline"
      >
        <!-- Optional -->
        <div slot="postponeContent">
          &times;
        </div>

        <!-- Optional -->
        <div slot="message">
          We use cookies to ensure you get the best experience on our website.
          <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
        </div>

        <!-- Optional -->
        <div slot="declineContent">
          OPT OUT
        </div>

        <!-- Optional -->
        <div slot="acceptContent">
          GOT IT!
        </div>
      </vue-cookie-accept-decline>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
import VueCookieAcceptDecline from "vue-cookie-accept-decline";

export default {
  components: {
    Footer,
    Header,
    VueCookieAcceptDecline
  }
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#content-wrapper {
  flex: 1 0 auto;
  max-width: 950px;
  width: 90vw;
  margin: 0 auto;
}
</style>
