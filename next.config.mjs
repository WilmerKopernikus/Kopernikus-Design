/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Activa el modo estricto de React
    swcMinify: true, // Usa SWC para la minificación (mejor rendimiento)
    experimental: {
      appDir: true, // Activa el App Router (si usas la nueva estructura de Next.js)
    },
  };
  
  module.exports = nextConfig;
  