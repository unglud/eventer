import "bootstrap/dist/css/bootstrap.css";
import { buildClient } from "../api/build-client";
import { Header } from "../components/header";

const App = ({ Component, pageProps, currentUser }) => {
  return (
    <div className="container">
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const { data } = await buildClient(ctx).get("/api/users/currentuser");
  const pageProps =
    (Component.getInitialProps && (await Component.getInitialProps(ctx))) || {};

  return { pageProps, ...data };
};

export default App;
