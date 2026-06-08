import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, User, X, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { authApi, useGetCurrentUserQuery } from "../redux/features/authApi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  const isAuthenticated = !!localStorage.getItem('sdtoken');
  const dispatch  = useDispatch();
  const navigate = useNavigate();

  const {data} = useGetCurrentUserQuery();
  
  const handleLogout = ()=>{
    localStorage.removeItem("sdtoken");
    dispatch(authApi.util.resetApiState());
    navigate('/');
  }

  useEffect(() => {

    const handler = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const user = {
    name: data?.username || "username",
    email: data?.email || "email@example.com",
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#27272A] bg-[#09090B]/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1800px] items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-1.5"
        >

          {/* Logo */}

          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              shrink-0
            "
          >
            <img
              src='/logo.svg'
              alt="SystemDesign"
              className="h-7 w-7"
            />
          </div>

          {/* Brand */}

          <h1
            className="
              text-xl
              font-bold
              tracking-[-0.04em]
              text-[#FAFAFA]
              select-none
              leading-none
            "
          >
            System
            <span className="text-[#A1A1AA]">
              Design
            </span>
          </h1>

        </Link>

        {/* Desktop Links */}

        <nav className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-sm text-[#A1A1AA] hover:text-white transition"
          >
            Home
          </Link>

          {isAuthenticated && <Link
            to="/dashboard"
            className="text-sm text-[#A1A1AA] hover:text-white transition"
          >
            Dashboard
          </Link>}

          <Link
            to="/generate-design"
            className="text-sm text-[#A1A1AA] hover:text-white transition"
          >
            Generate
          </Link>

        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">

          {/* Profile */}

          {isAuthenticated?(<div
            className="relative hidden md:block"
            ref={profileRef}
          >
            <button
              onClick={() => setProfileOpen((prev) => !prev)}
              className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-[#18181B] border border-[#27272A]"
            >
              <User size={18} className="text-white"/>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-[#27272A] bg-[#18181B] p-4 shadow-xl">

                <div className="border-b border-[#27272A] pb-4">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#27272A]">
                        <User size={18} className="text-white" />
                        </div>

                        <div>

                        <h3 className="text-sm font-medium text-white">
                            {user.name}
                        </h3>

                        <p className="mt-1 text-xs text-[#A1A1AA]">
                            {user.email}
                        </p>

                        </div>

                    </div>

                </div>

                <button
                  onClick={handleLogout}
                  className="mt-3 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-white hover:bg-[#27272A]"
                >
                  <LogOut size={16} />
                  Logout
                </button>

              </div>
            )}
          </div>):(
            <Link
              to="/auth"
              className="
                hidden
                md:flex
                items-center
                justify-center
                rounded-xl
                bg-[#E4E4E7]
                px-4
                py-2
                text-sm
                font-medium
                text-black
                transition
                hover:bg-white
              "
            >
              Sign In
            </Link>
          )}

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[#27272A] bg-[#18181B] hover:border-[#52525B]"
          >
            {mobileOpen ? <X size={18} className="text-white"/> : <Menu size={18}  className="text-white"/>}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="border-t border-[#27272A] bg-[#09090B] md:hidden">

          <div className="p-4">

  {/* Profile Section */}

  <div className="mb-4 rounded-2xl border border-[#27272A] bg-[#18181B] p-4">

    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#27272A]">
        <User size={18} className="text-white" />
      </div>

      <div>
        <h3 className="text-sm font-medium text-white">
          {user.name}
        </h3>

        <p className="mt-1 text-xs text-[#A1A1AA]">
          {user.email}
        </p>
      </div>

    </div>

  </div>

  {/* Navigation Links */}

  <div className="space-y-2">

    <Link
      to="/"
      className="block rounded-xl px-4 py-3 text-sm text-[#A1A1AA] hover:bg-[#18181B]"
    >
      Home
    </Link>

    {isAuthenticated && <Link
      to="/dashboard"
      className="block rounded-xl px-4 py-3 text-sm text-[#A1A1AA] hover:bg-[#18181B]"
    >
      Dashboard
    </Link>}

    <Link
      to="/generate-design"
      className="block rounded-xl px-4 py-3 text-sm text-[#A1A1AA] hover:bg-[#18181B]"
    >
      Generate
    </Link>

  </div>

  {/* Logout */}

  <div className="mt-4 border-t border-[#27272A] pt-4">

    <button
      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-white hover:bg-[#18181B]"
    >
      <LogOut size={16} />
      Logout
    </button>

  </div>

</div>

        </div>
      )}
    </header>
  );
}