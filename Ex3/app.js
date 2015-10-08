var app = angular.module('myApp', []);

app.controller('reviewController', function() {

  this.reviews = [];
  this.nota = 0;
  this.comentario = "";

  this.adicionaReview = function() {
	this.reviews.push({nota: this.nota, comentario: this.comentario});
  };

});
