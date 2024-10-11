import { authConfig } from "../app/amplify-cognito-config"; 
import { createServerRunner } from "@aws-amplify/adapter-nextjs";

const { runWithAmplifyServerContext } = createServerRunner({
  config: {
    Auth: authConfig,
  },
});

export { runWithAmplifyServerContext };