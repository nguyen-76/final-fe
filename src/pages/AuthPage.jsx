import SignupForm from "../components/Form/SignUpForm";
import { useRecoilValue } from "recoil";
import authScreenAtom from "../app/authAtom";
import LoginForm from "../components/Form/LoginForm";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  return <>{authScreenState === "login" ? <LoginForm /> : <SignupForm />}</>;
};

export default AuthPage;
