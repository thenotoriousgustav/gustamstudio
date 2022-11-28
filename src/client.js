import client from "@sanity/client";

export default client({
  projectId: "4z1g1e4f",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-06-28",
});
