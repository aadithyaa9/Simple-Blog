let posts = []; // In-memory database

export const getHome = (req, res) => {
    res.render("index", { posts });
};

export const getNewPost = (req, res) => {
    res.render("new");
};

export const addPost = (req, res) => {
    const newPost = { id: Date.now().toString(), title: req.body.title, content: req.body.content };
    posts.push(newPost);
    res.redirect("/");
};

export const getEditPost = (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.status(404).send("Post not found"); // Handle missing post
    res.render("edit", { post });
};

export const updatePost = (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.status(404).send("Post not found"); // Handle missing post
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect("/");
};

export const deletePost = (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id);
    res.redirect("/");
};
