
App.config(function ($stateProvider, $urlRouterProvider, $locationProvider, RouteServiceProvider) {
    $urlRouterProvider.otherwise('*path');

    RouteServiceProvider.setRoute("home", "Welcome to the HomePage",'/');
    RouteServiceProvider.setRoute("login","Login Page");
    RouteServiceProvider.setRoute("dashboard");
    RouteServiceProvider.setRoute("logout");
    RouteServiceProvider.setRoute("error",null, '*path', 'Component/error/error_404.html');
    RouteServiceProvider.registerRoutes();
    $locationProvider.html5Mode(true);
});

App.provider('RouteService', function ($stateProvider) {
    this.route = {}; //returns routes (object)
    this.routeArray = []; //retuns (array of routes (objects)
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
        setRoute: function (name, pageTitle, url, tmpl, resolveJS) {
            var routein = {
                name: name,
                url: (url != null ? url : '/' + name),
                templateUrl: (tmpl != null ? tmpl : 'Component/' + name + '/' + name + '.html'),
                controller: '',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad','$rootScope', function ($ocLazyLoad, $rootScope) {
                        $rootScope.title = (pageTitle == null ? name : pageTitle) ;
                        return $ocLazyLoad.load(resolveJS != null ? resolveJS : 'Component/' + name + '/' + name + 'Controller.js');
                    }]
                }
            };
            this.routeArray.push(routein); //add route object to array
            this.route[name] = routein;// store route by its name by creating and add dynamic object properties.
        }
    }
});
