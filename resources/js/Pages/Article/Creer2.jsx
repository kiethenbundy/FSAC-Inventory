import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, IconButton, Stack } from "@mui/material";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";
import Titre from "../Titre";
import { Cancel } from "@mui/icons-material";

export default function Create2({
    auth,
    mouvementstocks,
    fournisseurs,
}) {

    const { data, setData, post, errors, reset } = useForm({
        name: "",
        designiation: "",
        prix: "",
        seuil: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(data);

        post(route("article.store"));
    };

    const [mouvementstock, setMouvementstock] = React.useState({
        mouvementstocks: "",
    });

    const handleMouvementStock = (e) => {
        setMouvementstock({ ...mouvementstock, mouvementstocks: e.target.value });
    };

    const [fournisseur, setFournisseur] = React.useState({
        fournisseurs: "",
    });

    const handleFournisseur = (e) => {
        setFournisseur({ ...fournisseur, fournisseurs: e.target.value });
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
                <Head title="Article" />
                <Titre
                    isDashboard={false}
                    title={"ARTICLE"}
                    subTitle={"Creer Un Nouveau Article"}
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
                            helperText={
                                errors.name ? errors.name : null
                            }
                            value={data.name}
                            onChange={(e) =>
                                setData("name", e.target.value)
                            }
                            sx={{ flex: 1 }}
                            label="Name"
                            variant="filled"
                        />

                        <TextField
                            error={Boolean(errors.designiation)}
                            helperText={errors.designiation ? errors.designiation : null}
                            value={data.designiation}
                            onChange={(e) => setData("designiation", e.target.value)}
                            sx={{ flex: 1 }}
                            label="Designiation"
                            variant="filled"
                        />
                    </Stack>

                    <TextField
                        error={Boolean(errors.prix)}
                        helperText={errors.prix ? errors.prix : null}
                        value={data.prix}
                        onChange={(e) => setData("prix", e.target.value)}
                        label="Prix"
                        variant="filled"
                    />

                    <TextField
                        error={Boolean(errors.seuil)}
                        helperText={errors.seuil ? errors.seuil : null}
                        value={data.seuil}
                        onChange={(e) => setData("seuil", e.target.value)}
                        label="Seuil"
                        variant="filled"
                    />

                    <Stack sx={{ gap: 2 }} direction={"row"}>

                    <TextField
                            error={Boolean(errors.fournisseurs)}
                            helperText={errors.fournisseurs || null}
                            value={fournisseur.fournisseurs}
                            onChange={handleFournisseur}
                            label="Fournisseurs"
                            variant="filled"
                        />

                        <TextField
                            error={Boolean(errors.mouvementstocks)}
                            helperText={errors.mouvementstocks || null}
                            value={mouvementstock.mouvementstocks}
                            onChange={handleMouvementStock}
                            label="Mouvement Stock"
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
                            Creer Article
                        </Button>
                        <Link href={`/admin/marche`} className="mr-2">
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
