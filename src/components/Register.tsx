import React from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { Box, Checkbox, Typography } from "@mui/material";


interface RegistrationData {
    full_name: string;
    email: string;
    phone: string;
    password: string;
    role: string;
    is_active:  number;
    confirm_password?: string;
  }
const Register = () => {

  const props: RegistrationData = {
    full_name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    is_active: 0,
    confirm_password: "",
  };
  const [registrationData, setRegistrationData] = React.useState<RegistrationData>(props);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setRegistrationData(prev => ({ ...prev, [name]: value }));
  };
  const handleChecked = (value: number) => {
    const name = "is_active";
    setRegistrationData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registrationData.password !== registrationData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Submitting Registration Data:", registrationData);
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {  "Content-Type": "application/json" },
      body: JSON.stringify(registrationData),
    });
    const data = await response.json();
    console.log("Registration Data:", data);
    // Here you would typically send the data to your backend API for processing
  }
  return (
    <Box      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        px: 60,
      }}>
      <Box
        sx={{
          p: 4,
          maxWidth: 400,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backdropFilter: "blur(4px)",
          background: "rgba(255,255,255,0.85)",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Create Your Account
        </Typography>
        <Input
          placeholder="Full Name"
          name="full_name"
          fullWidth
          sx={{ mb: 2 }}
          onChange={handleChange}
        />
        <Input
          placeholder="Email"
          type="email"
          name="email"
          fullWidth
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Input
          placeholder="Phone"
          type="tel"
          name="phone"
          fullWidth
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Input
          placeholder="Role"
          type="text"
          name="role"
          fullWidth
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          fullWidth
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          name="confirm_password"
          fullWidth
          onChange={handleChange}
          sx={{ mb: 3 }}
        />
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Typography variant="body2" color="textSecondary">
            IS ACTIVE
          </Typography>
          <Checkbox name="is_active" onChange={(e) => handleChecked(e.target.checked ? 1 : 0)} />
        </Box>
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Register;