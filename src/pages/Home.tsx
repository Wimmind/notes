import React, { useState, useEffect } from "react";
import {
  TextField, InputLabel, MenuItem, FormControl, Select, Grid, Box
} from '@mui/material';
import Request from '../services/Request'

type Note = {
  text: string,
  sign: string,
  tz: string[],
  record: any
}

type form = {
  text: string,
  sign: string,
  tz: string[],
}

const Home: React.FC = () => {
  const [formValues, setFormValues] = useState<form>({
    text: '',
    sign: '',
    tz: [],
  })
  const requestService = new Request()

  useEffect(() => {
    const getTimeZones = async () => {
      const timezones = await requestService.getTimeZones()
      setFormValues({ ...formValues, tz: timezones });
    }
    getTimeZones()
  }, [])

  const changeField = (e: any) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <Box component='form' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={formValues.text}
            fullWidth
            maxRows={3}
            multiline
            name='text'
            label='Запись'
            onChange={changeField}
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            value={formValues.sign}
            label='Подпись'
            fullWidth
            name='sign'
            onChange={changeField} />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel >Зона</InputLabel>
            <Select
              value={''}
              name='tz'
              label="Age"
              onChange={changeField}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;