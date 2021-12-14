import Head from "next/head";
import ResgisterBody from "../components/RegisterBody/ResgisterBody";
import { useRouter } from "next/router";
import { isAuthenticated } from "../helpers/auth";

function Register() {
  const router = useRouter();

  if (isAuthenticated()) {
    router.push("/home");
  }

  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <ResgisterBody />
    </div>
  );
}

export default Register;
