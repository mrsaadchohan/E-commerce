import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import Image from 'next/image'
interface Iprops
{
    email:string;
    name:string;
    userImage:any;
}
function UserNav({email,name,userImage}:Iprops) {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='relative h-10 w-10 rounded-full'>
                    {/* <Image src={userImage} alt='UserImage'/> */}
                    <Avatar className='h-10 w-10'>
                        <AvatarImage src={userImage} alt='UserImahe'/>
                    <AvatarFallback>{name.slice(0,3)}</AvatarFallback>                
                </Avatar>
                </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-48' align='end' forceMount>
            <DropdownMenuLabel>
                <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>{name}</p>
                    <p className='text-xs  text-muted-foreground'>{email}</p>

                </div>

            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
                <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>
    </div>
  )
}

export default UserNav