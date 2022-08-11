import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import AllPosts from "./pages/AllPosts";
import NewPost from "./pages/NewPost";
import UserPosts from "./pages/UserPosts";
import EditPost from "./pages/EditPost";
import UserDrafts from "./pages/UserDrafts";
import NavigationBar from "./components/NavigationBar";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="posts/:uid"
          element={
            <ProtectedRoute>
              <UserPosts />
            </ProtectedRoute>
          }
        />
        <Route
          path="drafts"
          element={
            <ProtectedRoute>
              <UserDrafts />
            </ProtectedRoute>
          }
        />
        <Route
          path="posts/new"
          element={
            <ProtectedRoute>
              <NewPost />
            </ProtectedRoute>
          }
        />
        <Route
          path="posts/edit/:pid"
          element={
            <ProtectedRoute>
              <EditPost />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
