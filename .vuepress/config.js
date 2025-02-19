const {
    description
} = require('../package')

module.exports = {
    title: 'OpenCore 安装指南',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/OpenCore-Install-Guide/',

    watch: {
        $page(newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                    if (this.$route.hash) {
                        const element = document.getElementById(this.$route.hash.slice(1));

                        if (element && element.scrollIntoView) {
                            element.scrollIntoView();
                        }
                    }
                });
            }
        }
    },

    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
            });
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/sumingyd/OpenCore-Install-Guide',
        editLinks: true,
        editLinkText: '帮助我们改进此页面!',
        logo: '/homepage.png',
        nav: [{
            text: 'suming Guides',
            items: [{
                text: 'Home Site',
                link: 'https://sumingyd.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'Getting Started With ACPI',
                link: 'https://sumingyd.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'OpenCore Post-Install',
                link: 'https://sumingyd.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'OpenCore Multiboot',
                link: 'https://sumingyd.github.io/OpenCore-Multiboot/'
            },
            {
                text: 'GPU Buyers Guide',
                link: 'https://sumingyd.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Wireless Buyers Guide',
                link: 'https://sumingyd.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'Anti Buyers Guide',
                link: 'https://sumingyd.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: '介绍',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                'prerequisites',
                'macos-limits',
                'find-hardware',
                'terminology',
                'why-oc',
            ]
        },
        {
            title: 'USB 创建',
            collapsable: false,
            sidebarDepth: 2,
            children: [{
                title: 'Creating the USB',
                collapsable: true,
                path: '/installer-guide/',
                sidebarDepth: 1,
                children: [
                    '/installer-guide/mac-install',
                    '/installer-guide/windows-install',
                    '/installer-guide/linux-install',
                ],
            },
                '/installer-guide/opencore-efi',
                'ktext',
            ['https://sumingyd.github.io/Getting-Started-With-ACPI/', 'Getting started with ACPI'],
                '/config.plist/',
            ]
        },
        {
            title: '配置',
            collapsable: false,
            children: [{
                title: 'Intel Desktop config.plist',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/config.plist/penryn', 'Penryn'],
                    ['/config.plist/clarkdale', 'Clarkdale'],
                    ['/config.plist/sandy-bridge', 'Sandy Bridge'],
                    ['/config.plist/ivy-bridge', 'Ivy Bridge'],
                    ['/config.plist/haswell', 'Haswell'],
                    ['/config.plist/skylake', 'Skylake'],
                    ['/config.plist/kaby-lake', 'Kaby Lake'],
                    ['/config.plist/coffee-lake', 'Coffee Lake'],
                    ['/config.plist/comet-lake', 'Comet Lake'],
                ]
            },
            {
                title: 'Intel Laptop config.plist',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/config-laptop.plist/arrandale', 'Arrandale'],
                    ['/config-laptop.plist/sandy-bridge', 'Sandy Bridge'],
                    ['/config-laptop.plist/ivy-bridge', 'Ivy Bridge'],
                    ['/config-laptop.plist/haswell', 'Haswell'],
                    ['/config-laptop.plist/broadwell', 'Broadwell'],
                    ['/config-laptop.plist/skylake', 'Skylake'],
                    ['/config-laptop.plist/kaby-lake', 'Kaby Lake'],
                    ['/config-laptop.plist/coffee-lake', 'Coffee Lake and Whiskey Lake'],
                    ['/config-laptop.plist/coffee-lake-plus', 'Coffee Lake Plus and Comet Lake'],
                    ['/config-laptop.plist/icelake', 'Ice Lake'],
                ]
            },
            {
                title: 'Intel HEDT config.plist',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/config-HEDT/nehalem',
                    '/config-HEDT/ivy-bridge-e',
                    '/config-HEDT/haswell-e',
                    '/config-HEDT/broadwell-e',
                    '/config-HEDT/skylake-x',
                ]
            },
            {
                title: 'AMD Desktop config.plist',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/AMD/fx',
                    '/AMD/zen',
                ]
            },
            ['/config.plist/security', 'Apple Secure Boot']
            ]
        },
        {
            title: '安装',
            collapsable: false,
            children: [
                '/installation/installation-process',

            ]
        },
        {
            title: '故障排除',
            collapsable: false,
            children: [
                '/troubleshooting/troubleshooting',
                {
                    title: '',
                    collapsable: false,
                    children: [
                        '/troubleshooting/extended/opencore-issues',
                        '/troubleshooting/extended/kernel-issues',
                        '/troubleshooting/extended/userspace-issues',
                        '/troubleshooting/extended/post-issues',
                        '/troubleshooting/extended/misc-issues',

                    ]
                },
                '/troubleshooting/debug',
                '/troubleshooting/boot',
                '/troubleshooting/kernel-debugging',
            ]
        },
        {
            title: '安装后',
            collapsable: false,
            children: [
                ['https://sumingyd.github.io/OpenCore-Post-Install/', 'Post-Install'],
                {
                    title: 'Universal',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['https://sumingyd.github.io/OpenCore-Post-Install/universal/security', 'Security and FileVault'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/universal/audio', 'Fixing Audio'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/universal/oc2hdd', 'Booting without USB'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/universal/update', 'Updating OpenCore, kexts and macOS'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/universal/drm', 'Fixing DRM'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/universal/iservices', 'Fixing iServices'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/universal/pm', 'Fixing Power Management'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/universal/sleep', 'Fixing Sleep'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/usb/', 'Fixing USB'],
                    ]
                },
                {
                    title: 'Laptop Specifics',
                    collapsable: true,
                    children: [
                        ['https://sumingyd.github.io/OpenCore-Post-Install/laptop-specific/battery', 'Fixing Battery Read-outs'],

                    ]
                },
                {
                    title: 'Cosmetics',
                    collapsable: true,
                    children: [
                        ['https://sumingyd.github.io/OpenCore-Post-Install/cosmetic/verbose', 'Fixing Resolution and Verbose'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/cosmetic/gui', 'Add GUI and Boot-chime'],
                    ]
                },
                {
                    title: 'Multiboot',
                    collapsable: true,
                    children: [
                        ['https://sumingyd.github.io/OpenCore-Multiboot/', 'OpenCore Multiboot'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/multiboot/bootstrap', 'Setting up LauncherOption'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/multiboot/bootcamp', 'Installing BootCamp'],
                    ]
                },
                {
                    title: 'Miscellaneous',
                    collapsable: true,
                    children: [
                        ['https://sumingyd.github.io/OpenCore-Post-Install/misc/rtc', 'Fixing RTC'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/misc/msr-lock', 'Fixing CFG Lock'],
                        ['https://sumingyd.github.io/OpenCore-Post-Install/misc/nvram', 'Emulated NVRAM'],
                    ]
                },
            ]
        },
        {
            title: '额外',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/extras/kaslr-fix',
                '/extras/spoof',
                '/extras/ventura',
                ['https://github.com/sumingyd/OpenCore-Install-Guide/tree/master/clover-conversion', 'Clover Conversion'],
                '/extras/smbios-support.md',
            ]
        },
        {
            title: '其他',
            collapsable: false,
            children: [
                'CONTRIBUTING',
                '/misc/credit',
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/back-to-top',
        'vuepress-plugin-smooth-scroll',
        'vuepress-plugin-fulltext-search',
        ['@vuepress/medium-zoom',
            {
                selector: ".theme-succinct-content :not(a) > img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
