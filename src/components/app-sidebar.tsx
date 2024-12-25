"use client"

import React from "react"
import Link from "next/link"
import { getLinks } from "@/data/data"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar"

export function AppSidebar() {
    const itemsHeader = getLinks().itemsHeader
    const itemsFooter = getLinks().itemsFooter

    return (
        <Sidebar className="bg-background border-r border-border text-foreground z-40 h-screen fixed top-0 left-0">
            <div className="h-screen flex flex-col bg-background">
            <SidebarContent>
                <SidebarGroup className="mt-5 sm:mt-14">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {itemsHeader.map((item) => (
                                <SidebarMenuItem key={item.title} className="py-2 sm:py-0">
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className="flex items-center gap-2 p-2 rounded hover:border hover:border-primary"
                                        >
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="list-none gap-y-2 mb-7">
            {itemsFooter.map((item) => (
                <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                    <Link
                    href={item.url}
                    className={`flex items-center gap-2 p-5 rounded ${
                        item.title === 'Settings'
                        ? 'bg-primary text-primary-foreground hover:border hover:border-primary'
                        : 'hover:border hover:border-primary'
                    }`}
                    >
                    <item.icon />
                    <span>{item.title}</span>
                    </Link>
                </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
            </SidebarFooter>
            </div>
        </Sidebar>
    )
}
