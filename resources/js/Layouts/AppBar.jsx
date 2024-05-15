import { Box, IconButton, Stack, Toolbar } from "@mui/material";
import { MenuIcon } from "lucide-react";
import MuiAppBar from "@mui/material/AppBar";
import { Notifications, ShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/material";
import * as React from 'react';
import Menu from "./Menu";

const AppBar = ({ open, handleDrawerOpen }) => {
    const drawerWidth = 240;

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));



  

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: "none" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>


                <Box flexGrow={1} />

                <Stack direction={"row"}>
                    
                    <Menu />

                    <IconButton color="inherit">
                        <ShoppingCart />
                    </IconButton>

                    <IconButton color="inherit">
                        <Notifications />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default AppBar;
