import logo from '@/assets/logo.png';
import { group } from 'console';
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

// Images and svg
export function getAssets() {
    return {
        logo,
    }
}

// Links
export function getLinks() {
    // Menu items.
    const itemsHeader = [
        {
            title: "Opportunity Bridges",
            url: "#",
            icon: Home,
        },
        {
            title: "Resume Analyzer",
            url: "#",
            icon: Inbox,
        },
        {
            title: "Code Container",
            url: "#",
            icon: Calendar,
        },
        {
            title: "Career Page",
            url: "#",
            icon: Search,
        },
    ]

    const itemsFooter = [
        {
            title: "Help Center",
            url: "#",
            icon: Search,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ]

    // Nav Menu Links
    const ChatXComponents: { title: string; href: string; description: string }[] = [
        {
            title: "Private Messages",
            href: "/docs/primitives/alert-dialog",
            description:
                "Message someone privately, without the need to create a new channel.",
        },
        {
            title: "Chat Hub",
            href: "/docs/primitives/hover-card",
            description:
                "A place where you can see all your chats in one place.",
        },
        {
            title: "Community",
            href: "/docs/primitives/progress",
            description:
                "A place for you to find and join communities, and engage in discussions.",
        },
    ]

    const StudyXComponents: { title: string; href: string; description: string }[] = [
        {
            title: "CourseX",
            href: "/docs/primitives/alert-dialog",
            description:
                "Access all your courses in one place.",
        },
        {
            title: "ConceptorX",
            href: "/docs/primitives/hover-card",
            description:
                "Get clarity on concepts and topics.",
        },
        {
            title: "Notes",
            href: "/docs/primitives/progress",
            description:
                "Get access to all your notes in one place.",
        },
        {
            title: "Roadmaps",
            href: "/docs/primitives/progress",
            description:
                "A place for you to see your progress and plan your future.",
        },
    ]

    const ProjectXComponents: { title: string; href: string; description: string }[] = [
        {
            title: "CoLabX",
            href: "/docs/primitives/alert-dialog",
            description:
                "Collaborate with your team on projects.",
        },
        {
            title: "Projectorium",
            href: "/docs/primitives/hover-card",
            description:
                "Showcase your project ideas and get collaborators",
        },
    ]

    const DoubtEngineComponents: { title: string; href: string; description: string }[] = [
        {
            title: "Doubt Engine",
            href: "/docs/primitives/hover-card",
            description:
                "Ask your doubts and get them resolved easily and quickly through the community support.",
        },
    ]

    const GeneratorXComponents: { title: string; href: string; description: string }[] = [
        {
            title: "GeneratorX",
            href: "/docs/primitives/hover-card",
            description:
                "Get Expert guidance on your projects and ideas to take them to the next level.",
        },
    ]

    const NavMenuLinks = [
        {
            title: "ChatX",
            group: ChatXComponents
        },
        {
            title: "GeneratorX",
            group: GeneratorXComponents
        },
        {
            title: "Doubt Engine",
            group: DoubtEngineComponents
        },
        {
            title: "StudyX",
            group: StudyXComponents
        },
        {
            title: "ProjectX",
            group: ProjectXComponents
        },
    ]

    return {
        itemsHeader,
        itemsFooter,
        NavMenuLinks,
    }


}
