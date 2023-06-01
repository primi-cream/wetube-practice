//Fake video
let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createAt: "2 minutes ago",
        views: 59,
        id:1, 
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createAt: "2 minutes ago",
        views: 59,
        id:2, 
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createAt: "2 minutes ago",
        views: 59,
        id:3, 
    },
];

export const home = (req, res) => {
    return res.render("home",{pageTitle : "Home", videos});
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