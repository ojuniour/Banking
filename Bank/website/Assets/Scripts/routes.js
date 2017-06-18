
App.config(function ($stateProvider, $urlRouterProvider, $locationProvider,RouteServiceProvider) {
    $urlRouterProvider.otherwise('*path');
 

    var home = {
        name: 'home',
        url: '/',
        controller: 'loadjs',
        reloadOnSearch: true,
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('Component/home/homeController.js');
            }]
        }
    };

    var loginPage = {
        name: 'login',
        url: '/login',
        controller: 'loadjs',
        templateUrl: 'Component/login/login.html',
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('Component/login/loginController.js');
            }]
        }
    };


    var dashboardPage = {
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'Component/dashboard/dashboard.html',
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('Component/dashboard/dashboardController.js');
            }]
        }
    };

    var logout = {
        name: 'logout',
        url: '/logout',
        templateUrl: 'Component/logout/logout.html',
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('Component/logout/logoutController.js');
            }]
        }
    };
  
    var error_404 = {
        name: 'error_404',
        url: '*path',
        templateUrl: "Component/error/error_404.html",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('Component/error/404.js');
            }]
        }
    };

    RouteServiceProvider.setRoute("login").register
    console.log(RouteServiceProvider.route.login);
    console.log(loginPage);
    $stateProvider.state(home);
    $stateProvider.state(RouteServiceProvider.route.login);
    $stateProvider.state(dashboardPage);
    $stateProvider.state(error_404);
    $locationProvider.html5Mode(true);

 
   // console.log(RouteServiceProvider.routeArray);
    //console.log(RouteServiceProvider.route.login);


});

App.provider('RouteService', function () {
    //this.routeArray = [];
    this.love = "king";
    return {
        $get: function(){ return this.love},
        routeArr: "king",
        setRoute: function (name, url, tmpl, resolveJS) {
            var routein = {
                name: name,
                url: (url ? url : '/' + name),
                templateUrl: (tmpl ? tmpl : 'Component/' + name + '/' + name + '.html'),
                controller: 'loadjs',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad, resolveJS) {
                        return $ocLazyLoad.load(resolveJS ? resolveJS : 'Component/' + name + '/' + name + 'Controller.js');
                    }]
                }
            };
            this.routeArray = [];
            this.route = {};
            this.routeArray.push(routein); //add route object to array
            this.route[name] = routein;// store route by its name by creating and add dynamic object properties.
        }
    }
});
