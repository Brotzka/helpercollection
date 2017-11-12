// Lazy laoding is used to resolve the paths
const Home = resolve => require(['./components/pages/home.vue'], resolve);
const Blog = resolve => require(['./components/pages/blog/all-posts.vue'], resolve);
const SinglePost = resolve => require(['./components/pages/blog/single-post.vue'], resolve);

const routes = [
    { path: '/', component: Home },
    { path: '/post', component: SinglePost },
    { path: '/list', component: Blog }
];

module.exports = {
    routes
};
