import Head from "next/head";
import Login from "../components/Log-in/Log-in";
import { useRouter } from "next/router";
import { isAuthenticated } from "../helpers/auth";

export default function Home() {
  const router = useRouter();

  if (isAuthenticated()) {
    router.push("/home");
  }

  return (
    <div>
      <Head>
        <title>Sign-in</title>
      </Head>
      <Login />
    </div>
  );
}
