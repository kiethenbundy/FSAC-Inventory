import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
    IconButton,
    Stack,
    useTheme,
} from "@mui/material";
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

export default function Index({ auth, marches, queryParams = null, success }) {
    queryParams = queryParams || {};

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("marche.index"), queryParams);
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
        router.get(route("marche.index"), queryParams);
    };

    const deleteMarche = (marche) => {
        if (!window.confirm("Etes vous sur de vouloir supprimer ce marche?")) {
            return;
        }
        router.delete(route("marche.destroy", marche.id));
    };

    const theme = useTheme();

    const rows = marches.data.map((marche) => ({
        reference: marche.reference,
        titre: marche.titre,
        num_lot: marche.num_lot,
        quantite: marche.quantite,
        status: marche.status,
    }));

    const columns = [
        {
            field: "reference",
            headerName: "Reference",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "titre",
            headerName: "Titre",
            align: "center",
            headerAlign: "center",
        },
        {
            field: "num_lot",
            headerName: "Num Lot",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "quantite",
            headerName: "Quantite",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "status",
            headerName: "Status",
            align: "center",
            headerAlign: "center",
            renderCell: ({ row: { status } }) => {
                return (
                    <Box
                        sx={{
                            p: "5px",
                            width: "100%",
                            borderRadius: "3px",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            backgroundColor:
                                status === "non_livre"
                                    ? "#d90429"
                                    : status === "livre"
                                    ? "#70e000"
                                    : status === "en_cours"
                                    ? "#007ea7"
                                    : "grey",
                        }}
                    >
                        {status === "non_livre" && (
                            <Close sx={{ color: "#fff" }} fontSize="medium" />
                        )}
                        {status === "livre" && (
                            <Check sx={{ color: "#fff" }} fontSize="medium" />
                        )}
                        {status === "en_cours" && (
                            <Cached sx={{ color: "#fff" }} fontSize="medium" />
                        )}
                        <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                            {status}
                        </Typography>
                    </Box>
                );
            },
        },
        {
            field: "actions",
            headerName: "Actions",
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: ({ row }) => (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Link href={`/admin/marche/edit/`} className="mr-2">
                        <IconButton color="primary">
                            <Edit />
                        </IconButton>
                    </Link>
                    <IconButton
                        color="error"
                        onClick={() => deleteUser(row.id)}
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
                <Head title="marche" />

                <Box sx={{ height: 600, mx: "auto" }}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Titre
                            isDashboard={false}
                            title={"MARCHE"}
                            subTitle={"Gestion des marches"}
                        />

                        <Box sx={{ textAlign: "right", mb: 1.3 }}>
                        <Link href={`/admin/marche/create/`} className="mr-2">
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
