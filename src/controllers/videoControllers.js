import Video from "../models/Video";

//globalRouter
// <promise 를 이용한 DB 호출>
export const home = async (req, res) => {
  const videos = await Video.find({}).sort({ createAt: "desc" });
  return res.render("home", { pageTitle: "Home", videos });
};

//videoRouter
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  return res.render("watch", { pageTitle: video.title, video });
};
//form 을 보여줌
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
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

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      createAt: Date.now(),
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const search = (req, res) => {
  const { keyword } = req.query;
  if (keyword) {
    //
  }
  return res.render("search", { pageTitle: "Search" });
};
