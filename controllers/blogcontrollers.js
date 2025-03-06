let posts = [];

export const getHome = (req, res) => {
    res.render("index", { posts });
};

export const getNewPost = (req, res) => {
    res.render("new");
};

export const addPost = (req, res) => {
    const newPost = { id: Date.now(), title: req.body.title, content: req.body.content };
    posts.push(newPost);
    res.redirect("/");
};

export const getEditPost = (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render("edit", { post });
};

export const updatePost = (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect("/");
};

export const deletePost = (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect("/");
};
