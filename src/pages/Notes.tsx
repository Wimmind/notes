import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import NoteCard from "../components/NoteCard";
import Pagination from '@mui/material/Pagination';

const Records: React.FC = () => {
  const { notes } = useTypedSelector((state) => state.notes);

  return (
    <>
      {
        notes.map((item, key) => (
          <NoteCard note={item} key={key} />
        ))
      }
    </>
  );
}

export default Records;