/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));
const output = process.env.OUTPUT;
if (output !== "standalone" && output !== "export" && output !== undefined) {
  throw new Error(
    "invalid OUTPUT env variable value: can be 'standalone' or 'export', or leave empty"
  );
}

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  // Uncomment this if deploying to Docker
  output,

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },

  experimental: {
    appDir: true,
  },

  images: {
    domains: ["assets.anto.pt"],
  },
};
export default config;
