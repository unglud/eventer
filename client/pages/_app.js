import "bootstrap/dist/css/bootstrap.css";
import { buildClient } from "../api/build-client";

const App = ({ Component, pageProps, currentUser }) => {
  return (
    <>
      <h1>Header {currentUser.email}</h1>
      <Component {...pageProps} />
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const { data } = await buildClient(ctx).get("/api/users/currentuser");
  const pageProps =
    (Component.getInitialProps && (await Component.getInitialProps(ctx))) || {};

  return { pageProps, ...data };
};

export default App;
