//global Router
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Create Account" });
};
export const postJoin = (req, res) => {
  //
};
export const login = (req, res) => res.send("Login");

//user Router
export const editUser = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Delete User");
export const see = (req, res) => res.send("See User Profile");
export const logout = (req, res) => res.send("Log out");
