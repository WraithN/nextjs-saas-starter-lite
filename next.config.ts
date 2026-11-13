import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence the multi-lockfile workspace-root inference warning when this
  // repo lives inside a dev machine that has stray lockfiles in parent dirs.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
