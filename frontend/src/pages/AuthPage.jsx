import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import styled from "styled-components";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";

// --- Notification Component ---
const Notification = ({ message, type, onClose }) => {
  if (!message) return null;
  return (
    <NotifBox type={type}>
      {message}
      <span onClick={onClose} style={{ marginLeft: 12, cursor: "pointer" }}>
        ×
      </span>
    </NotifBox>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [notif, setNotif] = useState({ message: "", type: "" });

  const { authenticate, userInfo, loading, error, clearError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (userInfo) {
      setNotif({ message: "Login/Signup successful!", type: "success" });
      setTimeout(() => {
        setNotif({ message: "", type: "" });
        navigate(from, { replace: true });
      }, 1200);
    }
  }, [userInfo, navigate, from]);

  useEffect(() => {
    if (error) {
      // Show a user-friendly message for invalid login
      if (
        isLogin &&
        (error.toLowerCase().includes("invalid email or password") ||
          error.toLowerCase().includes("401"))
      ) {
        setNotif({ message: "Invalid email or password", type: "error" });
      } else {
        setNotif({ message: error, type: "error" });
      }
    }
  }, [error, isLogin]);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    clearError();
    setNotif({ message: "", type: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate(isLogin ? "login" : "signup", formData);
    setFormData({ name: "", email: "", password: "" }); // Clear inputs after submit
  };

  const handleNotifClose = () => setNotif({ message: "", type: "" });

  if (loading) return <Spinner />;

  return (
    <AuthContainer>
      <FormBox>
        <Notification
          message={notif.message}
          type={notif.type}
          onClose={handleNotifClose}
        />
        <Heading as="h1">{isLogin ? "Welcome Back" : "Create Account"}</Heading>
        <Heading as="p">
          {isLogin
            ? "Login to access your FarZara account"
            : "Join FarZara London for a premium experience"}
        </Heading>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <InputGroup>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </InputGroup>
          )}

          <InputGroup>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </InputGroup>

          <InputGroup>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="enter password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </InputGroup>

          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Login In" : "Sign Up"}
          </SubmitButton>
        </form>

        <ToggleText>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleMode}>
            {isLogin ? " Register Account" : " Login here"}
          </span>
        </ToggleText>
      </FormBox>
    </AuthContainer>
  );
};

export default AuthPage;

// --- STYLED COMPONENTS ---

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
`;

const FormBox = styled.div`
  background: #fff;
  padding: 4rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
`;

const InputGroup = styled.div`
  text-align: left;
  margin-bottom: 15px;

  label {
    display: block;
    font-size: 1.4rem;
    margin-top: 2rem;
    margin-bottom: 0.9rem;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 1.2rem;
    border: 1px solid #ddd;
    border-radius: var(--border-radius-md);
    outline: none;
    transition: border 0.3s;
    &:focus {
      border-color: #1a1a1a;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.9;
  }
`;

const ToggleText = styled.p`
  margin-top: 20px;
  font-size: 1.4rem;
  color: #666;

  span {
    color: #1a1a1a;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const NotifBox = styled.div`
  background: ${({ type }) => (type === "success" ? "#d4edda" : "#f8d7da")};
  color: ${({ type }) => (type === "success" ? "#155724" : "#721c24")};
  border: 1px solid
    ${({ type }) => (type === "success" ? "#c3e6cb" : "#f5c6cb")};
  padding: 1rem 1.5rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
