//Fake video
let video

export const home = (req, res) => {
    return res.render("home");
}

export const watch = (req, res) => {
    return res.send("watch");
}

export const edit = (req, res) => {
    return res.send("video edit");
}

export const upload = (req, res) => {
    return res.send("video upload");
}

export const remove = (req, res) => {
    return res.send("delete video");
}