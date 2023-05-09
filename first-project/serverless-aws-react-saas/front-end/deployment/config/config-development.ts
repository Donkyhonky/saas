/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://dev.domain.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-central-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '3d7r00shmpt9pke0nuolmn2ka3',
  USER_POOL_ID: 'eu-central-1_z9fELjyW2',
  IDENTITY_POOL_ID: 'eu-central-1:ed881fb5-c5d7-4aaa-908a-ef3ff0b4df80',
  GRAPHQL_ENDPOINT: 'https://d4rhyx5cvzebje6nwf2mdjztbe.appsync-api.eu-central-1.amazonaws.com/graphql',
};

export default configDevelopment;
