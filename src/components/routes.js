import { Routes, Route } from "react-router-dom";
import CreateNote from "./createNote";
import NoteList from "./noteList";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </div>
  );
};

export default Router;
