angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('snapCruise.snapCruze', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/snapCruze.html',
        controller: 'snapCruzeCtrl'
      }
    }
  })

  .state('snapCruise.lEDConfiguration', {
    url: '/ledConfig',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lEDConfiguration.html',
        controller: 'lEDConfigurationCtrl'
      }
    }
  })

  .state('snapCruise.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('snapCruise', {
    url: '/side-menu21',
    templateUrl: 'templates/snapCruise.html',
    abstract:true
  })

  .state('snapCruise.tipsToStaySafe', {
    url: '/tips',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tipsToStaySafe.html',
        controller: 'tipsToStaySafeCtrl'
      }
    }
  })

  .state('tipOfTheDay', {
    url: '/tipoftheday',
    templateUrl: 'templates/tipOfTheDay.html',
    controller: 'tipOfTheDayCtrl'
  })

  .state('snapCruise.signOut', {
    url: '/sign out',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signOut.html',
        controller: 'signOutCtrl'
      }
    }
  })

  .state('snapCruise.tipOfTheDay2', {
    url: '/tipOfDay',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tipOfTheDay2.html',
        controller: 'tipOfTheDay2Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});