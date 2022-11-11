import Video from "../models/Video";

//globalRouter

// <callback 함수를 이용한 DB 호출>
// export const home = (req, res) => {
//   Video.find({}, (error, videos) => {
//     return res.render("home", { pageTitle: "Home", videos: [] });
//   });
// };

// <promise 를 이용한 DB 호출>
export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos: [] });
  } catch {
    return res.render("server-error");
  }
};

//videoRouter
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", {
    pageTitle: `Watch Video ${video.title}`,
    video,
  });
};
//form 을 보여줌
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
//변경사항을 저장해줌.
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  return res.redirect("/");
};
