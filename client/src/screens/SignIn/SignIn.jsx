import { useState } from "react";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
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
          className="border bg-gray-100 mt-8 font-bold text-lg text-six px-8 py-1 rounded-lg hover:bg-six hover:text-white"
        >
          Sign In
        </button>
      );
    }
  };

  const { email, password } = form;

  return (
    <Layout>
      <div className="h-screen w-screen flex flex-col place-items-center">
          <h3 className="text-4xl italic font-bold pt-16">Sign In</h3>
        <div className="form-container w-1/3 h-2/5 flex flex-col justify-center border border-gray-200 bg-six rounded-xl shadow-2xl my-12">
          <form onSubmit={onSignIn}>
            <div className="flex flex-col place-items-start w-full px-8 py-2">
              <label className="font-semibold text-white">Email</label>
              <input
                className="border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                autoFocus
                required
                type="text"
                name="email"
                value={email}
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col place-items-start w-full px-8 py-2">
              <label className="font-semibold text-white">Password</label>
              <input
                className="border py-2 px-4 w-full rounded-lg mt-1 placeholder-gray-400 border-gray-400 focus: outline-none"
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
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

export default SignIn;
