import axios from "axios";

export const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    return axios.create({
      baseURL:
        "http://nginx-ingress-1621591142-controller.default.svc.cluster.local",
      headers: req.headers,
    });
  }

  return axios.create();
};
