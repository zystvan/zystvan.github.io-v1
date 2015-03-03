var projects = angular.module('projects', []);

projects.controller('projectList', function($scope) {
  $scope.projects = [
    {
      img: 'img/lmddgtfy.png',
      url: 'https://lmddgtfy.github.io',
      title: 'LMDDGTFY',
      description: 'Since having 2 other Let Me DuckDuckGo projects on GitHub by different people wasn\'t enough, I had to create a 3rd. My version aims to look as close to the real DuckDuckGo (ddg.gg) site as possible, and it has both a dark and a light theme, both of which match DDG\'s.'
    },
    {
      img: 'img/zeke-y-design.png',
      url: '#',
      title: 'Zeke Y Design',
      description: 'This website. Made with a mix of Javascript, jQuery, and Angular JS, I created it so I would have a public portfolio and a way for people to contact me.'
    },
    {
      img: 'img/wwwman.png',
      url: 'http://wonderwonderwonderman.com',
      title: 'WonderWonderWonderMan',
      description: 'My first ever project for someone other than myself, I created this website for a friend so he would have a website for his gaming videos.'
    },
    {
      img: 'img/lnxreviews.png',
      url: 'http://lnxreviews.com',
      title: 'LnxReviews',
      description: 'LnxReviews is a project I worked on by myself, to improve my skills with WordPress, and to provide a single place for reliable, accurate, and up to date reviews of Linux distributions.'
    }
  ];
});