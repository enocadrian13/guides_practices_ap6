const Config = (function () {
  let instance;

  function createConfig(settings) {
    return { ...settings };
  }

  return {
    getInstance: function (settings) {
      if (!instance) {
        instance = createConfig(settings);
      }
      return instance;
    }
  };
})();

const config1 = Config.getInstance({ theme: "dark" });
const config2 = Config.getInstance({ theme: "light" });

console.log(config1 === config2);
console.log(config2.theme);