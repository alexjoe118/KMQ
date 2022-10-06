import { useState } from "react";
import {
  AppBar,
  // IconButton,
  // Avatar,
  // Popover,
  // List,
  // ListSubheader,
  // ListItemButton,
  Button,
} from "@mui/material";
// import OnlineIndicator from "./OnlineIndicator";
// import AuthModal from "./AuthModal";
// import { useAuth } from "../contexts/AuthContext";
import { styled } from "@mui/material/styles";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  // const { isLoggedIn, account, logout } = useAuth();

  // const [anchorEl, setAnchorEl] = useState(null);
  // const [popover, setPopover] = useState(false);
  // const [authModal, setAuthModal] = useState(false);
  // const [register, setRegister] = useState(false);

  // const openPopover = (e) => {
  //   setPopover(true);
  //   setAnchorEl(e.currentTarget);
  // };

  // const closePopover = () => {
  //   setPopover(false);
  //   setAnchorEl(null);
  // };

  // const clickLogin = () => {
  //   setRegister(false);
  //   setAuthModal(true);
  //   closePopover();
  // };

  // const clickRegister = () => {
  //   setRegister(true);
  //   setAuthModal(true);
  //   closePopover();
  // };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: `#ffffff`,
    backgroundColor: `#6ca798`,
    "&:hover": {
      backgroundColor: `#6ca798`,
    },
    padding: `10px 40px 10px 40px`,
    margin: `5px`,
    marginRight: `10%`,
  }));
  return (
    <AppBar className="header"  style={{ boxShadow: "none"}} position="static">
      <div className="text-3xl ml-20">KMQ</div>

      <ColorButton variant="contained">
        <span className="text-xl">
          Next <FontAwesomeIcon icon={faArrowRight} className="text-xl" />{" "}
        </span>
      </ColorButton>

      {/* <IconButton onClick={openPopover}>
        <OnlineIndicator online={isLoggedIn}>
          <Avatar src={account?.username || ""} alt={account?.username || ""} />
        </OnlineIndicator>
      </IconButton>

      <Popover
        anchorEl={anchorEl}
        open={popover}
        onClose={closePopover}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <List style={{ minWidth: "100px" }}>
          <ListSubheader style={{ textAlign: "center" }}>
            Hello, {isLoggedIn ? account.username : "Guest"}
          </ListSubheader>

          {isLoggedIn ? (
            <ListItemButton onClick={logout}>Logout</ListItemButton>
          ) : (
            <Fragment>
              <ListItemButton onClick={clickLogin}>Login</ListItemButton>
              <ListItemButton onClick={clickRegister}>Reigster</ListItemButton>
            </Fragment>
          )}
        </List>
      </Popover>

      <AuthModal
        open={authModal}
        close={() => setAuthModal(false)}
        isRegisterMode={register}
        toggleRegister={() => setRegister((prev) => !prev)}
      /> */}
    </AppBar>
  );
}
