/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "", // Matches your repository name
  assetPrefix: "", // Ensures assets are loaded correctly
  distDir: "out", // Output directory for the static export
  images: {
    unoptimized: true, // Disables Image Optimization API (required for static export)
  },
  trailingSlash: true, // Ensures trailing slashes in URLs
};

module.exports = nextConfig;