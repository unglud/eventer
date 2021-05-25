import { buildClient } from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log(`I am in the component`, currentUser);

  return <h1>Landing Page of</h1>;
};

LandingPage.getInitialProps = async (context) => {
  const { data } = await buildClient(context).get("/api/users/currentuser");
  return data;
};

export default LandingPage;
