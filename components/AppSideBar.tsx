import { Calendar, ChevronDown, ChevronUp, DollarSign, Globe2, Home, Inbox, LucideIcon, Plus, Projector, User, User2 } from 'lucide-react';
import Link from 'next/link';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarSeparator } from './ui/sidebar';

interface item {
	title: string;
	url: string;
	icon: LucideIcon
}
const items: item[] = [
	{
		title: "Home",
		url: "/",
		icon: Home
	},
	{
		title: "Users",
		url: "/users/donaldTrump",
		icon: User
	},
	{
		title: "Payments",
		url: "/payments",
		icon: DollarSign
	},
	{
		title: "Inbox",
		url: "#",
		icon: Inbox
	},
	{
		title: "Calender",
		url: "#",
		icon: Calendar
	},
]


export default function AppSideBar() {
	return (
		<Sidebar collapsible='icon'>
			<SidebarHeader className="py-4">
				<SidebarMenu >
					<SidebarMenuItem >
						<SidebarMenuButton asChild>
							<Link href={"/"}>
								<Globe2 />
								<span>White house</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarSeparator />

			<SidebarContent className=''>
				<SidebarGroup>
					<SidebarGroupLabel>
						Application
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
									{item.title === "Inbox" && <SidebarMenuBadge className='bg-secondary rounded-lg'>
										24
									</SidebarMenuBadge>}
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel>
						Application
					</SidebarGroupLabel>
					<SidebarGroupAction>
						<Plus /> <span className='sr-only'> Add Project</span>
					</SidebarGroupAction>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href={"#"}>
										<Projector />
										<span>See All Projects</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href={"#"}>
										<Plus />
										<span>Add Project</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				{/* collapsible group */}
				<Collapsible defaultOpen className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Help
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link href={"#"}>
												<Projector />
												<span>See All Projects</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link href={"#"}>
												<Plus />
												<span>Add Project</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>

				{/* Nested Menu */}
				<SidebarGroup>
					<SidebarGroupLabel>
						Application
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href={"#"}>
										<Projector />
										<span>See All Projects</span>
									</Link>
								</SidebarMenuButton>
								<SidebarMenuSub>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link href={"#"}>
												<Plus />
												<span>Add Project</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenuSub>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<User2 /> Admin
									<ChevronUp className='ml-auto' />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								side="top"
								className="w-[--radix-popper-anchor-width]"
							>
								<DropdownMenuItem>
									<span>Account</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<span>Billing</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<span>Sign out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>

						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar >
	)
}
