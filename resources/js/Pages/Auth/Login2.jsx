import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Head } from "@inertiajs/react";

export default function SignIn({ status, canResetPassword }) {
    function Copyright(props) {
        return (
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                {...props}
            >
                {"Copyright © "}
                <Link color="inherit" href="https://www.univh2c.ma/">
                    Université Hassan II
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        );
    }

    const defaultTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
              main: '#44b396',
              light: '#243150',
            },
            secondary: {
              main: '#bb9889',
            },
            background: {
              default: '#070720',
              paper: '#131e3d',
            },
            info: {
              main: '#024c79',
            },
            divider: '#cfd8dc',
            text: {
              primary: '#e4e4e4',
              secondary: 'rgba(230,229,229,0.7)',
              disabled: 'rgba(82,82,82,0.5)',
            },
            error: {
              main: '#f72b1c',
            },
          },
    });

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    React.useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>

                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}

                        <Box
                            component="form"
                            onSubmit={submit}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                value={data.email}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={data.password}
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={processing}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    {canResetPassword && (
                                        <Link
                                            href={route("password.request")}
                                            variant="body2"
                                        >
                                            Forgot password?
                                        </Link>
                                    )}
                                </Grid>
                                <Grid item>
                                    <Link
                                        href={route("register")}
                                        variant="body2"
                                    >
                                        {"Don't have an account? Register"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </>
    );
}
