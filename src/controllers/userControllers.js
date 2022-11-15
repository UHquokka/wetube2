import User from "../models/User";

//global Router
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Create Account" });
};
export const postJoin = async (req, res) => {
  const { name, username, email, password, location } = req.body;
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/login");
};
export const login = (req, res) => res.send("Login");

//user Router
export const editUser = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Delete User");
export const see = (req, res) => res.send("See User Profile");
export const logout = (req, res) => res.send("Log out");
