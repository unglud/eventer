import { get } from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(`I am in the component`, currentUser);

  return <h1>Landing Page of</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    const {
      data,
    } = await get(
      "http://nginx-ingress-1621591142-controller.default.svc.cluster.local/api/users/currentuser",
      { headers: req.headers }
    );
    return data;
  } else {
    const { data } = await get("/api/users/currentuser");
    return data;
  }
};

export default LandingPage;
