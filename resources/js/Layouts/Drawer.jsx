import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import { createTheme, styled} from '@mui/material/styles';
import {AddShoppingCart, Category, Description, Discount, Group, Home, LocalShipping, Note, Place, Summarize, TextSnippet, Warehouse } from '@mui/icons-material';
import { Link } from '@inertiajs/react';

export default function Drawer({open, handleDrawerClose, user}) {

  const drawerWidth = 240;

    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
      });
      
      const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
          width: `calc(${theme.spacing(8)} + 1px)`,
        },
      });

      const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          }),
        }),
      );

      const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
              main: '#44b396',
              light: '#243150',
            },
            secondary: {
              main: '#bb9889',
            },
            background: {
              default: '#070720',
              paper: '#131e3d',
            },
            info: {
              main: '#024c79',
            },
            divider: '#cfd8dc',
            text: {
              primary: '#e4e4e4',
              secondary: 'rgba(230,229,229,0.7)',
              disabled: 'rgba(82,82,82,0.5)',
            },
            error: {
              main: '#f72b1c',
            },
          },
    });;

      var Default1 = [];
      var Default2 = [];

      const Tab1Admin = [
        {'text': 'Dashboard', 'icon': <Home /> , 'path': '/dashboard'},
        {'text': 'Mouvement Stock', 'icon': <Warehouse /> , 'path': '/admin/mouvementstock'},
        {'text': 'Demande', 'icon': <Description /> , 'path': '/admin/demande'},
        {'text': 'Users', 'icon': <Group /> , 'path': '/admin/user'},
        {'text': 'Commande', 'icon': <AddShoppingCart /> , 'path': '/admin/marche'}
      ]
      const Tab2Admin = [
        {'text': 'Fournisseurs', 'icon': <LocalShipping /> , 'path': '/admin/fournisseurs'},
        {'text': 'Bon de Livraison', 'icon': <Note /> , 'path': '/admin/bonlivraison'},
        {'text': 'Bon de Commande', 'icon': <TextSnippet /> , 'path': '/admin/boncommande'},
        {'text': 'Bon de Sortie', 'icon': <Summarize /> , 'path': '/admin/bonsortie'},
        {'text': 'Articles', 'icon': <Discount /> , 'path': '/admin/article'},
        {'text': 'Categorie', 'icon': <Category /> , 'path': '/admin/categorie'},
        {'text': 'Destination', 'icon': <Place /> , 'path': '/admin/destination'}
      ]

      const Tab1Magasinier = [
        {'text': 'Dashboard', 'icon': <Home /> , 'path': '/dashboard'},
        {'text': 'Mouvement Stock', 'icon': <Warehouse /> , 'path': '/magazinier/mouvementstock'},
        {'text': 'Demande', 'icon': <Description /> , 'path': '/magazinier/demande'},
        {'text': 'Commande', 'icon': <AddShoppingCart /> , 'path': '/magazinier/marche'}
      ]
      const Tab2Magasinier = [
        {'text': 'Fournisseurs', 'icon': <LocalShipping /> , 'path': '/magasiner/fournisseurs'},
        {'text': 'Bon de Livraison', 'icon': <Note /> , 'path': '/magasinier/bonlivraison'},
        {'text': 'Bon de Commande', 'icon': <TextSnippet /> , 'path': '/magasinier/boncommande'},
        {'text': 'Bon de Sortie', 'icon': <Summarize /> , 'path': '/magasinier/bonsortie'},
        {'text': 'Articles', 'icon': <Discount /> , 'path': '/magasinier/article'},
        {'text': 'Categorie', 'icon': <Category /> , 'path': '/magasinier/categorie'},
        {'text': 'Destination', 'icon': <Place /> , 'path': '/magasinier/destination'}
      ]

      const Tab1ChefD = [
        {'text': 'Dashboard', 'icon': <Home /> , 'path': '/dashboard'},
      ]
      const Tab2ChefD = [
        {'text': 'Articles', 'icon': <Warehouse /> , 'path': '/chefD/article'},
        {'text': 'Demande', 'icon': <Description /> , 'path': '/chefD/demande'},
      ]
      const Tab1ChefService = [
        {'text': 'Dashboard', 'icon': <Home /> , 'path': '/dashboard'},
      ]
      const Tab2ChefService = [
        {'text': 'Articles', 'icon': <Warehouse /> , 'path': '/chefservice/article'},
        {'text': 'Demande', 'icon': <Description /> , 'path': '/chefservice/demande'},
      ]


      if( user.usertype === 'admin'){
        Default1 = [...Tab1Admin];
        Default2 = [...Tab2Admin];
      }else if ( user.usertype === 'chefD' ){
        Default1 = [...Tab1ChefD];
        Default2 = [...Tab2ChefD];
      }else if( user.usertype === 'chefservice'){
        Default1 = [...Tab1ChefService];
        Default2 = [...Tab2ChefService];
      }else{
        Default1 = [...Tab1Magasinier];
        Default2 = [...Tab2Magasinier];
      }

  return (

    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {Default1.map((index) => (
            <ListItem key={index.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} 
              to={index.path} 
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index.icon}
                </ListItemIcon>
                <ListItemText primary={index.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Default2.map((index) => (
            <ListItem key={index.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              component={Link} 
              to={index.path} 
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index.icon}
                </ListItemIcon>
                <ListItemText primary={index.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}
