// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require plugin
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .


$(document).ready(function(){
  $(".kerstin").hide();
  $(".rosana").hide();
  $(".helene").hide();
  $(".liza").hide();
  $(".helga").hide();
  $(".home-link").addClass("selected");
$(".kerstin-link").click(function(){
  $(".kerstin").show();
  $(".rosana").hide();
  $(".helene").hide();
  $(".liza").hide();
  $(".helga").hide();
  $(".kerstin-link").addClass("selected");
  $(".rosana-link").removeClass("selected");
  $(".helene-link").removeClass("selected");
  $(".liza-link").removeClass("selected");
  $(".helga-link").removeClass("selected");
});
$(".rosana-link").click(function(){
  $(".kerstin").hide();
  $(".rosana").show();
  $(".helene").hide();
  $(".liza").hide();
  $(".helga").hide();
  $(".kerstin-link").removeClass("selected");
  $(".rosana-link").addClass("selected");
  $(".helene-link").removeClass("selected");
  $(".liza-link").removeClass("selected");
  $(".helga-link").removeClass("selected");
});
$(".helene-link").click(function(){
  $(".kerstin").hide();
  $(".rosana").hide();
  $(".helene").show();
  $(".liza").hide();
  $(".helga").hide();
  $(".kerstin-link").removeClass("selected");
  $(".rosana-link").removeClass("selected");
  $(".helene-link").addClass("selected");
  $(".liza-link").removeClass("selected");
  $(".helga-link").removeClass("selected");
});
$(".liza-link").click(function(){
  $(".kerstin").hide();
  $(".rosana").hide();
  $(".helene").hide();
  $(".liza").show();
  $(".helga").hide();
  $(".kerstin-link").removeClass("selected");
  $(".rosana-link").removeClass("selected");
  $(".helene-link").removeClass("selected");
  $(".liza-link").addClass("selected");
  $(".helga-link").removeClass("selected");
});
$(".helga-link").click(function(){
  $(".kerstin").hide();
  $(".rosana").hide();
  $(".helene").hide();
  $(".liza").hide();
  $(".helga").show();
  $(".kerstin-link").removeClass("selected");
  $(".rosana-link").removeClass("selected");
  $(".helene-link").removeClass("selected");
  $(".liza-link").removeClass("selected");
  $(".helga-link").addClass("selected");
});
$(".home-link").click(function(){
  $(".kerstin").hide();
  $(".rosana").hide();
  $(".helene").hide();
  $(".liza").hide();
  $(".helga").hide();
  $(".kerstin-link").removeClass("selected");
  $(".rosana-link").removeClass("selected");
  $(".helene-link").removeClass("selected");
  $(".liza-link").removeClass("selected");
  $(".helga-link").removeClass("selected");
});
});
