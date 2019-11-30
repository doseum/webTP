import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    mode:'history',
    routes: [

        //Dashboards
        {
            path: '/Dashboards',
            name: 'analytics',
            component: () => import('../Layout/Components/Dashboards/Analytics.vue'),
        },


        // Login
        {
            path: '/',
            name: 'login',
            meta: {layout: 'userpages'},
            component: () => import('../Layout/Components/LoginBoxed.vue'),
        },
        {
            path: '/Register',
            name: 'register-boxed',
            meta: {layout: 'userpages'},
            component: () => import('../Layout/Components/RegisterBoxed.vue'),
        },

        //패스워드 찾기 사용하지 않을 예정.
        // {
        //     path: '/pages/forgot-password-boxed',
        //     name: 'forgot-password-boxed',
        //     meta: {layout: 'userpages'},
        //     component: () => import('../DemoPages/UserPages/ForgotPasswordBoxed.vue'),
        // },

        // show example 페이지.
        // Elements
        // {
        //     path: '/elements/buttons-standard',
        //     name: 'buttons-standard',
        //     component: () => import('../DemoPages/Elements/Buttons/Standard.vue'),
        // },
        // {
        //     path: '/elements/dropdowns',
        //     name: 'dropdowns',
        //     component: () => import('../DemoPages/Elements/Dropdowns.vue'),
        // },
        // {
        //     path: '/elements/icons',
        //     name: 'icons',
        //     component: () => import('../DemoPages/Elements/Icons.vue'),
        // },
        // {
        //     path: '/elements/badges-labels',
        //     name: 'badges',
        //     component: () => import('../DemoPages/Elements/Badges.vue'),
        // },
        // {
        //     path: '/elements/cards',
        //     name: 'cards',
        //     component: () => import('../DemoPages/Elements/Cards.vue'),
        // },
        // {
        //     path: '/elements/list-group',
        //     name: 'list-group',
        //     component: () => import('../DemoPages/Elements/ListGroups.vue'),
        // },
        // {
        //     path: '/elements/timelines',
        //     name: 'timeline',
        //     component: () => import('../DemoPages/Elements/Timeline.vue'),
        // },
        // {
        //     path: '/elements/utilities',
        //     name: 'utilities',
        //     component: () => import('../DemoPages/Elements/Utilities.vue'),
        // },

        // Components
        // {
        //     path: '/components/tabs',
        //     name: 'tabs',
        //     component: () => import('../DemoPages/Components/Tabs.vue'),
        // },
        // {
        //     path: '/components/accordions',
        //     name: 'accordions',
        //     component: () => import('../DemoPages/Components/Accordions.vue'),
        // },
        // {
        //     path: '/components/modals',
        //     name: 'modals',
        //     component: () => import('../DemoPages/Components/Modals.vue'),
        // },
        // {
        //     path: '/components/progress-bar',
        //     name: 'progress-bar',
        //     component: () => import('../DemoPages/Components/ProgressBar.vue'),
        // },
        // {
        //     path: '/components/tooltips-popovers',
        //     name: 'tooltips-popovers',
        //     component: () => import('../DemoPages/Components/TooltipsPopovers.vue'),
        // },
        // {
        //     path: '/components/carousel',
        //     name: 'carousel',
        //     component: () => import('../DemoPages/Components/Carousel.vue'),
        // },
        // {
        //     path: '/components/pagination',
        //     name: 'pagination',
        //     component: () => import('../DemoPages/Components/Pagination.vue'),
        // },
        // {
        //     path: '/components/maps',
        //     name: 'maps',
        //     component: () => import('../DemoPages/Components/Maps.vue'),
        // },

        // Tables
        // {
        //     path: '/tables/regular-tables',
        //     name: 'regular-tables',
        //     component: () => import('../DemoPages/Tables/RegularTables.vue'),
        // },

        // // Dashboard Widgets

        // {
        //     path: '/widgets/chart-boxes-3',
        //     name: 'chart-boxes-3',
        //     component: () => import('../DemoPages/Widgets/ChartBoxes3.vue'),
        // },

        // // Forms

        // {
        //     path: '/forms/controls',
        //     name: 'controls',
        //     component: () => import('../DemoPages/Forms/Elements/Controls.vue'),
        // },
        // {
        //     path: '/forms/layouts',
        //     name: 'layouts',
        //     component: () => import('../DemoPages/Forms/Elements/Layouts.vue'),
        // },
        // // Charts

        // {
        //     path: '/charts/chartjs',
        //     name: 'chartjs',
        //     component: () => import('../DemoPages/Charts/Chartjs.vue'),
        // },
        // 기존 레가시 코드 주석처리 끝.

    ]
})
