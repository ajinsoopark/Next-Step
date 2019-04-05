const Auth = {
  authenticateUser: token => {
    localStorage.setItem("token", token);
  },
  isUserAuthenticated: () => {
    return localStorage.getItem("token") !== null;
  },
  deauthenticateUser: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenID")
  },
  getToken: () => {
    return localStorage.getItem("token");
  },
  authenticateUserID: token => {
    localStorage.setItem("tokenID", token);
  },
   getTokenID: () => {
    return localStorage.getItem("tokenID");
  },
};

export default Auth;
