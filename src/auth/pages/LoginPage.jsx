import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks";
import { checkingCredentials, startGoogleSignIn } from "../../store/auth";


export const LoginPage = () => {

    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'alvaro@google.com',
        password: '123456'
    });


    const isAuthenticating = useMemo(() => status === 'cheacking', [status]);


    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(checkingCredentials());
    };

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }


    return (

        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="email@mail.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />

                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="********"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />

                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant="contained"
                                fullWidth>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                variant="contained"
                                fullWidth
                                onClick={onGoogleSignIn}>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Create an account
                        </Link>

                    </Grid>

                </Grid>
            </form>

        </AuthLayout>
    )
}
