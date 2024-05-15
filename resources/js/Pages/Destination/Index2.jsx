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
    destinations,
    queryParams = null,
    success,
}) {

    const deleteDemande = (destination) => {
        if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette destination?")) {
          return;
        }
        post(route("/destroydestination", destination.id)); 
      };

    const theme = useTheme();

    const rows = destinations.data.map((destination) => ({
        id: destination.id,
        name: destination.chefD,
        nom_dept: destination.nom_dept,
        type_service: destination.type_service,
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
            field: "nom_dept",
            headerName: "Departement",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "type_service",
            headerName: "Service",
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
                    <Link href={`/admin/destination/edit/`} className="mr-2">
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
                <Head title="DESTINATION" />

                <Box sx={{ height: 600, mx: "auto" }}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Titre
                            isDashboard={false}
                            title={"DESTINATION"}
                            subTitle={"Gestion des Destination"}
                        />

                        <Box sx={{ textAlign: "right", mb: 1.3 }}>
                            <Link
                                href={`/admin/destination/create`}
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


