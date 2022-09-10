export const isLogin = () => {
  if (localStorage.getItem("Name")) {
    return true;
  }

  return false;
};
