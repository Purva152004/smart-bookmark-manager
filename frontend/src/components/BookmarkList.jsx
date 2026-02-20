import API from "../api";

function BookmarkList({ bookmarks, fetchBookmarks, setEditing }) {
  const deleteBookmark = async (id) => {
    try {
      await API.delete(`/${id}`);
      fetchBookmarks();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const copyToClipboard = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      // optional small feedback
      // alert("Copied!");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div>
      {bookmarks.length === 0 && (
        <p style={{ textAlign: "center" }}>No bookmarks found 🔍</p>
      )}

      {bookmarks.map((b) => {
        const favicon = `https://www.google.com/s2/favicons?domain=${b.url}`;

        return (
          <div key={b._id} className="card">
            <h3 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={favicon}
                alt="icon"
                width="20"
                height="20"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/1006/1006771.png";
                }}
              />
              {b.title}
            </h3>

            <a href={b.url} target="_blank" rel="noreferrer">
              {b.url}
            </a>

            <div className="card-buttons">
              <button className="btn" onClick={() => setEditing(b)}>
                Edit
              </button>

              <button
                className="btn btn-danger"
                onClick={() => deleteBookmark(b._id)}
              >
                Delete
              </button>

              <button
                className="btn"
                onClick={() => copyToClipboard(b.url)}
              >
                Copy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookmarkList;