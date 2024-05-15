import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Stack, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { AddCircle, Delete, Edit } from "@mui/icons-material";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";
import { Head, Link, router } from "@inertiajs/react";
import Titre from "../Titre";

export default function Index2({ auth, categories, success }) {
    const deleteCategorie = (object) => {
        if (
            !window.confirm(
                "Etes vous sur de vouloir supprimer ce fournisseur?"
            )
        ) {
            return;
        }
        router.delete(route("/destroycategorie", object));
    };

    const theme = useTheme();

    const rows = categories.data.map((categorie) => ({
        id: categorie.id,
        name: categorie.name,
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
            field: "actions",
            headerName: "Actions",
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: ({ row }) => (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Link href={route("/editcategorie", row.id)} className="mr-2">
                        <IconButton color="primary">
                            <Edit />
                        </IconButton>
                    </Link>
                    <IconButton
                        color="error"
                        onClick={() => deleteCategorie(row)}
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
                <Head title="Categorie" />

                <Box sx={{ height: 600, mx: "auto" }}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Titre
                            isDashboard={false}
                            title={"CATEGORIE"}
                            subTitle={"Gestion des Categorie"}
                        />

                        <Box sx={{ textAlign: "right", mb: 1.3 }}>
                            <Link
                                href={`/admin/categorie/create`}
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
                                sortModel: [{ field: "name", sort: "desc" }],
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
