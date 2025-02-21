import React from "react";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  return (
    <div className="w-full h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white flex flex-col ">
      <h1 className="text-2xl md:text-5xl font-bold px-5 py-8">Login</h1>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col gap-3 justify-center items-center h-full "
      >
        <div className="w-full flex justify-center items-center">
          <input
            className=" w-full md:w-1/3 text-sm  border-[1px] border-rose-500 outline-none rounded-md px-5 py-2"
            type="text"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <input
            className="w-full md:w-1/3  text-sm border-[1px] border-rose-500 outline-none rounded-md px-5 py-2"
            type="text"
            placeholder="**********"
          />
        </div>
        <div className="w-full md:w-1/3 flex px-5 justify-between">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div>
            <button className="text-rose-500 hover:text-rose-600 transition-colors">
              Forget Password
            </button>{" "}
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center ">
          <button className="bg-rose-500 w-full md:w-1/2   rounded-md py-2 text-2xl md:text-xl mt-10 hover:bg-rose-600 font-bold  ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
