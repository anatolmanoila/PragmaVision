angular.module('app').controller('pvMainCtrl', function($scope) {
  $scope.courses = [
    {name: 'Testing Client-Side Javascript', featured: false, published: new Date('10/1/2014')},
    {name: 'MongoDB for NodeJS Developers', featured: false, published: new Date('5/5/2014')},
    {name: 'Objective-C for JavaScript Developers', featured: true, published: new Date('10/5/2014')},
    {name: 'AngularJS Best Practices', featured: true, published: new Date('7/5/2014') },
    {name: 'Ruby for Java Developers', featured: true, published: new Date('10/6/2014')},
    {name: 'HotShot jQuery', featured: false, published: new Date('10/4/2014')},
    {name: 'Building an E-Commerce site with Node, Angular & MongoDB', featured: false, published: new Date('7/7/2014')},
    {name: 'Expert Javascript ', featured: true, published: new Date('1/5/2014')},
    {name: 'Web Security In a Nutshell', featured: true, published: new Date('10/3/2014')},
    {name: 'CSS3 In-Depth', featured: true, published: new Date('3/1/2014')},
    {name: 'HTTP for Developers', featured: true, published: new Date('2/1/2014')},
    {name: 'Deploying Apps to Windows Azure', featured: true, published: new Date('10/7/2014')},
    {name: 'Cloud Integration', featured: false, published: new Date('11/1/2014')},
    {name: "Interface Oriented Design", featured: true, published: new Date('10/12/2014')},
    {name: 'JavaScript The Good Parts', featured: true, published: new Date('2/15/2014')},
    {name: 'JavaScript Design Patterns', featured: true, published: new Date('7/1/2014')}
  ]
});