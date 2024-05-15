import React, {  } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, IconButton, Stack } from "@mui/material";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";
import Titre from "../Titre";
import { Cancel } from "@mui/icons-material";


export default function Create2({ auth }) {
 

    const { data, setData, post, errors, reset } = useForm({
        name: "",
        coordonnees: "",
        num: "",
        email: "",
      });

      const onSubmit = (e) => {
        e.preventDefault();
    
        post(route("storefournisseurs"));
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
                <Head title="User" />
                <Titre
                    isDashboard={false}
                    title={"FOURNISSEUR"}
                    subTitle={"Creer Nouveau Fournisseur"}
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
                            error={Boolean(errors.coordonnees)}
                            helperText={errors.coordonnees ? errors.coordonnees : null}
                            value={data.coordonnees}
                            onChange={(e) => setData("coordonnees", e.target.value)}
                            sx={{ flex: 1 }}
                            label="Coordonnees"
                            variant="filled"
                        />
                    </Stack>

                    <TextField
                        error={Boolean(errors.num)}
                        helperText={errors.num ? errors.num : null}
                        value={data.num}
                        onChange={(e) => setData("num", e.target.value)}
                        label="Numero"
                        variant="filled"
                    />

                    <TextField
                        error={Boolean(errors.email)}
                        helperText={
                            errors.email
                                ? errors.email
                                : null
                        }
                        value={data.email}
                        onChange={(e) =>
                            setData("email", e.target.value)
                        }
                        label="Email"
                        variant="filled"
                    />


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
                            Ajouter Fournisseur
                        </Button>
                        <Link href={`/admin/fournisseurs`} className="mr-2">
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
