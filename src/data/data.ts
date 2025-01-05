import logo from '@/assets/logo.png';
import { HandHelping, FileUser, SquareTerminal, BriefcaseBusiness, MessageCircleQuestion, Settings } from "lucide-react"

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
            url: "/opportunity-bridges",
            icon: HandHelping,
        },
        {
            title: "Resume Analyzer",
            url: "/resume-analyzer",
            icon: FileUser,
        },
        {
            title: "Code Container",
            url: "/code-container",
            icon: SquareTerminal,
        },
        {
            title: "Career Page",
            url: "/careers",
            icon: BriefcaseBusiness,
        },
    ]

    const itemsFooter = [
        {
            title: "Help Center",
            url: "/help",
            icon: MessageCircleQuestion,
        },
        {
            title: "Settings",
            url: "/settings",
            icon: Settings,
        },
    ]

    // Nav Menu Links
    const ChatXComponents: { title: string; href: string; description: string }[] = [
        {
            title: "Private Messages",
            href: "/chat/private",
            description:
                "Message someone privately, without the need to create a new channel.",
        },
        {
            title: "Chat Hub",
            href: "/chat/chathub",
            description:
                "A place where you can see all your chats in one place.",
        },
        {
            title: "Community",
            href: "/chat/community",
            description:
                "A place for you to find and join communities, and engage in discussions.",
        },
    ]

    const StudyXComponents: { title: string; href: string; description: string }[] = [
        {
            title: "CourseX",
            href: "/course",
            description:
                "Access all your courses in one place.",
        },
        {
            title: "ConceptorX",
            href: "/conceptor",
            description:
                "Get clarity on concepts and topics.",
        },
        {
            title: "Notes",
            href: "/notes",
            description:
                "Get access to all your notes in one place.",
        },
        {
            title: "Roadmaps",
            href: "/roadmaps",
            description:
                "A place for you to see your progress and plan your future.",
        },
    ]

    const ProjectXComponents: { title: string; href: string; description: string }[] = [
        {
            title: "CoLabX",
            href: "/colabx",
            description:
                "Collaborate with your team on projects.",
        },
        {
            title: "Projectorium",
            href: "/projectorium",
            description:
                "Showcase your project ideas and get collaborators",
        },
    ]

    const DoubtEngineComponents: { title: string; href: string; description: string }[] = [
        {
            title: "Doubt Engine",
            href: "/doubt-engine",
            description:
                "Ask your doubts and get them resolved easily and quickly through the community support.",
        },
    ]

    const GeneratorXComponents: { title: string; href: string; description: string }[] = [
        {
            title: "GeneratorX",
            href: "/generator",
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
