import axios from "axios";

const CLIENT_ID = process.env.CTP_CLIENT_ID!;
const CLIENT_SECRET = process.env.CTP_CLIENT_SECRET!;
const PROJECT_KEY = process.env.CTP_PROJECT_KEY!;
const AUTH_URL = `${process.env.CTP_AUTH_URL}/oauth/token`;

export const getAccessToken = async () => {
  try {
    const response = await axios.post(
      AUTH_URL,
      new URLSearchParams({
        grant_type: "client_credentials",
        scope: `view_products:${PROJECT_KEY} manage_project:${PROJECT_KEY}`,
      }),
      {
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};
