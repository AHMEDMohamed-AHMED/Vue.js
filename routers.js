import Home from "./components/Home";
import SignUp from "./components/SignUp";
import {createRouter,createWebHistory} from 'vue-router'
import Login from "./components/Login"
import Add from "./components/Add";
import Update from "./components/Update";
const routes=[

    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },{
        name:'Add',
        component:Add,
        path:'/add'
    },{
        name:'Update',
        component:Update,
        path:'/update/:id'
    }


];
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;

