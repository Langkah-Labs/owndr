import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '~/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

import { Form, href, Link } from 'react-router'

type NavbarProps = {
  user?: SessionUser
}

export function Navbar({ user }: NavbarProps) {
  return (
    <div className="border-b border-b-gray-200">
      <div className="container mx-auto flex items-center justify-between py-1.5">
        <NavigationMenu className="gap-2">
          <p className="font-bold text-md p-2">Owndr</p>

          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to={href('/')}>Dashboard</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to={href('/users')}>Users</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="size-7">
                <AvatarImage src={user.avatar ?? undefined} />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/users/profile">Edit Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="text-red-500">
                <Form action={href('/signout')} method="delete">
                  <button className="size-full text-left" type="submit">
                    Sign Out
                  </button>
                </Form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : null}
      </div>
    </div>
  )
}
