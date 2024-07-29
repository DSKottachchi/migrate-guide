module.exports = {
  apps: [
    // {
    //   name: 'client',
    //   script: './client/server.js',
    //   env: {
    //     NODE_ENV: 'development',
    //   },
    //   env_production: {
    //     NODE_ENV: 'production',
    //     // Add more environment variables here if needed
    //   },
    // },
    {
      name: 'server',
      script: './server/index.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        // Add more environment variables here if needed
      },
    },
  ],
};
