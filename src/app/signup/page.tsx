'use client';
import {
  UserButton,
  SignInButton,
  useUser,
  useOrganization,
  useAuth,
} from "@clerk/nextjs";
import TodoApp from "../components/TodoApp";

export default function SignUp() {
  const { user, isLoaded } = useUser();

  return (
    <div>
      { isLoaded &&  ( 
         user? <TodoApp/> : 
         <div>
         <SignInButton mode="modal">
           <button className="relative">
             Login
             <span
               className={`absolute bottom-0 left-0 w-0 h-1 rounded-full transition-all duration-300 ease-in-out group-hover:w-full bg-gradient-to-r`}
             ></span>
           </button>
         </SignInButton>
       </div>
        )
      }
    </div>
  )
}

