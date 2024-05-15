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
    AdminPanelSettingsOutlined,
    Delete,
    Edit,
    LockOpenOutlined,
    SecurityOutlined,
} from "@mui/icons-material";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";
import { Head, Link } from "@inertiajs/react";
import Titre from "../Titre";

export default function Index({
    auth,
    demandes,
    queryParams = null,
    success,
}) {

    const deleteDemande = (demande) => {
        if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette demande?")) {
          return;
        }
        post(route("/destroydemande", demande.id)); 
      };

    const theme = useTheme();

    const rows = demandes.data.map((demande) => ({
        id: demande.id,
        name: demande.name,
        description: demande.description,
        status: demande.status,
        user: demande.user_id,
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
            field: "description",
            headerName: "Description",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "user",
            headerName: "Utilisateur",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "status",
            headerName: "Status",
            felx:1,
            align: "center",
            headerAlign: "center",
            renderCell: ({ row: { status } }) => {
                return (
                    <Box
                        sx={{
                            p: "5px",
                            marginTop:"9px",
                            width: "99px",
                            borderRadius: "3px",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            backgroundColor:
                                status === "nonlivre"
                                    ? "#c1121f"
                                    : status === "encours"
                                    ? "#003049"
                                    : status === "livre"
                                    ? "#3da58a"
                                    : "grey",
                        }}
                    >
                        {status === "nonlivre" && (
                            <AdminPanelSettingsOutlined
                                sx={{ color: "#fff" }}
                                fontSize="medium"
                            />
                        )}
                        {status === "encours" && (
                            <SecurityOutlined
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                        )}
                        {status === "livre" && (
                            <LockOpenOutlined
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                        )}
                        <Typography sx={{ fontSize: "13px", color: "#fff" , display:"center" }}>
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
                    <Link href={`/admin/demande/edit/`} className="mr-2">
                        <IconButton color="primary">
                            <Edit />
                        </IconButton>
                    </Link>
                    <IconButton
                        color="error"
                        onClick={() => deleteDemande(row.id)}
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
                <Head title="Demandes" />

                <Box sx={{ height: 600, mx: "auto" }}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Titre
                            isDashboard={false}
                            title={"Demandes"}
                            subTitle={"Gestion des Demandes"}
                        />

                        <Box sx={{ textAlign: "right", mb: 1.3 }}>
                            <Link
                                href={`/admin/demande/create`}
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


