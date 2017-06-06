$(document).ready(function() {
  var showPin = function() {
    var pin = $(this).parent().parent().find('input').first().val() | ''
    var host = $(this).parent().parent().parent().find('p').html()

    $.get('/bravia/add/' + host.split(':')[0] + '/' + host.split(':')[1],
      function(data) {
        console.log(data)
        if (!data.success) {
          $('#alert1').html(
            "<h4>Invalid pin!</h4> '<em>'" +
            data.error + "'</em>'")
          $('#alert1').removeClass().addClass('alert alert-danger').show()
        } else {
          $('#discovered_devices').find("input").first().prop(
            'disabled', false)
          $('#discovered_devices').find("input").first().val("0000")
          $('#discovered_devices').find("button").html(
            "Submit displayed pin...")
          $('#alert1').html(
            '<h4>Device added successfully!</h4> <strong>Type the pin</strong> displayed on your Tv'
          )
          $('#alert1').removeClass().addClass('alert alert-success').show()
        }

      })
  }
  var clickFind = function() {
    $(".jumbotron").hide()
    $('#progress1').show('slow')
    $("#alert1").html(
      " <h4>Finding your tv...</h4>This will only take a couple of seconds..."
    )
    $("#alert1").show('slow', function() {
      $("#btn_findtv_again").hide()
      $('#discovered_devices').html("")
      $.get('snippets/discover', function(data) {
        $('.progress').each(function() {
          $(this).hide()
          $('#discovered_devices').html(data)
          $('.subPin').on('click', showPin)
        })
        $("#btn_findtv_again").show();
      })
    })

  }
  $('a#btn_findtv').on('click', clickFind)
  $('a#btn_findtv_again').on('click', clickFind)
})
