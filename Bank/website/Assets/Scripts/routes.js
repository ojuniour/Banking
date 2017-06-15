App.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('*path');

    var home = {
        name: 'home',
        url: '/',
        reloadOnSearch: true
    };

    var loginPage = {
        name: 'login',
        url: '/login',
        templateUrl: 'Component/login/login.html',
    };

    var dashboardPage = {
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'Component/dashboard/dashboard.html',
    };

    var logout = {
        name: 'logout',
        url: '/logout',
        templateUrl: 'Component/logout/logout.html',
    }

    var error_404 = {
        name: 'error_404',
        url: '*path',
        template: "Doesn't exist",
    }

    $stateProvider.state(home);
    $stateProvider.state(loginPage);
    $stateProvider.state(dashboardPage);
    $stateProvider.state(error_404);
    $locationProvider.html5Mode(true);
}); 