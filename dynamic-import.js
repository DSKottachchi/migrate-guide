import pm2 from 'pm2';

(async () => {
  const ecosystem = await import("./ecosystem.config.cjs");

  pm2.connect((err) => {
    if (err) {
      console.error(err);
      process.exit(2);
    }

    pm2.start(ecosystem.default, (err) => {
      if (err) {
        console.error(err);
        process.exit(2);
      }
      pm2.disconnect();
    });
  });
})();
