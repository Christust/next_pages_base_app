const logOut = () => {
  localStorage.removeItem("state");
  window.location.reload(true);
};

module.exports = {
  logOut,
};
