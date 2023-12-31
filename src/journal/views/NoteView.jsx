import { SaveOutlined } from "@mui/icons-material"
import { Grid, TextField, Typography } from "@mui/material"


export const NoteView = () => {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>

            <Grid item>
                <Typography fontSize={39} fontWeight="light"> 31 de diciembre, 2023</Typography>
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
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    minRows={5}
                />
            </Grid>

        </Grid>
    )
}
