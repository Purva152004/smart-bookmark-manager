import { useEffect, useState } from "react";
import API from "../api";

function BookmarkForm({ fetchBookmarks, editing, setEditing }) {
  const [form, setForm] = useState({
    title: "",
    url: "",
  });

  const [error, setError] = useState("");

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (!editing) return;

    setForm({
      title: editing.title ?? "",
      url: editing.url ?? "",
    });
  }, [editing]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidUrl(form.url)) {
      setError("Please enter a valid URL");
      return;
    }

    setError("");

    if (editing) {
      await API.put(`/${editing._id}`, form);
      setEditing(null);
    } else {
      await API.post("/", form);
    }

    setForm({ title: "", url: "" });
    fetchBookmarks();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />

      <input
        placeholder="https://example.com"
        value={form.url}
        onChange={(e) => setForm({ ...form, url: e.target.value })}
        required
      />

      <button className="btn" type="submit">
        {editing ? "Update" : "Add"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default BookmarkForm;