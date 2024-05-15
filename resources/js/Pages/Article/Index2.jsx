import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Stack, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
    AddCircle,
    Cached,
    Check,
    Close,
    Delete,
    Edit,
} from "@mui/icons-material";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";
import { Head, Link, router } from "@inertiajs/react";
import Titre from "../Titre";

export default function Index2({
    auth,
    articles,
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

        router.get(route("article.index"), queryParams);
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
        router.get(route("article.index"), queryParams);
    };

    const deleteArticle = (article) => {
        if (!window.confirm("Are you sure you want to delete the article?")) {
            return;
        }
        router.delete(route("article.destroy", article.id));
    };

    const theme = useTheme();

    const rows = articles.map((article) => ({
        id: article.id,
        name: article.name,
        designiation: article.designiation,
        prix: article.prix,
        seuil: article.seuil,
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
            align: "center",
            headerAlign: "center",
        },
        {
            field: "designiation",
            headerName: "Designiation",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "prix",
            headerName: "Prix",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "seuil",
            headerName: "Seuil",
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
                    <Link href={`/admin/article/edit`} className="mr-2">
                        <IconButton color="primary">
                            <Edit />
                        </IconButton>
                    </Link>
                    <IconButton
                        color="error"
                        onClick={() => deleteArticle(row.id)}
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
                <Head title="article" />

                <Box sx={{ height: 600, mx: "auto" }}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Titre
                            isDashboard={false}
                            title={"ARTICLE"}
                            subTitle={"Gestion des articles"}
                        />

                        <Box sx={{ textAlign: "right", mb: 1.3 }}>
                            <Link
                                href={`/admin/article/create/`}
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
