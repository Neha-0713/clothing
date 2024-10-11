"use client";

import { Amplify } from "aws-amplify";

export const authConfig = {
  Auth: {
    userPoolId: String(process.env.NEXT_PUBLIC_USER_POOL_ID),
    userPoolWebClientId: String(process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID), // This should be `userPoolWebClientId`
    // Enable SSR (server-side rendering)
    ssr: true,
  },
};

// Configure Amplify
Amplify.configure(authConfig);

export default function ConfigureAmplifyClientSide() {
  return null;
}
