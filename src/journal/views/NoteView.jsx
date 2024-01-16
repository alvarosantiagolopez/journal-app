import { useMemo } from "react"
import { SaveOutlined } from "@mui/icons-material"
import { Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useSelector } from "react-redux"


export const NoteView = () => {

    const { active: note } = useSelector(state => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString()
    }, [date])


    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
        >

            <Grid item>
                <Typography fontSize={39} fontWeight="light">{dateString}</Typography>
            </Grid>

            <Grid item>
                <button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    SAVE
                </button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Type a title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <ImageGallery />

        </Grid>
    )
}
