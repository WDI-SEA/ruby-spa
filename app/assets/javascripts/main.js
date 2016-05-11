$(document).ready(function() {

  $('#creatures').click(function(e) {
    e.preventDefault();
    $('#home-section').hide();
    $('#creature-section').show();
    console.log("button clicked")
    $.ajax({
      url: '/api/creatures/all',
      method: 'GET',
      success: function(data) {
        var contentSection = $('#creature-section');
        contentSection.html('');

        data.forEach(function(creature) {
          contentSection.append('<div><p><a href="/api/creature/' + creature.id + '" class="show-link">' + creature.species +'</a></p><p>' + creature.description +'</p><p>' + creature.location + '</p></div>')
        });
      },
      error: function(err) {
        console.log(err)
      }
    })
  });


  //show single creature
  $('#creature-section').on('click', 'a.show-link', function(e) {
    e.preventDefault();

    var aTag = $(this);

    $.ajax({
      url: aTag.attr('href'),
      method: 'GET',
      success: function(data) {
        $('#creature-section').html('<h2>' + data.species + '</h2><p>' + data.description + '</p><p>' + data.location + '</p>');
      },
      error: function(err) {
        console.log(err);
      }
    })
  });

  //create a new creature
  $('#create-creature').click(function(e) {
    e.preventDefault();
    $("#creature-form").show();
  });

  $('#creature-form').submit(function(e) {
    e.preventDefault();
    alert("yes?")
    var srl = $(this).serialize();

    $.ajax({
      url: $(this).attr('action'), 
      method: 'POST',
      data: srl,
      success: function() {
        console.log("you added a new creature")
      },
      error: function(err) {
        console.log(err)
      }
    });
  });
  

  // displays home page
  $('#home-btn').click(function(e){
    e.preventDefault();
    $('#home-section').show();
    $('#creature-section').hide();
  })


});
