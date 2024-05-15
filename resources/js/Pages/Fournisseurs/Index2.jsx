import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
    Button,
    IconButton,
    ListItemButton,
    Stack,
    useTheme,
} from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
    Add,
    AddCircle,
    AdminPanelSettingsOutlined,
    Delete,
    Edit,
    HttpsOutlined,
    LockOpenOutlined,
    SecurityOutlined,
} from "@mui/icons-material";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";
import { Head, Link, router } from "@inertiajs/react";
import Titre from "../Titre";

export default function Index({
    auth,
    fournisseurs,
    queryParams = null,
    success,
}) {
    queryParams = queryParams || {};

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("fournisseurs.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("fournisseurs.index"), queryParams);
    };

    const deleteFournisseur = (id) => {
        if (
            !window.confirm(
                "Etes vous sur de vouloir supprimer ce fournisseur?"
            )
        ) {
            return;
        }
        router.delete(route("fournisseurs.destroy", id));
    };

    const theme = useTheme();

    const rows = fournisseurs.data.map((fournisseur) => ({
        id: fournisseur.id,
        name: fournisseur.name,
        email: fournisseur.email,
        num: fournisseur.num,
    }));

    const columns = [
        {
            field: "id",
            headerName: "ID",
            align: "center",
            headerAlign: "center",
        },
        {
            field: "name",
            headerName: "Nom",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "email",
            headerName: "email",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "num",
            headerName: "Numero",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "actions",
            headerName: "Actions",
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: ({ row }) => (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Link href={`/admin/fournisseurs/edit/`} className="mr-2">
                        <IconButton color="primary">
                            <Edit />
                        </IconButton>
                    </Link>
                    <IconButton
                        color="error"
                        onClick={() => deleteFournisseur(row.id)}
                    >
                        <Delete />
                    </IconButton>
                </Box>
            ),
        },
    ];

    return (
        <AuthenticatedLayoutMagasinier
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
                </div>
            }
        >
            <Box sx={{ alignItems: "center" }}>
                <Head title="Fournisseurs" />

                <Box sx={{ height: 600, mx: "auto" }}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Titre
                            isDashboard={false}
                            title={"Fournisseurs"}
                            subTitle={"Gestion des Utilisateurs"}
                        />

                        <Box sx={{ textAlign: "right", mb: 1.3 }}>
                            <Link
                                href={`/admin/fournisseurs/create`}
                                className="mr-2"
                            >
                                <IconButton variant="contained" color="success">
                                    <AddCircle fontSize="large" />
                                </IconButton>
                            </Link>
                        </Box>
                    </Stack>
                    <DataGrid
                        initialState={{
                            sorting: {
                                sortModel: [{ field: "nom", sort: "desc" }],
                            },
                        }}
                        rows={rows}
                        // @ts-ignore
                        columns={columns}
                    />
                </Box>
            </Box>
        </AuthenticatedLayoutMagasinier>
    );
}
