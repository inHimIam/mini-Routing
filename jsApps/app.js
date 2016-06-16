angular.module('miniRouting', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'jsApps/home/homeTemplate.html',
                controller: 'homeController'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'jsApps/settings/settings.html',
                controller: 'settingsController'
            })
            .state('products', {
                url: '/products/:id',
                templateUrl: 'jsApps/products/productsTemplate.html',
                controller: 'productsController'
            });
        $urlRouterProvider
            .otherwise('/');
    });