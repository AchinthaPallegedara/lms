"use client";

import { Compass, Layout } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
    {
        icon: Layout,
        lable : "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        lable : "Browse",
        href: "/search",
    },
]

export const SidebarRoutes = () => {
    const routes = guestRoutes;
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem 
                    key={route.href}
                    icon={route.icon}
                    lable={route.lable}
                    href={route.href}
                />
            ))}
        </div>
    )

}