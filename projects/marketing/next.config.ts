import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Minimal, self-contained server bundle for the Docker runtime image.
  output: "standalone",
  // Pin the workspace root to this app (a stray lockfile in $HOME otherwise
  // makes Next infer the wrong root and warn during build).
  turbopack: {
    root: __dirname,
  },
  allowedDevOrigins: ["test.localhost.elemwave.com"],
};

export default nextConfig;
