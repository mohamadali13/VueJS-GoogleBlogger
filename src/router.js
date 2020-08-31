import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from './components/pages/Home';
import Posts from './components/pages/Posts';
import Post from './components/pages/Post';
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";

const routes = [
    { path: '/', component: Home },     
    { path: '/Posts/:blogid', component: Posts, name: 'postsOfBlog'},
    { path: '/Posts/:blogid/Post/:postid', component: Post },
    { path: '/Posts/:blogid/addPost', component: AddPost, name: 'addPost'},
    { path: '/Posts/:blogid/Post/:postid/editPost', component: EditPost, name: 'editPost' },
       
];
const router = new VueRouter({
    mode: 'history',
    routes
});
export default router;