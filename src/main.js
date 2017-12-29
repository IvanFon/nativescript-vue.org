document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',

    data: {
      modalVisible: false,
      isMobile: false,
      navOpen: false,
    },
    created() {
      this._resizeListener = () => {
        this.isMobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768
      };
      window.addEventListener('resize', this._resizeListener);
      this._resizeListener();
    },
    destroyed() {
      window.removeEventListener('resize', this._resizeListener)
    },
    methods: {
      switchLang(new_lang) {
        window.location.href = window.location.href + '/' + new_lang === 'en' ? '' : new_lang
      }
    }
  });
});