import "../index.css";
import Root from "../layouts/Root.tsx";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx"
import ProtectedRoutes from "./ProtecetdRoutes.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import Card from "../pages/Card.tsx";
import LikeCards from "../pages/LikeCards.tsx";
import MyCards from "../pages/MyCards.tsx";
import Profile from "../pages/Profile.tsx";
import CreateCard from "../pages/CreateCard.tsx";
import NewCards from "../pages/Cards.tsx";
import Comments from "../pages/Comments.tsx";
import About from "../pages/About.tsx";
import Help from "../pages/Help.tsx";
import CardEdit from "../pages/CardEdit.tsx";
import CRM from "../pages/CRM.tsx";
import UserEdit from "../pages/UserEdit.tsx";
import Cards from "../pages/Cards.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: "/",
        children: [
            { index: true, element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            {
                path: "/cardedit/:id", element:
                    <ProtectedRoutes>
                        <CardEdit />
                    </ProtectedRoutes>
            },
            {
                path: "/useredit/:id", element:
                    <ProtectedRoutes>
                        <UserEdit />
                    </ProtectedRoutes>
            },
            {
                path: "/cards", element:
                    <ProtectedRoutes>
                        <Cards />
                    </ProtectedRoutes>
            },
            {
                path: "/cards/:id", element: (
                    <ProtectedRoutes>
                        <Card />
                    </ProtectedRoutes>
                )
            },
            {
                path: "/likecards", element: (
                    <ProtectedRoutes>
                        <LikeCards />
                    </ProtectedRoutes>
                )
            },
            {
                path: "/comments", element: (
                    <ProtectedRoutes>
                        <Comments cardId={""} />
                    </ProtectedRoutes>
                )
            },
            {
                path: "/mycards", element: (
                    <ProtectedRoutes>
                        <MyCards />
                    </ProtectedRoutes>
                )
            },
            {
                path: "/createcard", element: (
                    <ProtectedRoutes>
                        <CreateCard />
                    </ProtectedRoutes>
                )
            },
            {
                path: "/profile", element: (
                    <ProtectedRoutes>
                        <Profile />
                    </ProtectedRoutes>
                )
            },
            {
                path: "/about", element: (
                    <ProtectedRoutes>
                        <About />
                    </ProtectedRoutes>
                )
            },
            {
                path: "/help", element: (
                    <ProtectedRoutes>
                        <Help />
                    </ProtectedRoutes>
                )
            },
            {
                path: "/crm", element: (
                    <ProtectedRoutes>
                        <CRM />
                    </ProtectedRoutes>
                )
            },
        ],
    },
]);

export default router