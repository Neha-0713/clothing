import { redirect } from "next/navigation";
import { 
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  resendSignUpCode 
} from "aws-amplify/auth";
import { getErrorMessage } from "@/utils/get-error-message";


export async function handleSignUp(formData) {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username: String(formData.get("email")),
        password: String(formData.get("password")),
        options: {
          userAttributes: {
            email: String(formData.get("email")),
            name: String(formData.get("name")),
          },
          // optional
          autoSignIn: true,
        },
      });
    } catch (error) {
      return getErrorMessage(error);
    }
    window.location.href = "/auth/confirm-signup";
  }
  