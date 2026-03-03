import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Card,
  CardContent,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PaymentIcon from "@mui/icons-material/Payment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HealthNavbar from "./Navbar";

const drawerWidth = 240;

const HealthDashboard: React.FC = () => {
  return (

    <Box sx={{ display: "flex" }}>
      
      <CssBaseline />
      <HealthNavbar />
      

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            mt: 8, // Adjust for AppBar height
          },
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItemButton>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
              <ListItemText primary="My Policy" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon><AssignmentIcon /></ListItemIcon>
              <ListItemText primary="Claims" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon><PaymentIcon /></ListItemIcon>
              <ListItemText primary="Payments" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon><SupportAgentIcon /></ListItemIcon>
              <ListItemText primary="Support" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f4f6f8",
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />

        {/* Summary Cards */}
        <Grid container spacing={3}>
          {[
            { title: "Active Policy", value: "Family Premium Plan" },
            { title: "Total Coverage", value: "$500,000" },
            { title: "Claims This Year", value: "3" },
            { title: "Premium Due", value: "$250 (Due 15th Feb)" },
          ].map((card) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={card.title}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle2" color="text.secondary">
                    {card.title}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {card.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Recent Claims Table */}
        <Box mt={5}>
          <Typography variant="h6" gutterBottom>
            Recent Claims
          </Typography>
          <Card>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Claim ID</TableCell>
                    <TableCell>Hospital</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    {
                      id: "CLM-1023",
                      hospital: "City Care Hospital",
                      date: "10 Feb 2026",
                      amount: "$1,200",
                      status: "Approved",
                    },
                    {
                      id: "CLM-1020",
                      hospital: "Green Valley Clinic",
                      date: "02 Jan 2026",
                      amount: "$450",
                      status: "Pending",
                    },
                  ].map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.hospital}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          color={
                            row.status === "Approved"
                              ? "success"
                              : "warning"
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Box>

        {/* Action Buttons */}
        <Box mt={4} display="flex" gap={2}>
          <Button variant="contained">File New Claim</Button>
          <Button variant="outlined">Download Policy</Button>
          <Button variant="outlined">Make Payment</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HealthDashboard;