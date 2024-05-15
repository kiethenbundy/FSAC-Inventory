import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayoutMagasinier from "@/Layouts/AuthenticatedLayoutMagasinier";


const options = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Magazinier",
    label: "Magazinier",
  },
  {
    value: "ChefDept",
    label: "ChefDept",
  },
  {
    value: "ChefService",
    label: "ChefService",
  },
];

const theme = useTheme();

export default function Create2 ({ auth }) {
  const { data, setData, post, errors, reset } = useForm({
    name: "",
    email: "",
    usertype: "",
    password: "",
    password_confirmation: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("user.store"));
  };

  return (
    <AuthenticatedLayoutMagasinier
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Creer un Nouveau utilisateur
          </h2>
        </div>
      }
    >
    <Box>
      <Head title="Users" />
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
            error={Boolean(errors.firstName)}
            helperText= {errors.name ? errors.name : null}
            
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
          helperText={errors.password_confirmation ? errors.password_confirmation : null}

          value={data.password_confirmation}
          onChange={(e) => setData("password_confirmation", e.target.value)}
          label="Password Confirmation"
          variant="filled"
        />


        
        <TextField
          variant="filled"
          select
          label="Role"
          defaultValue="admin"
          value={data.usertype}
          onChange={(e) => setData("usertype", e.target.value)}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        
        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" sx={{ textTransform: "capitalize" }} color="success" variant="contained">
            Creer Nouveau Utilisateur
          </Button>
          <Button  sx={{ textTransform: "capitalize" }} variant="contained">
          <Link href={route("/admin/user")}>
                  Cancel
          </Link>
          </Button>
        </Box>
      </Box>
    </Box>
    </AuthenticatedLayoutMagasinier>
  );
};


