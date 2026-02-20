import { useEffect, useState } from "react";
import API from "./api";
import BookmarkForm from "./components/BookmarkForm";
import BookmarkList from "./components/BookmarkList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchBookmarks = async () => {
    try {
      setLoading(true);
      const res = await API.get("/");
      setBookmarks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  // 🔍 Search filter only
  const filteredBookmarks = bookmarks.filter((bookmark) =>
    (bookmark.title || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
  <div className={dark ? "dark" : ""}>
    <Navbar dark={dark} setDark={setDark} />

    <main className="container">
      <h1 className="title">Smart Bookmark Manager</h1>

<div className="section">
      <input
        className="search"
        placeholder="Search bookmarks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <BookmarkForm
        fetchBookmarks={fetchBookmarks}
        editing={editing}
        setEditing={setEditing}
      />
</div>
      {loading ? (
        <p>Loading bookmarks...</p>
      ) : (
        <div className="section"><BookmarkList
          bookmarks={filteredBookmarks}
          fetchBookmarks={fetchBookmarks}
          setEditing={setEditing}
        />
        </div>
      )}
    </main>

    <Footer />
  </div>
);
}

export default App;