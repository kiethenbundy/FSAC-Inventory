import React, {  } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, IconButton, Stack } from "@mui/material";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";
import Titre from "../Titre";
import { Cancel } from "@mui/icons-material";


export default function Index3({ auth, categorie }) {
 

    const { data, setData, put, errors, reset } = useForm({
        name: categorie.name || "",
      });

      const onSubmit = (e) => {
        e.preventDefault();
    
        put(route("/updatecategorie", categorie));
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
                <Head title="Categorie" />
                <Titre
                    isDashboard={false}
                    title={"CATEGORIE"}
                    subTitle={"Creer une Nouvelle Categorie"}
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
                            Ajouter Categorie
                        </Button>
                        <Link href={`/admin/categorie`} className="mr-2">
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
