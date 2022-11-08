const fakeUser = {
  username: "YOUJUNG",
  loggedIn: true,
};

//globalRouter
export const treding = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser: fakeUser });
export const search = (req, res) => res.send("Search Videos");

//videoRouter
export const see = (req, res) => {
  console.log(req.params);
  return res.render("watch", { pageTitle: "Watch Video" });
};
export const edit = (req, res) =>
  res.render("edit", { pageTitle: "Edit Video" });
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
