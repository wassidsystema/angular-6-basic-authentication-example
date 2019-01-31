function config(locationProvider, stateProvider, urlRouterProvider) {
    locationProvider.html5Mode(true);
	urlRouterProvider.otherwise('/login');

    stateProvider.state('home', {
        url:'/home',
        template: '<home></home>'
    })
    .state('calendar', {
        url: '/calendar',
        template: '<calendar></calendar>'
    })
    .state('login', {
        url: '/login',
        template: '<login></login>'
    })
}

config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export default config;