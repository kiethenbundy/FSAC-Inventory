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

export default function Index({ auth, users, queryParams = null, success }) {
    queryParams = queryParams || {};
    

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("/admin/user"), queryParams);
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
        router.get(route("/admin/user"), queryParams);
    };

    const deleteUser = (id) => {
        if (!window.confirm("Are you sure you want to delete the user?")) {
            return;
        }
        console.log(id);
        router.delete(route("/destroyuser", id));
    };

    const theme = useTheme();

    const rows = users.data.map((user) => ({
        id: user.id,
        nom: user.name,
        email: user.email,
        date_creation: user.created_at,
        usertype: user.usertype,
    }));

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 33,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "nom",
            headerName: "Nom",
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
            field: "date_creation",
            headerName: "Date Creation",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "usertype",
            headerName: "Role",
            felx:1,
            align: "center",
            headerAlign: "center",
            renderCell: ({ row: { usertype } }) => {
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
                                usertype === "admin"
                                    ? "#c1121f"
                                    : usertype === "magasinier"
                                    ? "#003049"
                                    : usertype === "chefD"
                                    ? "#3da58a"
                                    : usertype === "chefservice"
                                    ? "#3da58a"
                                    : "grey",
                        }}
                    >
                        {usertype === "admin" && (
                            <AdminPanelSettingsOutlined
                                sx={{ color: "#fff" }}
                                fontSize="medium"
                            />
                        )}
                        {usertype === "magasiner" && (
                            <SecurityOutlined
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                        )}
                        {usertype === "chefD" && (
                            <LockOpenOutlined
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                        )}
                        {usertype === "chefservice" && (
                            <HttpsOutlined
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                        )}
                        <Typography sx={{ fontSize: "13px", color: "#fff" , display:"center" }}>
                            {usertype}
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
                    <Link href={`/admin/user/edit/`} className="mr-2">
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
                <Head title="Users" />

                <Box sx={{ height: 600, mx: "auto" }}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Titre
                            isDashboard={false}
                            title={"USERS"}
                            subTitle={"Creer Un Utilisateur"}
                        />
                      
                        <Box sx={{ textAlign: "right", mb: 1.3 }}>
                            <Link
                                href={`/admin/user/create`}
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
