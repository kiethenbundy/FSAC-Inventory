import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, IconButton, Stack } from "@mui/material";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";
import Titre from "../Titre";
import { Cancel } from "@mui/icons-material";

export default function Create2({ auth, users }) {

    const { data, setData, post, errors, reset } = useForm({
        name: "",
        description: "",
        status: "encours",
        user_id: "",
        demandes: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(data);

        post(route("/storedemande"));
    };

    return (
        <AuthenticatedLayoutMagasinier
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
                </div>
            }
        >
            <Box>
                <Head title="Demande" />
                <Titre
                    isDashboard={false}
                    title={"DEMANDE"}
                    subTitle={"Creer Un Nouveau Demande"}
                />
                <Box
                    component="form"
                    onSubmit={onSubmit}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Stack sx={{ gap: 2 }} direction={"row"}>
                        <TextField
                            error={Boolean(errors.name)}
                            helperText={errors.name ? errors.name : null}
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            sx={{ flex: 1 }}
                            label="Nom"
                            variant="filled"
                        />

                        <TextField
                            error={Boolean(errors.description)}
                            helperText={
                                errors.description ? errors.description : null
                            }
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            sx={{ flex: 1 }}
                            label="Description"
                            variant="filled"
                        />
                    </Stack>

                    <Stack sx={{ gap: 2 }} direction={"row"}>
                        <TextField
                            error={Boolean(errors.status)}
                            helperText={errors.status || null}
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                            sx={{ flex: 1 }}
                            label="Status"
                            variant="filled"
                        />

                        <TextField
                            error={Boolean(errors.user_id)}
                            helperText={errors.user_id || null}
                            value={data.user_id}
                            onChange={(e) => setData("user_id", e.target.value)}
                            sx={{ flex: 1 }}
                            label="User ID"
                            variant="filled"
                        />
                    </Stack>

                    <Stack sx={{ gap: 2 }} direction={"row"} >

                        <TextField
                            error={Boolean(errors.articles)}
                            helperText={errors.articles || null}
                            value={data.articles}
                            onChange={(e) => setData("articles", e.target.value)}
                            sx={{ flex: 1 }}
                            label="Article ID"
                            variant="filled"
                            />

                    </Stack>

                    <Box
                        sx={{
                            textAlign: "right",
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <Button
                            type="submit"
                            sx={{ textTransform: "capitalize" }}
                            variant="contained"
                        >
                            Creer nouveau Demande
                        </Button>
                        <Link href={`/admin/demande`} className="mr-2">
                            <IconButton variant="contained" color="success">
                                <Cancel fontSize="large" />
                            </IconButton>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </AuthenticatedLayoutMagasinier>
    );
}
