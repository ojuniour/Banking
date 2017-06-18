
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

    //$stateProvider.state(home);
    RouteServiceProvider.setRoute("home",'',null);
    RouteServiceProvider.setRoute("login");
    RouteServiceProvider.setRoute("dashboard");
    RouteServiceProvider.setRoute("logout");
    RouteServiceProvider.setRoute("error_404",'*path',null,'Component/error/errorController.js');
    RouteServiceProvider.registerRoutes();

    $locationProvider.html5Mode(true);
});

App.provider('RouteService', function ($stateProvider) {
    this.route = {};
    this.routeArray = [];
    return {
        $get: function () { return this.love },
        routeArray: this.routeArray,
        route: this.route,
        registerRoutes: function () {
            this.routeArray.forEach(function (route) {
                $stateProvider.state(route);
                console.log(route);
            })
        },
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
            this.routeArray.push(routein); //add route object to array
            this.route[name] = routein;// store route by its name by creating and add dynamic object properties.
        }
    }
});
