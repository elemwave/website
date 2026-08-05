import type { NextConfig } from "next";

// Hosts the dev server accepts cross-origin requests from, comma-separated.
// Environment-specific (the value differs per developer setup), so it is
// declared where the environment is, not here.
const allowedDevOrigins = (process.env.ALLOWED_DEV_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  // The site has no server-side behaviour, so it ships as static files to the
  // S3 origin behind CloudFront (see specs/decisions/ADR-0003).
  output: "export",
  // Pin the workspace root to this app (a stray lockfile in $HOME otherwise
  // makes Next infer the wrong root and warn during build).
  turbopack: {
    root: __dirname,
  },
  allowedDevOrigins,
};

export default nextConfig;
