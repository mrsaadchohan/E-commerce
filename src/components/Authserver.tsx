'use server'
import { Button } from "@/components/ui/button"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from "./UserNav";


async function Authserver() {
 const { getUser } = getKindeServerSession();  
  const user= await getUser();
    return (
    <div>
               <div className="flex gap-4">
          {user ?(
           <UserNav name={user.given_name as string} email={user.email as string} 
           userImage={user.picture}/>        
          ):(
              <div className="flex gap-4">
                <Button className="">
            <LoginLink>Login</LoginLink>
          </Button>
          <Button>
            <RegisterLink>Register</RegisterLink>
          </Button>
              </div>
          )}
                </div> 
    </div>
  )
}

export default Authserver