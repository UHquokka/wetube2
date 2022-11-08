let videos = [
  {
    title: "BTS Billboard",
    rating: 1,
    views: 4221,
    comments: 2412412412412421,
    createAt: "2 minutes ago",
    id: 1,
  },
  {
    title: "JIMIN larious",
    rating: 34,
    views: 12431,
    comments: 12,
    createAt: "2 minutes ago",
    id: 2,
  },
  {
    title: "JungKook and Chalie",
    rating: 5,
    views: 1315,
    comments: 325,
    createAt: "2 minutes ago",
    id: 3,
  },
];

//globalRouter
export const treding = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

//videoRouter
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `Watch Video ${video.title}`,
    video,
  });
};
//form 을 보여줌
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
//변경사항을 저장해줌.
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
