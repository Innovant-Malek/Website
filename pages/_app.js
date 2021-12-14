import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import Select from "../components/Select/Select";
import Header from "../components/Header/Header";
import { isAuthenticated } from "../helpers/auth";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {isAuthenticated() ? <Header /> : <Select />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
