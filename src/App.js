import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import AllPosts from "./pages/AllPosts";
import NewPost from "./pages/NewPost";
import UserPosts from "./pages/UserPosts";
import EditPost from "./pages/EditPost";
import UserDrafts from "./pages/UserDrafts";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllPosts />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      >
        <Route path="posts/:uid" element={<UserPosts />} />
        <Route path="drafts" element={<UserDrafts />}/>
        <Route path="posts/new" element={<NewPost />} />
        <Route path="posts/edit/:pid" element={<EditPost />} /> 
      </Route>
      <Route
        path="*"
        element={
          <>
            <h1> Page Not Found </h1>
          </>
        }
      />
    </Routes>
  );
}

export default App;
