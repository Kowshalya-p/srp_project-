module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost
      port: 7545, // Change this to match your Ganache port
      network_id: "*", // Match any network ID
    }
  },
  compilers: {
    solc: {
      version: "0.5.16", // Ensure this matches your Solidity version
    }
  }
};
