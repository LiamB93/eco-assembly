import { useState } from "react";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import './SignUp.css'

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          className="signup border bg-gray-100 mt-8 font-bold text-lg text-six px-8 py-1 rounded-lg hover:bg-six hover:text-white"
        >
          Sign Up
        </button>
      );
    }
  };

  const { username, email, password, passwordConfirmation } = form;

  return (
    <Layout>
      <div className="sign-up h-screen w-screen flex flex-col place-items-center px-2">
        <h1 className="create-text text-4xl italic font-bold pt-16">Create Your Account</h1>
        <div className="form-container w-full md:w-1/3 h-3/5 border border-gray-200 bg-six rounded-xl shadow-2xl my-12">
          <form
            onSubmit={onSignUp}
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="flex flex-col place-items-start w-full px-8 py-2">
              <label className="username font-semibold text-white">Username</label>
              <input
                className="enteruser border py-2 px-4 rounded-lg w-full mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                autoFocus
                required
                type="text"
                name="username"
                value={username}
                placeholder="Enter username"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col place-items-start py-2 w-full px-8">
              <label className="username font-semibold text-white">Email address</label>
              <input
                className="enteruser border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col place-items-start py-2 w-full px-8">
              <label className="username font-semibold text-white">Password</label>
              <input
                className="enteruser border py-2 px-4 w-full rounded-lg mt-1 placeholder placeholder-gray-400 border-gray-400 focus: outline-none"
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col place-items-start py-2 w-full px-8">
              <label className="username font-semibold text-white">
                Password Confirmation
              </label>
              <input
                className="enteruser border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
