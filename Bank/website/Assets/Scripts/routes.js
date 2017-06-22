
App.config(function ($stateProvider, $urlRouterProvider, $locationProvider, RouteServiceProvider) {
    $urlRouterProvider.otherwise('*path');

    RouteServiceProvider.setRoute("home",'','index.html');
    RouteServiceProvider.setRoute("login");
    RouteServiceProvider.setRoute("dashboard");
    RouteServiceProvider.setRoute("logout");
    RouteServiceProvider.setRoute("error_404", '*path', null, 'Component/error/errorController.js');
    //test/
    RouteServiceProvider.registerRoutes();
    $locationProvider.html5Mode(true);
});

App.provider('RouteService', function ($stateProvider) {
    this.route = {};
    this.routeArray = [];
    return {
        $get: function () { return this},
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
                url: (url != null ? url : '/' + name),
                templateUrl: (tmpl != null ? tmpl : 'Component/' + name + '/' + name + '.html'),
                controller: 'loadjs',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(resolveJS != null ? resolveJS : 'Component/' + name + '/' + name + 'Controller.js');
                    }]
                }
            };
            this.routeArray.push(routein); //add route object to array
            this.route[name] = routein;// store route by its name by creating and add dynamic object properties.
        }
    }
});
