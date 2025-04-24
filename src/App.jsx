import { useState, useEffect } from "react";
import authService from "./appwrite/authService/auth";
import postsService from "./appwrite/databaseService/postService";
import reelsService from "./appwrite/databaseService/reelsService";
import storiesService from "./appwrite/databaseService/storiesService";
import { login, logout } from "./features/auth/auth";
import { setPosts, deletePosts } from "./features/posts/posts";
import { setReels, deleteReels } from "./features/reels/reels";
import { setStories, deleteStories } from "./features/stories/stories";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer, Sidebar } from "./components";
import { useNavigate } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    const authPromise = authService.getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login(userdata));
        } else {
          dispatch(logout());
          navigate('/login');
        }
      })
      .catch((error) => {
        console.log("App.jsx :: useEffect :: authPromise :: error: ", error);
        throw error;
      });

      const postsPromise = postsService.getAllPosts()
      .then((posts) => {
        if(posts) {
          dispatch(setPosts(posts));
        } else {
          dispatch(deletePosts());
        }
      })
      .catch((error) => {
        console.log("App.jsx :: useEffect :: postsPromise  :: error: ", error);
        throw error;
      });

      const reelsPromise = reelsService.getAllReels()
      .then((reels) => {
        if(reels) {
          dispatch(setReels(reels));
        } else {
          dispatch(deleteReels());
        }
      })
      .catch((error) => {
        console.log("App.jsx :: useEffect :: reelsPromise  :: error: ", error);
        throw error;
      });

      const storiesPromise = storiesService.getAllStories()
      .then((stories) => {
        if(stories) {
          dispatch(setStories(stories));
        } else {
          dispatch(deleteStories());
        }
      })
      .catch((error) => {
        console.log("App.jsx :: useEffect :: storiesPromise  :: error: ", error);
        throw error;
      });

      Promise.all([authPromise, postsPromise, reelsPromise, storiesPromise])
      .finally(() => setLoading(false));
      
      setLoading(false);
  }, [dispatch]);
// console.log("authStatus: ", authStatus);

  if(!loading) {
    {console.log('in false loading')}
    return (
      <div className="w-full bg-custom-white2">
        <main>
          <Sidebar />
          <div>
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    )
  } else {
    return (
      <div>
    {console.log('in true loading')}

        <h1>...loading</h1>
      </div>
    )
  }
}

export default App;
