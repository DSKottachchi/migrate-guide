module.exports = {
    apps: [
      {
        name: 'client',
        script: './client/server.js',
        env: {
          NODE_ENV: 'development',
          // You can add more environment-specific variables here if needed
        },
        env_production: {
          NODE_ENV: 'production',
          // You can add more environment-specific variables here if needed
        },
      },
      {
        name: 'server',
        script: './server/server.js',
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  