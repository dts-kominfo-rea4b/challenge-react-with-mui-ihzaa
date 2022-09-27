// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ submitHandler }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: "", phone: "", email: "", photo: ""
    });

    const onSubmitHandler = () => {
        submitHandler(newContact)
    }
    return (
        <>
            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, maxWidth: 200, backgroundColor: "#a458db" }}>
                <Grid container wrap="nowrap" spacing={2} >
                    <Grid item>
                        <TextField id="name" label="Name" variant="standard" onChange={(e) => setNewContact({ ...newContact, name: e.target.value })} />
                    </Grid>
                </Grid>
                <Grid container wrap="nowrap" spacing={2} >
                    <Grid item>
                        <TextField id="phone" label="phone" variant="standard" onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })} />
                    </Grid>
                </Grid>
                <Grid container wrap="nowrap" spacing={2} >
                    <Grid item>
                        <TextField id="email" label="email" variant="standard" onChange={(e) => setNewContact({ ...newContact, email: e.target.value })} />
                    </Grid>
                </Grid>
                <Grid container wrap="nowrap" spacing={2} >
                    <Grid item>
                        <TextField id="photo" label="photo url" variant="standard" onChange={(e) => setNewContact({ ...newContact, photo: e.target.value })} />
                    </Grid>
                </Grid>
                <Button variant="outlined" sx={{ marginTop: "10px" }} onClick={onSubmitHandler}>Tambah</Button>
            </Box>
        </>
    );
}

export default ContactForm;