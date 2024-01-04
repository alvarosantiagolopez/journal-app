import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views/";

export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* <Typography>Culpa nulla aute anim aliquip anim velit cillum labore occaecat occaecat est sint. Esse irure pariatur pariatur labore dolore occaecat. Magna est culpa nostrud et eu cupidatat aliquip eiusmod ex culpa irure duis. Sint est dolor aute excepteur tempor excepteur duis do commodo id labore. Et non velit aliqua id non duis cillum minim non nisi occaecat Lorem elit. Ex id labore quis velit dolor amet labore ex. Mollit deserunt magna aute incididunt consectetur aliqua ex deserunt ut ea veniam fugiat ad aliqua.</Typography> */}

            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size="large"
                sx={{
                    color: "white",
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </JournalLayout>
    )
};
