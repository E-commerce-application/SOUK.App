import axios from "axios";

const BASE_URL = "http://localhost:7000/api/";
const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDFhMjRlN2RiZWIyY2Q1MGM5OGFmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTEyODU0MywiZXhwIjoxNjQxMzg3NzQzfQ.LlNAVj65-K99F3AratF3z_1d46RngkH2ajgS-GuSNgY";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
 