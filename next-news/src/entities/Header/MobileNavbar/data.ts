import { Parent } from "@/shared/ui/Dropdown/type"

export const paths: Parent[] = [
    { 
        isLink: true,
        className: '',
        label: 'home_page',
        href: "/",
        disabled: false,
        active: true,
    },
    { 
        isLink: false,
        className: '',
        label: 'about_us',
        href: "/a",
        disabled: false,
        active: false,
        children: [
            {
                isLink: true,
                className: '',
                label: 'news',
                href: "/",
                disabled: false,
                active: false,
                children: [
                    {
                        isLink: true,
                        className: '',
                        label: 'all_news',
                        href: "/",
                        disabled: false,
                        active: false,
                    },
                    {
                        isLink: true,
                        className: '',
                        label: 'last_news',
                        href: "/",
                        disabled: false,
                        active: false,
                    },
                ]
            },
            {
                isLink: true,
                className: '',
                label: 'workers',
                href: "/",
                disabled: false,
                active: false,
            },
            {
                isLink: true,
                className: '',
                label: 'companies',
                href: "/",
                disabled: false,
                active: false,
            }
        ]
    },
    { 
        isLink: true,
        className: '',
        label: 'features',
        href: "/",
        disabled: false,
        active: false,
    },
    { 
        isLink: true,
        className: '',
        label: 'categories',
        href: "/",
        disabled: false,
        active: false,
        children: [
            { 
                isLink: true,
                className: '',
                label: 'all_categories',
                href: "/",
                disabled: false,
                active: false,
            },
            { 
                isLink: true,
                className: '',
                label: 'filters',
                href: "/",
                disabled: false,
                active: false,
            },
        ]
    },
    { 
        isLink: true,
        className: '',
        label: 'contact',
        href: "/",
        disabled: false,
        active: false,
    } 
]