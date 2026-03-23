import type { Metadata } from 'next';

export const baseMetadata: Metadata = {
    title: 'Admin Dashboard UI',
    description: 'Admin Dashboard UI build using next.js, shadcn, tailwindcss, recharts, react-hook-form and zod',
    keywords: [
        "Admin-Dashbaord-UI",
        "next.js",
        "shadcn",
        "tailwindcss",
        "recharts"
    ],
    authors: [{ name: "Mudit kalra" }],
    creator: "Mudit kalra",
    publisher: "Mudit kalra",
    manifest: '/manifest.json',
    openGraph: {
        title: 'Admin Dashbaord UI',
        description: 'Admin Dashboard UI build using next.js, shadcn, tailwindcss, recharts, react-hook-form and zod',
        url: 'https://admin-dashboard-ui-eta.vercel.app/',
        siteName: 'Admin-Dashboard-UI',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: "summary_large_image",
        title: "Admin Dashbaord UI",
        description: "Admin Dashboard UI build using next.js, shadcn, tailwindcss, recharts, react-hook-form and zod",
        creator: "@muditkalra_45",
        images: ["/og-image.png"],
    },
};