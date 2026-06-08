import { useState, type FormEvent } from "react";
import { useLoginMutation, useRegisterMutation } from "../redux/features/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [login] =  useLoginMutation();
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit =async (e:FormEvent)=>{
    e.preventDefault();
    if(isLogin){
      try {
        let response = await login({email,password}).unwrap();
        localStorage.setItem("sdtoken",response.token);
        navigate('/');
        toast.success("Login suceessfull")
      } catch (error:any) {
        toast.error(error.data.message)
      }
    }
    else{
      try {
        let response = await register({username,email,password}).unwrap();
        toast.success(response.message);
        setEmail("");
        setPassword("");
        setIsLogin(!isLogin);
      } catch (error:any) {
        toast.error(error.data.message);
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">

      <div className="flex min-h-screen items-center justify-center px-4">

        <div className="w-full max-w-sm rounded-2xl border border-[#27272A] bg-[#18181B] p-5 sm:p-6">

          {/* Logo */}

          
          <h1 className="text-center text-3xl font-bold tracking-[-0.04em] text-[#FAFAFA] select-none leading-none " >System<span className="text-[#A1A1AA]">Design</span></h1>

          {/* Heading */}

          {/* <h2 className="mt-4 text-center text-lg font-medium">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2> */}

          <p className="mt-4 text-center text-sm text-[#A1A1AA]">
            {isLogin
              ? "Login to access your saved designs"
              : "Create an account to start generating designs"}
          </p>

          {/* Form */}

          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>

            {!isLogin && (
              <div>
                <label className="mb-2 block text-sm text-[#A1A1AA]">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Enter username"
                  onChange={(e)=>setUsername(e.target.value)}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#27272A]
                    bg-[#09090B]
                    px-4
                    py-2.5
                    text-sm
                    outline-none
                    transition
                    focus:border-[#52525B]
                  "
                />
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm text-[#A1A1AA]">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                onChange={(e)=>setEmail(e.target.value)}
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#27272A]
                  bg-[#09090B]
                  px-4
                  py-2.5
                  text-sm
                  outline-none
                  transition
                  focus:border-[#52525B]
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#A1A1AA]">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                onChange={(e)=>setPassword(e.target.value)}
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#27272A]
                  bg-[#09090B]
                  px-4
                  py-2.5
                  text-sm
                  outline-none
                  transition
                  focus:border-[#52525B]
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-[#E4E4E7]
                px-4
                py-2.5
                text-sm
                font-medium
                text-black
                transition
                hover:bg-white
              "
            >
              {isLogin ? "Login" : "Create Account"}
            </button>

          </form>

          {/* Switch */}

          <p className="mt-6 text-center text-sm text-[#A1A1AA]">

            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-white hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

