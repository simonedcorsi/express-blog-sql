const posts = require('../data/posts');

function index(req, res) {
    
    let filteredPosts = posts;

    // res.pippo();//errore

    if (req.query.tags){
        filteredPosts = posts.filter(post => {
            
           return post.tags.includes(req.query.tags);
        });
    }
    res.json(filteredPosts);
}

function show(req, res) {
    
    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post not found"
        });
    }
   
    res.json(post);
}

function store(req, res) {
    const newId = posts[posts.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags : req.body.tags
    }

    posts.push(newPost);

    console.log(posts);

    res.status(201).json(newPost);
}

function update(req, res) {
    
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404)

        return res.json(
            {
                status: 404,
                error: "Not found",
                message: 'Post not found'
            }
        );
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(posts);

    res.json(post);
}

function patch(req, res) {
    
}

function destroy(req, res) {
    
    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    posts.splice(posts.indexOf(post), 1);

    res.sendStatus(204);

}

module.exports = { index, show, store, update, patch, destroy };