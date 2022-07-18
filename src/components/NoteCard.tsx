import React from "react";
import { Typography, Card, CardContent } from '@mui/material';
import { Note } from '../types'

interface NoteCardProps {
  note: Note
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const { text, tz, sign } = note;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {sign}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NoteCard