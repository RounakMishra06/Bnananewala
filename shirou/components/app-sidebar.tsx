"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { BarChart3, Home, Leaf, Medal, Trophy } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AppSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
    },
    {
      title: "Impact Tracker",
      icon: BarChart3,
      href: "/impact",
    },
    {
      title: "Challenges & Rewards",
      icon: Trophy,
      href: "/challenges",
    },
    {
      title: "Leaderboard",
      icon: Medal,
      href: "/leaderboard",
    },
    {
      title: "Log Green Act",
      icon: Leaf,
      href: "/log-act",
    },
  ]

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
            <Leaf className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold">GreenCoins</span>
        </div>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>RK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Rounak</span>
            <span className="text-xs text-muted-foreground">152 GreenCoins</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
