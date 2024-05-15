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

export default function Index({ auth, mouvementstocks, queryParams = null, success }) {
   


    const deleteMouvementStock = (mouvementstock) => {
        if (!window.confirm("Etes vous sur de vouloir supprimer ce mouvementstock?")) {
            return;
        }
        router.delete(route("destroymouvementstock", mouvementstock.id));
    };

    const theme = useTheme();

    const rows = mouvementstocks.data.map((mouvementstock) => ({
        id: mouvementstock.id,
        reference: mouvementstock.reference,
        quantite: mouvementstock.quantite,
        total: mouvementstock.total,
        type: mouvementstock.type,
    }));

    const columns = [
        {
            field: "id",
            headerName: "ID",
            align: "center",
            headerAlign: "center",
        },
        {
            field: "reference",
            headerName: "Reference",
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
            field: "total",
            headerName: "Total",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "type",
            headerName: "Type",
            align: "center",
            headerAlign: "center",
            renderCell: ({ row: { type } }) => {
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
                                type === "entree"
                                    ? "#d90429"
                                    : type === "sortie"
                                    ? "#70e000"
                                    : type === "en_cours"
                                    ? "#007ea7"
                                    : "grey",
                        }}
                    >
                        {type === "entree" && (
                            <Close sx={{ color: "#fff" }} fontSize="medium" />
                        )}
                        {type === "sortie" && (
                            <Check sx={{ color: "#fff" }} fontSize="medium" />
                        )}
                        {type === "en_cours" && (
                            <Cached sx={{ color: "#fff" }} fontSize="medium" />
                        )}
                        <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                            {type}
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
                    <Link href={`/admin/mouvementstock/edit/`} className="mr-2">
                        <IconButton color="primary">
                            <Edit />
                        </IconButton>
                    </Link>
                    <IconButton
                        color="error"
                        onClick={() => deleteMouvementStock(row.id)}
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
                <Head title="mouvementstock" />

                <Box sx={{ height: 600, mx: "auto" }}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Titre
                            isDashboard={false}
                            title={"MOUVEMENT STOCK"}
                            subTitle={"Gestion des mouvementstocks"}
                        />

                        <Box sx={{ textAlign: "right", mb: 1.3 }}>
                        <Link href={`/admin/mouvementstock/create/`} className="mr-2">
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
