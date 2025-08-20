// src/mixpanel.js
import mixpanel from "mixpanel-browser";

mixpanel.init("5248efa97c1d172da726740598f101fe", {
  debug: true, // set false in production
  track_pageview: true, // auto-track page views
});

export default mixpanel;
