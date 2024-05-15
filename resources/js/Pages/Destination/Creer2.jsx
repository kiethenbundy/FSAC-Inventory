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
        chefD: "",
        nom_dept: "",
        type_service: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(data);

        post(route("/storedestination"));
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
                            error={Boolean(errors.chefD)}
                            helperText={errors.chefD ? errors.chefD : null}
                            value={data.chefD}
                            onChange={(e) => setData("chefD", e.target.value)}
                            sx={{ flex: 1 }}
                            label="Chef du Departement"
                            variant="filled"
                        />

                        <TextField
                            error={Boolean(errors.nom_dept)}
                            helperText={
                                errors.nom_dept ? errors.nom_dept : null
                            }
                            value={data.nom_dept}
                            onChange={(e) =>
                                setData("nom_dept", e.target.value)
                            }
                            sx={{ flex: 1 }}
                            label="Departement"
                            variant="filled"
                        />
                    </Stack>

                    <Stack sx={{ gap: 2 }} direction={"row"}>
                        <TextField
                            error={Boolean(errors.type_service)}
                            helperText={errors.type_service || null}
                            value={data.type_service}
                            onChange={(e) => setData("type_service", e.target.value)}
                            sx={{ flex: 1 }}
                            label="Type de Service"
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
                            Creer nouveau Destination
                        </Button>
                        <Link href={`/admin/destination`} className="mr-2">
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
