import { Config } from "@baltimorecounty/javascript-utilities";

const { setConfig } = Config;
const parksApiRoot = "api/hub/structuredContent/parks";
const testHost = `https://testservices.baltimorecountymd.gov/${parksApiRoot}`;
const localHost =
  window.location.hostname.indexOf("beta") > -1
    ? testHost
    : `http://localhost:54727/${parksApiRoot}`;
const prodHost = `https://services.baltimorecountymd.gov/${parksApiRoot}`;

/**
 * Run Startup Code
 */
const Run = () => {
  setConfig({
    local: {
      parksApi: localHost,
    },
    development: {
      parksApi: testHost,
    },
    staging: {
      parksApi: testHost,
    },
    production: {
      parksApi: prodHost,
    },
  });
};

export { Run };
