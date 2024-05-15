import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, IconButton, ListItemText, Stack } from "@mui/material";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";
import Titre from "../Titre";
import { Cancel } from "@mui/icons-material";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

export default function Create2({
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


    const [valeur, setValeur] = React.useState([]);
    const [fournit, setFourni] = React.useState("");
    const [bons, setBonS] = React.useState("");
    const [bonl, setBonL] = React.useState("");

    /*const handleChange = () => {

       // setValeur(e.target.value);

        setData("article", valeur);
    };

  const handleChangeArticle = (event) => {
    const {
      target: { value },
    } = event;
    setValeur(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    handleChange();
  };*/


// Initialize the ref to hold the selected articles

const valeurRef = React.useRef([]);
const valeurRef2 = React.useRef('');

const handleChangeArticle = (event) => {
    const {
        target: { value },
    } = event;

    // Update the valeurRef with the selected articles
    valeurRef.current = typeof value === 'string' ? value.split(',') : value;

    
    setData("article", valeurRef.current );
};




    const handleChangeFournisseur = (e) => {

        //const value = e.target;

        
        // Update the valeurRef2 with the selected fournisseur
        valeurRef2.current = e.target.value;
        
        setData("fournisseur", valeurRef2.current);

    };
    const handleChangeBonLivraison = (e) => {

        setBonL(e.target.value);

        setData("bon_livraison", valeur);
    };
    const handleChangeBonSortie = (e) => {

        setBonS(e.target.value);

        setData("bon_sortie", valeur);
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
                <Head title="Mouvement stock" />
                <Titre
                    isDashboard={false}
                    title={"MOUVEMENT STOCK"}
                    subTitle={"Creer Un Nouveau Mouvement stock"}
                />
                <Box
                    component="form"
                    onSubmit={onSubmit}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
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

                    <TextField
                        error={Boolean(errors.total)}
                        helperText={errors.total ? errors.total : null}
                        value={data.total}
                        onChange={(e) => setData("total", e.target.value)}
                        label="Total"
                        variant="filled"
                    />
                    <Stack sx={{ gap: 2,justifyContent: 'space-evenly' }} direction={"row"}>
                        <TextField
                            error={Boolean(errors.type)}
                            helperText={errors.type || null}
                            value={data.type}
                            sx={{
                                width: 400
                            }}
                            onChange={(e) => setData("type", e.target.value)}
                            label="Type"
                            variant="filled"
                        />

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
                                                    valeurRef.current.indexOf(article) > -1
                                                }
                                            />
                                            <ListItemText primary={article.name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </Stack>

                    <Stack sx={{ gap: 2 ,justifyContent: 'space-evenly' }} direction={"row"} >
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

                        <div>
                            <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120, width: 400 }}
                            >
                                <InputLabel id="demo-simple-select-standard-label">
                                    Bon Livraison
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={bonl}
                                    onChange={(e) =>
                                        setData("bon_livraison", e.target.value)
                                    }
                                    label="Bon Livraison"
                                    defaultValue={""}
                                >
                                    {bon_livraisons.map((bon_livraison) => (
                                        <MenuItem
                                            key={bon_livraison.id}
                                            value={bon_livraison.bl}
                                        >
                                            {bon_livraison.bl}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>


                    </Stack>

                  <Stack sx={{ gap: 2}} direction={"row"}>

                    <div>
                            <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120, width: 400 }}
                            >
                                <InputLabel id="demo-simple-select-standard-label">
                                    Bon Sortie
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={bons}
                                    onChange={(e) =>
                                        setData("bon_sortie", e.target.value)
                                    }
                                    label="Bon Sortie"
                                    defaultValue={""}
                                >
                                    {bon_sorties.map((bon_sortie) => (
                                        <MenuItem
                                            key={bon_sortie.id}
                                            value={bon_sortie.num_inventaire}
                                        >
                                            {bon_sortie.num_inventaire}
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
                            Creer Un Mouvement Stock
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
