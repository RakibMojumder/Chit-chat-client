import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SetAvatar from "../pages/SetAvatar";
import ChatContainer from "../pages/ChatContainer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: 'chat',
        element: <ChatContainer />
    },
    {
        path: '/setAvatar',
        element: <SetAvatar />
    }
]);

export default router;