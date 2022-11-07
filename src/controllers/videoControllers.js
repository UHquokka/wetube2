//globalRouter
export const treding = (req, res) => res.send("Home Page Videos");
export const search = (req, res) => res.send("Search Videos");

//videoRouter
export const see = (req, res) => {
  console.log(req.params);
  return res.send("Videos");
};
export const edit = (req, res) => res.send("Edit Videos");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
