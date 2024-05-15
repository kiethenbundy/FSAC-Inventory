import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
    Button,
    Checkbox,
    FormControl,
    IconButton,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
} from "@mui/material";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";
import Titre from "../Titre";
import { Cancel } from "@mui/icons-material";
import InputLabel from "@/Components/InputLabel";

export default function Creer2({
    auth,
    articles,
    fournisseurs,
    bon_sorties,
    bon_livraisons,
}) {
    const { data, setData, post, errors, reset } = useForm({
        reference: "",
        quantite: "",
        total: "",
        type: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(data);

        post(route("/store"));
    };

    const valeurRef = React.useRef([]);

    const handleChangeArticle = (event) => {
        const {
            target: { value },
        } = event;

        // Update the valeurRef with the selected articles
        valeurRef.current =
            typeof value === "string" ? value.split(",") : value;

        setData("article", valeurRef.current);
    };
    
    const valeurRef2 = React.useRef('');
const handleChangeFournisseur = (e) => {

        //const value = e.target;

        
        // Update the valeurRef2 with the selected fournisseur
        valeurRef2.current = e.target.value;
        
        setData("fournisseur", valeurRef2.current);

    };


    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
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
                <Head title="Mouvementstock" />
                <Titre
                    isDashboard={false}
                    title={"Mouvementstock"}
                    subTitle={"Creer une Nouvelle Mouvementstock"}
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
                            error={Boolean(errors.quantite)}
                            helperText={
                                errors.quantite ? errors.quantite : null
                            }
                            value={data.quantite}
                            onChange={(e) =>
                                setData("quantite", e.target.value)
                            }
                            sx={{ flex: 1 }}
                            label="Quantite"
                            variant="filled"
                        />
                    </Stack>

                    <Stack sx={{ gap: 2 }} direction={"row"}>
                        <TextField
                            error={Boolean(errors.total)}
                            helperText={errors.total ? errors.total : null}
                            value={data.total}
                            onChange={(e) => setData("total", e.target.value)}
                            sx={{ flex: 1 }}
                            label="Total"
                            variant="filled"
                        />
                        <TextField
                            error={Boolean(errors.type)}
                            helperText={errors.type ? errors.type : null}
                            value={data.type}
                            onChange={(e) => setData("type", e.target.value)}
                            sx={{ flex: 1 }}
                            label="Type"
                            variant="filled"
                        />
                    </Stack>

                    <Stack sx={{ gap: 2 ,justifyContent: 'space-evenly' }} direction={"row"}  >
                        <div>
                            <FormControl sx={{ m: 1, width: 400 }}>
                                <InputLabel id="demo-multiple-checkbox-label">
                                    Articles
                                </InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={valeurRef.current}
                                    onChange={handleChangeArticle}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) =>
                                        selected.join(", ")
                                    }
                                    MenuProps={MenuProps}
                                >
                                    {articles.map((article) => (
                                        <MenuItem
                                            key={article.name}
                                            value={article.name}
                                        >
                                            <Checkbox
                                                checked={
                                                    valeurRef.current.indexOf(
                                                        article
                                                    ) > -1
                                                }
                                            />
                                            <ListItemText
                                                primary={article.name}
                                            />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120, width:400 }}
                            >
                                <InputLabel id="demo-simple-select-standard-label">
                                    Fournisseurs
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={valeurRef2.current}

                                    onChange={handleChangeFournisseur}
                                    label="Fournisseurs"
                                    
                                >
                                    {fournisseurs.map((fournisseur) => (
                                        <MenuItem
                                            key={fournisseur.id}
                                            value={fournisseur.name}
                                        >
                                            {fournisseur.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>


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
