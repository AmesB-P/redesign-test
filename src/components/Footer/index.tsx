"use client"
import React from "react";
import {Container , Typography , Link } from "@mui/material";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {"Copyright © "}
            <Link color="inherit" href="">
                Porames.A
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function StickyFooter() {

    return (
            <Container maxWidth="sm">
                <Typography variant="body1">
                    This is footer.
                </Typography>
                <Copyright />
            </Container>
    );
}
