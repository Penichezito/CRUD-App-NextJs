import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6"> CRUD Dashboard</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;