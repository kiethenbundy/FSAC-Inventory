import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, IconButton, Stack } from "@mui/material";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";
import Titre from "../Titre";
import { Cancel } from "@mui/icons-material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function Create2({ auth, destinations, user }) {
 
    

    const nom = "Role";

    const role = [
        {
            value: "admin",
            label: "Admin",
        },
        {
            value: "magasinier",
            label: "Magasinier",
        },
        {
            value: "chefD",
            label: "Chef de Departement",
        },
        {
            value: "chefservice",
            label: "Chef de Service",
        },
    ];

    const { data, setData, post, errors, reset } = useForm({
        id: user.id,
        name: user.name || "",
        email: user.email || "",
        usertype: user.usertype || "",
        password: "",
        password_confirmation: "",
        destination:user.destination || "",
        _method: "PUT",
      });

      const onSubmit = (e) => {
        e.preventDefault();
    
        post(route("/updateuser", user.id));
      };

    const [destiOptions, setDestiOptions] = useState([]);

    useEffect(() => {
        const transformedData = destinations.data.map((name) => ({
            value: name.id,
            label: name.nom_dept,
            typeService: name.type_service,
        }));
    
        setDestiOptions(transformedData);
    }, [data.destination]);
    
  

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
                    title={"USERS"}
                    subTitle={"Modifier Un User"}
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
                            error={Boolean(errors.email)}
                            helperText={errors.email ? errors.email : null}
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            sx={{ flex: 1 }}
                            label="Email"
                            variant="filled"
                        />
                    </Stack>

                    <TextField
                        error={Boolean(errors.password)}
                        helperText={errors.password ? errors.password : null}
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        label="Password"
                        variant="filled"
                    />

                    <TextField
                        error={Boolean(errors.password_confirmation)}
                        helperText={
                            errors.password_confirmation
                                ? errors.password_confirmation
                                : null
                        }
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        label="Password Confirmation"
                        variant="filled"
                    />

                    <Stack sx={{ gap: 2, display: "flex" }} direction={"row"}>

                    <TextField
                            error={Boolean(errors.destination)}
                            helperText={errors.destination || null}
                            value={data.destination}
                            onChange={(e) => setData("destination", e.target.value)}
                            label="Destination"
                            variant="filled"
                        />
                        
                    </Stack>

                    <Stack sx={{ gap: 2, display: "flex" }} direction={"row"}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                {nom}
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={data.usertype}
                                onChange={(e) =>
                                    setData("usertype", e.target.value)
                                }
                            >
                                {role.map((tab) => (
                                    <FormControlLabel
                                        value={tab.value}
                                        key={tab.value}
                                        control={<Radio />}
                                        label={tab.label}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
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
                            Modifier Utilisateur
                        </Button>
                        <Link href={`/admin/user`} className="mr-2">
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
