import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { LogOut, Settings, User } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SidebarTrigger } from './ui/sidebar'


export default function Navbar() {
    return (
        <nav className='p-4 flex items-center justify-between sticky top-0 bg-background z-10'>
            <SidebarTrigger />
            <div className="flex items-center gap-4">
                <Link href={"/"}>
                    Dashboard
                </Link>

                {/* Theme toggle */}
                <ThemeToggle />

                {/* Profile dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar className='size-10'>
                            <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" alt='profile image' />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10} align='end'>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className='h-[1.2rem] w-[1.2rem] mr-2' />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className='h-[1.2rem] w-[1.2rem] mr-2' />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant='destructive'>
                            <LogOut className='h-[1.2rem] w-[1.2rem] mr-2' />
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}
