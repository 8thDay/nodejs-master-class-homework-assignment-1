/*
 *  Set up and export variables for the development and production environments
 */

const environments = {
  'development' : {
    'port' : 3000,
    'envName' : 'development'
  },

  'production' : {
    'port' : 5000,
    'envName' : 'production'
  }
};

// Get the environment from the command-line (if any)
const requestedEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the requested environment is one of those defined above, else default to development
const environmentToExport = typeof(environments[requestedEnvironment]) == 'object' ? environments[requestedEnvironment] : environments.development;

module.exports = environmentToExport;
