const PROJECT_ID = 'feraset-case-9d704';
const REGION = 'us-central1';

const LOCAL_URL = `http://127.0.0.1:5001/${PROJECT_ID}/${REGION}/`;
// const PROD_URL  = `https://${FN_NAME}-${PROJECT_ID}-${REGION}.a.run.app`;

export const GET_LOGO_STYLES_URL = `${LOCAL_URL}getLogoStyles`;
export const GENERATE_LOGO_URL = `${LOCAL_URL}generateLogo`;
