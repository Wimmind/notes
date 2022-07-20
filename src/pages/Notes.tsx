import React from "react";
import { Pagination, PaginationItem, Grid, Box } from '@mui/material';
import { useTypedSelector } from "../hooks/useTypedSelector";
import NoteCard from "../components/NoteCard";
import { useLocation, Link } from "react-router-dom";

const NoteList: React.FC = () => {
  const { notes } = useTypedSelector((state) => state.notes);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  console.log(notes)

  return (
    <>
      <Grid container spacing={2}>
        {notes.map((item, key) => (
          <Grid item xs={6} key={key}>
            <NoteCard note={item} key={key} />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent='center' alignItems='center'>
        <Pagination
          page={page}
          count={10}
          renderItem={item => (
            <PaginationItem
              component={Link}
              to={`/notes/${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Grid>
    </>
  );
}

export default NoteList;