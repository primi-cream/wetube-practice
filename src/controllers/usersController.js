import User from "../models/User";

export const watch = (req, res) => {
    return res.send("watch");
}
export const logout = (req, res) => {
    return res.send("logout");
}
export const edit = (req, res) => {
    return res.send("users edit");
}
export const remove = (req, res) => {
    return res.send("users delete");
}
export const getJoin = (req, res) => {
    return res.render("join", {pageTitle: "Join"});
}

export const postJoin = async (req, res) => {
    const {name, username, email, password, password2, location} = req.body;
    const pageTitle = "Join";
    if(password !== password2) {
        return res.status(400).render("join", {
            pageTitle,
            errorMessage: "password confirmation does not match.",
        });
    }
    const exists = await User.exists({ $or: [{username}, {email}]});
    if(exists){
        return res.status(400).render("join", {
            pageTitle,
            errorMessage:"This username/email is already taken.",
        });
    }
    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    return res.redirect("/login");
}

export const login = (req, res) => {
    res.end();
}