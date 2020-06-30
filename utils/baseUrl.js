const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://netlify.app"
    : "http://localhost:3000";

export default baseUrl;
