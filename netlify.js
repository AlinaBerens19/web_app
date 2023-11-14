// netlify.js

// Load necessary modules before the build script runs
process.env.NODE_OPTIONS = JSON.stringify({
    fallback: {
      crypto: false,
      path: false,
      fs: false,
      os: false,
    },
  });
  