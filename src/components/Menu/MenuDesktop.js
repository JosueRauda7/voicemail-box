import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';

//Assets
import classes from "./Menu.module.css";
import HomeIcon from '@material-ui/icons/Home';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AllInboxIcon from '@material-ui/icons/AllInbox';

const MenuDesktop = (props) => {

    return (
        <div className={classes.Navbar}>
            <Grid item>
                <h1 className={classes.h1}>Voicemail Box Manager</h1>
                <hr />
                <nav>
                    <li><Link className={classes.option} to="/"><HomeIcon className={classes.icon} /> Inicio</Link></li>
                    <li><Link className={classes.option} to="/new"><AllInboxIcon className={classes.icon} /> Recibidos</Link></li>
                    <li><Link className={classes.option} to="/saved"><ArchiveIcon className={classes.icon} /> Guardados</Link></li>
                    <li><Link className={classes.option} to="/deleted"><DeleteOutlineIcon className={classes.icon} /> Eliminados</Link></li>
                </nav>
            </Grid>
        </div>
    );
};

export default MenuDesktop;
