export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      import('vue-the-mask').then(({ mask }) => {
        nuxtApp.vueApp.directive('mask', mask);
      });
    }
  });
  