import React, { useState } from "react";
import { CssBaseline, AppBar, Tabs, Tab } from '@mui/material';
import { Link } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";

import Notes from "./pages/Notes";
import Home from "./pages/Home";
import Note from "./pages/Note";

const tabs = [
  '/',
  '/notes'
]

const App: React.FC = () => {
  const location = useLocation();
  const [value, setValue] = useState(tabs.findIndex(item => item === location.pathname));

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Tabs
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          value={value}
          onChange={handleChange}>
          <Tab component={Link} to='/' label="Создание записи" />
          <Tab component={Link} to='/notes' label="Записи" />
        </Tabs>
      </AppBar>
      <main className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="users">
            <Route path=":id" element={<Note />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;