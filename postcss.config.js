const config = {
  plugins: [
    require('postcss-custom-properties')({
      preserve: false,
    }),
    require('postcss-import')({}),
    require('precss')({}),
    require('autoprefixer')({
      cascade: false,
    }),
  ],
};

module.exports = config;
