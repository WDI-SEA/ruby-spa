// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {

  $('img#logo-main').click(function(e) {
    e.preventDefault();

    $.ajax({
      url: '/api/creature/all',
      method: 'GET',
      success: function(data){
        var contentSection = $('#content-section');
        contentSection.html('');
        data.forEach(function(hobby){
          contentSection.append(
            '<a href="/api/creature/' + creature.id + ' " class="show-link"><h2>' + creature.name +'</h2><p>' + creature.desciption +'</p>'
          );
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
  });

    $('a.new-link').click(function(e) {
    e.preventDefault();

      $.ajax({
        url: '/api/creature/new',
        method: 'GET',
        success: function(data){
          var contentSection = $('#content-section');
          contentSection.html('');
          data.forEach(function(creature){
            contentSection.append(
              '<a href="/api/creature/' + creature.id + ' " class="show-link"><h2>' + creature.name +'</h2><p>' + creature.desciption +'</p>'
            );
          });
        },
        error: function(err) {
          console.log(err);
        }
      });
    });

  $('.save-new').on('click', 'form#new-creature', function(e) {
      e.preventDefault();
      var form = $(e.target);

      console.log(form);

    $.ajax({
      url: '/api/creatures',
      method: 'POST',
      // data: { creature: {name: cname.value, desciption: desc.value, location: loc.value}},
      success: function(data){
        console.log(data)
      },
      error: function(err) {
        console.log(err);
      }
    });
  });


  $('#content-section').on('click', 'a.show-link' ,(function(e){
    e.preventDefault();

    var aTag = $(this);

    $.ajax({
      url: aTag.attr('href'),
      method: 'GET',
      success: function(data) {
        $('#content-section').html('<h2>' + data.name +'</h2><p>' + data.desciption +'</p>');
      },
      error: function(err) {
        console.log(err);
      }
    });
  }));

});