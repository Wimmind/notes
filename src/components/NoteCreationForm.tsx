import React, { useState, useEffect } from "react";
import { Grid, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Request from '../services/Request';
import { Note } from '../types';
import Select from '../components/form/Select';
import TextField from '../components/form/TextField';
import { FormField } from '../types';

type form = {
  text: string,
  sign: string,
  tz: string,
}

interface NoteCreationFormProps {
  onSubmit: (note: Note) => void
}

const NoteCreationForm: React.FC<NoteCreationFormProps> = ({ onSubmit }) => {
  const initialValues: form = {
    text: '',
    sign: localStorage.getItem('user_sign') || '',
    tz: localStorage.getItem('user_tz') || ''
  };

  const [formValues, setFormValues] = useState<form>(initialValues);
  const [tzList, setTzList] = useState<string[]>([]);
  const requestService = new Request();
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true)

  useEffect(() => {
    const getTimeZones = async () => {
      const timezones = await requestService.getTimeZones();
      setTzList(timezones);
    };
    getTimeZones();
  }, []);

  useEffect(() => {
    if (tzList.length) {
      setSubmitDisabled(false)
    }
  }, [tzList]);

  useEffect(() => {
    if (formValues.sign.length) {
      localStorage.setItem('user_sign', formValues.sign);
    }
  }, [formValues.sign]);

  useEffect(() => {
    if (formValues.tz.length) {
      localStorage.setItem('user_tz', formValues.tz);
    }
  }, [formValues.tz]);

  const changeField = (field: FormField) => {
    const { name, value } = field;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async () => {
    if (formValues.tz) {
      setSubmitDisabled(true)
      const date = await requestService.getTimeZoneInfo(formValues.tz);
      if (date) {
        onSubmit({ ...formValues, date });
        alert('Запись сохранена')
        setFormValues({
          text: '',
          sign: '',
          tz: ''
        });
      } else {
        alert('Ошибка, попробуйте еще раз')
      }
      setSubmitDisabled(false);
    }
  };

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
            handleOnChange={changeField}
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            value={formValues.sign}
            label='Подпись'
            fullWidth
            name='sign'
            handleOnChange={changeField}
            inputProps={{
              maxLength: 100
            }} />
        </Grid>
        <Grid item xs={3}>
          <Select
            inputLabel="Зона"
            value={formValues.tz}
            name='tz'
            handleOnChange={changeField}
            options={tzList} />
        </Grid>
        <Grid item container justifyContent='flex-end'>
          <LoadingButton
            loading={submitDisabled}
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmit}>
            Создать
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NoteCreationForm;