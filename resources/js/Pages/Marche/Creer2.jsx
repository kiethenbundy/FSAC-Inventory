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
    articles,
    mouvementstocks,
    destinations,
}) {
    const option1 = articles.data.map((article) => ({
        value: article.name,
        label: article.name,
    }));

    const option2 = mouvementstocks.data.map((mouvementstock) => ({
        value: mouvementstock.type,
        label: mouvementstock.type,
    }));

    const option3 = destinations.data.map((destination) => ({
        value: destination.nom_dept,
        label: destination.nom_dept,
    }));

    const option4 = [
        {
            value: "En Cours",
            label: "En Cours",
        },
        {
            value: "Livre",
            label: "Livre",
        },
        {
            value: "Non Livre",
            label: "Non Livre",
        },
    ];

    const { data, setData, post, errors, reset } = useForm({
        reference: "",
        titre: "",
        status: "",
        num_lot: "",
        quantite: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("storemarche"));
    };

    const [mouvementstock, setMouvementstock] = React.useState({
        mouvementstocks: "",
    });

    const handleMouvementStock = (e) => {
        setMouvementstock({
            ...mouvementstock,
            mouvementstocks: e.target.value,
        });
    };

    const [article, setArticle] = React.useState({
        articles: "",
    });

    const handleArticle = (e) => {
        setArticle({ ...article, articles: e.target.value });
    };

    const [destination, setDestination] = React.useState({
        destinations: "",
    });

    const handleDestination = (e) => {
        setDestination({ ...destination, destinations: e.target.value });
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
                <Head title="Marche" />
                <Titre
                    isDashboard={false}
                    title={"MARCHE"}
                    subTitle={"Creer Un Nouveau Marche"}
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
                            error={Boolean(errors.reference)}
                            helperText={
                                errors.reference ? errors.reference : null
                            }
                            value={data.reference}
                            onChange={(e) =>
                                setData("reference", e.target.value)
                            }
                            sx={{ flex: 1 }}
                            label="Reference"
                            variant="filled"
                        />

                        <TextField
                            error={Boolean(errors.titre)}
                            helperText={errors.titre ? errors.titre : null}
                            value={data.titre}
                            onChange={(e) => setData("titre", e.target.value)}
                            sx={{ flex: 1 }}
                            label="Titre"
                            variant="filled"
                        />
                    </Stack>

                    <TextField
                        error={Boolean(errors.num_lot)}
                        helperText={errors.num_lot ? errors.num_lot : null}
                        value={data.num_lot}
                        onChange={(e) => setData("num_lot", e.target.value)}
                        label="Num Lot"
                        variant="filled"
                    />

                    <TextField
                        error={Boolean(errors.quantite)}
                        helperText={errors.quantite ? errors.quantite : null}
                        value={data.quantite}
                        onChange={(e) => setData("quantite", e.target.value)}
                        label="Quantite"
                        variant="filled"
                    />
                    <Stack sx={{ gap: 2 }} direction={"row"}>
                        <TextField
                            error={Boolean(errors.articles)}
                            helperText={errors.articles || null}
                            value={article.articles}
                            onChange={handleArticle}
                            label="Articles"
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

                    <Stack sx={{ gap: 2 }} direction={"row"}>
                        <TextField
                            error={Boolean(errors.destinations)}
                            helperText={errors.destinations || null}
                            value={destination.destinations}
                            onChange={handleDestination}
                            label="Destination"
                            variant="filled"
                        />

                        <TextField
                            error={Boolean(errors.status)}
                            helperText={errors.status || null}
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                            label="Status"
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
                            Create New User
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
