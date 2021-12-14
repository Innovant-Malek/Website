import Head from "next/head";
import FeedBody from "../components/FeedBody/FeedBody";
import FeedFooter from "../components/FeedFooter/FeedFooter";

import { isAuthenticated } from "../helpers/auth";

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      {isAuthenticated() ? (
        <div>
          <FeedBody />
          <FeedFooter />
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Sorry you are not loged-in</h1>
      )}
    </div>
  );
}

export default Home;
