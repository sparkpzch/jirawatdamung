"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Format currency to THB
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 2,
  }).format(amount);
};

// Define icons directly to avoid extra file dependencies for this sample
const mainListItems = (
  <React.Fragment>
    <ListItemButton
      sx={{
        borderRadius: 2,
        mx: 1,
        mb: 0.5,
        "&:hover": {
          backgroundColor: "rgba(37, 99, 235, 0.08)",
          transform: "translateX(4px)",
        },
        transition: "all 0.2s ease-in-out",
      }}
    >
      <ListItemIcon sx={{ color: "primary.main" }}>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="แดชบอร์ด" />
    </ListItemButton>
    <ListItemButton
      sx={{
        borderRadius: 2,
        mx: 1,
        mb: 0.5,
        "&:hover": {
          backgroundColor: "rgba(37, 99, 235, 0.08)",
          transform: "translateX(4px)",
        },
        transition: "all 0.2s ease-in-out",
      }}
    >
      <ListItemIcon sx={{ color: "primary.main" }}>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="คำสั่งซื้อ" />
    </ListItemButton>
    <ListItemButton
      sx={{
        borderRadius: 2,
        mx: 1,
        mb: 0.5,
        "&:hover": {
          backgroundColor: "rgba(37, 99, 235, 0.08)",
          transform: "translateX(4px)",
        },
        transition: "all 0.2s ease-in-out",
      }}
    >
      <ListItemIcon sx={{ color: "primary.main" }}>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="ลูกค้า" />
    </ListItemButton>
    <ListItemButton
      sx={{
        borderRadius: 2,
        mx: 1,
        mb: 0.5,
        "&:hover": {
          backgroundColor: "rgba(37, 99, 235, 0.08)",
          transform: "translateX(4px)",
        },
        transition: "all 0.2s ease-in-out",
      }}
    >
      <ListItemIcon sx={{ color: "primary.main" }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="รายงาน" />
    </ListItemButton>
    <ListItemButton
      sx={{
        borderRadius: 2,
        mx: 1,
        mb: 0.5,
        "&:hover": {
          backgroundColor: "rgba(37, 99, 235, 0.08)",
          transform: "translateX(4px)",
        },
        transition: "all 0.2s ease-in-out",
      }}
    >
      <ListItemIcon sx={{ color: "primary.main" }}>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="การเชื่อมต่อ" />
    </ListItemButton>
  </React.Fragment>
);

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    borderRight: "1px solid rgba(0, 0, 0, 0.08)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            แดชบอร์ด
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
          }}
        >
          <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">{mainListItems}</List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid size={{ xs: 12, md: 8, lg: 9 }}>
              <Paper
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  height: 280,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  borderRadius: 3,
                  boxShadow: "0 10px 40px rgba(102, 126, 234, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                  },
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 15px 50px rgba(102, 126, 234, 0.4)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <TrendingUpIcon sx={{ mr: 1, fontSize: 28 }} />
                  <Typography
                    component="h2"
                    variant="h6"
                    sx={{ fontWeight: 600, color: "white" }}
                    gutterBottom
                  >
                    ยอดขายล่าสุด
                  </Typography>
                </Box>
                <Typography
                  component="p"
                  variant="h3"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  {formatCurrency(3024)}
                </Typography>
                <Typography sx={{ flex: 1, opacity: 0.9 }}>
                  วันที่ 15 มีนาคม 2567
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: 500,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    ดูยอดเงินคงเหลือ →
                  </Link>
                </Box>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid size={{ xs: 12, md: 4, lg: 3 }}>
              <Paper
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  height: 280,
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  color: "white",
                  borderRadius: 3,
                  boxShadow: "0 10px 40px rgba(245, 87, 108, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                  },
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 15px 50px rgba(245, 87, 108, 0.4)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <AccountBalanceWalletIcon sx={{ mr: 1, fontSize: 28 }} />
                  <Typography
                    component="h2"
                    variant="h6"
                    sx={{ fontWeight: 600, color: "white" }}
                    gutterBottom
                  >
                    เงินฝาก
                  </Typography>
                </Box>
                <Typography
                  component="p"
                  variant="h3"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  {formatCurrency(2000)}
                </Typography>
                <Typography sx={{ flex: 1, opacity: 0.9 }}>
                  วันที่ 15 มีนาคม 2567
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: 500,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    ดูยอดเงินคงเหลือ →
                  </Link>
                </Box>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid size={{ xs: 12 }}>
              <Paper
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                  },
                }}
              >
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 3 }}
                >
                  คำสั่งซื้อล่าสุด
                </Typography>
                <Box
                  sx={{
                    overflow: "auto",
                    borderRadius: 2,
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          color: "white",
                        }}
                      >
                        <th
                          style={{
                            textAlign: "left",
                            padding: "16px",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          วันที่
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            padding: "16px",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          ชื่อ
                        </th>
                        <th
                          style={{
                            textAlign: "left",
                            padding: "16px",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          จัดส่งไปที่
                        </th>
                        <th
                          style={{
                            textAlign: "right",
                            padding: "16px",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          จำนวนเงิน
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          date: "16 มีนาคม 2567",
                          name: "สมชาย ส.",
                          shipTo: "กรุงเทพมหานคร",
                          amount: 312.44,
                        },
                        {
                          date: "16 มีนาคม 2567",
                          name: "สมหญิง จ.",
                          shipTo: "เชียงใหม่",
                          amount: 866.99,
                        },
                        {
                          date: "16 มีนาคม 2567",
                          name: "วิชัย ก.",
                          shipTo: "ภูเก็ต",
                          amount: 100.81,
                        },
                      ].map((row, index) => (
                        <tr
                          key={index}
                          style={{
                            borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                            transition: "background-color 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "rgba(102, 126, 234, 0.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          <td style={{ padding: "16px", color: "#64748b" }}>
                            {row.date}
                          </td>
                          <td style={{ padding: "16px", fontWeight: 500 }}>
                            {row.name}
                          </td>
                          <td style={{ padding: "16px", color: "#64748b" }}>
                            {row.shipTo}
                          </td>
                          <td
                            style={{
                              padding: "16px",
                              textAlign: "right",
                              fontWeight: 600,
                              color: "#2563eb",
                            }}
                          >
                            {formatCurrency(row.amount)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
                <Link
                  color="primary"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  sx={{
                    mt: 3,
                    fontWeight: 500,
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  ดูคำสั่งซื้อเพิ่มเติม →
                </Link>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
