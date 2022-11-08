//globalRouter
export const treding = (req, res) => {
  const videos = [
    {
      title: "BTS Billboard",
      rating: 1,
      comments: 2412412412412421,
      createAt: "2 minutes ago",
      id: 2324,
    },
    {
      title: "JIMIN larious",
      rating: 34,
      comments: 12,
      createAt: "2 minutes ago",
      id: 32,
    },
    {
      title: "JungKook and Chalie",
      rating: 5,
      comments: 325,
      createAt: "2 minutes ago",
      id: 24,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
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
