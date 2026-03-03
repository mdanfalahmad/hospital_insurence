import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HealthNavbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuType, setMenuType] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    type: string
  ) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuType(null);
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      label: "Individuals",
      items: ["Buy Insurance", "Renew Policy", "Download Policy", "Claim Status"],
    },
    {
      label: "Employers",
      items: ["Group Insurance", "Corporate Plans", "Employee Benefits", "Request Quote"],
    },
    {
      label: "Resources",
      items: ["Find a Doctor", "Network Hospitals", "FAQs", "Blog", "Support Center"],
    },
    {
      label: "About Us",
      items: ["Company Overview", "Careers", "Press & Media", "Contact Us"],
    },
  ];

  const plansMegaMenu = (
    <Box sx={{ p: 3, width: 500 }}>
      <Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Individual Plans
          </Typography>
          {["Basic Health Plan", "Premium Coverage", "Family Health Plan", "Senior Citizen Plan"].map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Special Coverage
          </Typography>
          {["Critical Illness", "Maternity Cover", "Dental & Vision", "Accidental Cover"].map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar color="inherit" elevation={1} sx={{ mb: 4, width: "100%", backgroundColor: "rgba(212, 232, 184, 0.35)" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            HealthSecure
          </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {/* Plans Mega Menu */}
              <Button
                endIcon={<ExpandMoreIcon />}
                onClick={(e) => handleMenuOpen(e, "plans")}
              >
                Plans
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={menuType === "plans"}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {plansMegaMenu}
              </Menu>

              {/* Other Menus */}
              {menuItems.map((menu) => (
                <Box key={menu.label}>
                  <Button
                    endIcon={<ExpandMoreIcon />}
                    onClick={(e) => handleMenuOpen(e, menu.label)}
                  >
                    {menu.label}
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    open={menuType === menu.label}
                    onClose={handleMenuClose}
                  >
                    {menu.items.map((item) => (
                      <MenuItem key={item} onClick={handleMenuClose}>
                        {item}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ))}

              {/* CTA */}
              <Button variant="contained" color="primary">
                Get a Quote
              </Button>
            </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HealthNavbar;