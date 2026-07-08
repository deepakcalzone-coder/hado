require("dotenv").config();
// const User = require("./models/User"); // Removed database model dependency
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const connectDB = require("./db"); //  Removed database connection script

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://6a4cd8dc4015b12317adc2df--super-biscochitos-f5c941.netlify.app"
  ],
  credentials: true
}));

app.use(express.json());

// This array now serves as your temporary database
const users = []; 

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_123";

// SIGNUP (Array-based)
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists in your local array
    const userExists = users.find(u => u.email === email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object with a unique timestamp ID
    const newUser = {
      _id: Date.now().toString(),
      name,
      email,
      password: hashedPassword
    };

    // Push the new user into our temporary array
    users.push(newUser);

    // Generate JWT token
    const token = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token, user: { name, email } });
  } catch (error) {
    res.status(500).json({ message: "Server error during signup" });
  }
});

// LOGIN (Array-based)
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Look for the user in the local array
    const user = users.find(u => u.email === email);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Compare the submitted password with the hashed password in the array
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        message: "Wrong password",
      });
    }

    // Generate JWT token
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user: { email, name: user.name } });
  } catch (error) {
    res.status(500).json({ message: "Server error during login" });
  }
});
 
app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});
const PORT = process.env.PORT || 5000;

const startServer = () => {
  try {
    // Bypassed database connection entirely. Starting the server directly.
    app.listen(PORT, () => {
      console.log(`Server running smoothly on port ${PORT} (Using In-Memory Database Array)`);
    });
  } catch (error) {
    console.log("Server failed to start");
  }
};

startServer();