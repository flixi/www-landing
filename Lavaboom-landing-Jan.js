$(document).ready(function() {
  //No Javascript warning
  $('.no-javascript').hide();  //Add to default.
});


  $(document).ready(function() {
  //Mobile items
  $('.mobile-menu-list').append('<a href="about"><li class="mobile-menu-item">About</li></a>');
  $('.mobile-menu-list').append('<a href="2.0"><li class="party-link mobile-menu-item">Lavaboom 2.0</li></a>');
  $('.mobile-menu-list').append('<a href="https://blog.lavaboom.com"><li class="mobile-menu-item">Blog</li></a>');
  $('.mobile-menu-list').append('<a href="tech-info"><li class="mobile-menu-item">Whitepaper</li></a>');
  $('.mobile-menu-list').append('<a href="press"><li class="mobile-menu-item">Press</li></a>');
  $('.mobile-menu-list').append('<a href="canary"><li class="mobile-menu-item">Canary</li></a>');
  $('.mobile-menu-list').append('<a href="terms"><li class="mobile-menu-item">Terms</li></a>');
  $('.mobile-menu-list').append('<a href="privacy"><li class="mobile-menu-item">Privacy</li></a>');
  $('.mobile-menu-list').append('<a href="imprint"><li class="mobile-menu-item">Imprint</li></a>');
  $('.mobile-menu-list').append('<a href="contact"><li class="mobile-menu-item">Contact</li></a>');

  //Desktop menu
  $('.desktop-menu').append('<div href="a" class="mobile-menu"><div class="hamburger-menu"></div></div>');
  $('.desktop-menu').append('<div class="logo-full-2"></div><div class="desktop-menu-buttons"><button class="menu-login button"></button><button id="menu-signup" class="button"></button></div><div class="desktop-menu-list-div"><ul class="desktop-menu-list"></ul></div>');
  $('.desktop-menu-list').append('<a href="2.0"><li class="party-link desktop-menu-list-item">Lavaboom 2.0</li></a>');
  $('.desktop-menu-list').append('<a href="about"><li class="desktop-menu-list-item">About</li></a>');
  $('.desktop-menu-list').append('<a target="blank_" href="https://blog.lavaboom.com"><li class="desktop-menu-list-item">Blog</li></a>');
  $('.menu-login').html('Log In');
  $('#menu-signup').html('Sign up');
  //Login alert
  $('.menu-login').click(function(){
    window.open('https://mail.lavaboom.com', "blank_");
  });

  //Footer menu.
  $('.footer').append('<div class="footer-social"></div><div class="footer-list-div"><ul class="footer-list"></ul></div>')
  //Footer items list.
  $('.footer-list').append('<a href="press"><li id="footer-list-item">Press</li></a>');
  $('.footer-list').append('<a href="canary"><li id="footer-list-item">Transparency</li></a>');
  $('.footer-list').append('<a href="tech-info"><li id="footer-list-item">Whitepaper</li></a>');
  $('.footer-list').append('<a href="terms"><li id="footer-list-item">Terms</li></a>');
  $('.footer-list').append('<a href="privacy"><li id="footer-list-item">Privacy</li></a>');
  $('.footer-list').append('<a href="imprint"><li id="footer-list-item">Imprint</li></a>');
  $('.footer-list').append('<a href="contact"><li id="footer-list-item">Contact</li></a>');
  //Social links for Footer.
  $('.footer-social').append('<a href="https://twitter.com/lavaboomhq" target="blank_"><svg class="twitter"></svg></a>');
  $('.footer-social').append('<a href="https://facebook.com/lavaboomhq" target="blank_"><svg class="facebook"></svg></a>');
  //Social links hover.
  $('.facebook').hover(function(){
  })

  //Menu signup button click
  $('#menu-signup').click(function(){
    window.location = 'signup';
  });

  //Change favicon throughout. FF should be cool with it.
  (function() {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  }());

  //Landing page signup
  $('.signup-button').click(function(){
    $('.modal').show();
    $('.signup-button').hide();
  });

  $('.signup-button-3').click(function(){
    $('.modal').show();
    $('.signup-button-3').hide();
    $('.learn-button').hide();

  });

  //Focuses on signup form onload.
  $('.signup-button').click(function() {
    $('#fieldEmail').focus();
  });

  //Makes nav logo clickable --> index.html
  $('.logo-full').click(function() {
    window.location = 'index';
  })
  //And again.
  $('.logo-full-2').click(function() {
    window.location = 'index';
  })


  //reserve form: clicking on the @lava.com focuses on the username part.
  $('.lavaboomcom').click(function(){
    $('.username-text').focus();
  })

  //removing signup form borders
  $('#fieldEmail').click(function(){
    $('#fieldEmail').removeAttr('style','border: solid 1px #E84E1B');
  });
  $('.username').click(function(){
    $('.username').removeAttr('style','border');
  });

  //open and close mobile-menu overlay
  $('.mobile-menu').click(function() {
    $('.mobile-locker').hide();
    $('.hidden-dragon').hide();
    $('.mobile-menu-view').show();

  })
  $('.hamburger-menu').click(function() {
    $('.mobile-locker').hide();
    $('.hidden-dragon').hide();
    $('.mobile-menu-view').show();
  })
  $('#close-mobile-menu').click(function(){
    $('.mobile-locker').show();
    $('.hidden-dragon').show();
    $('.mobile-menu-view').hide();
  })
});

//Signup enter click submits form
$(".username-text").keyup(function(event){
  if(event.keyCode == 13){
    $(".signup-button-2").click();
  }
});

// Signup success and error messages
var hasPrefix = function(str, prefix) {
  return (str.substring(0, prefix.length) === prefix);
};

$(".signup-button-2").click(function(event) {
  var url = "https://technical.lavaboom.com/subscribe";
  var submission = {
    name: "undefined",
    email: $('#fieldEmail').val(),
    list: '79P4A9RzHUgK70tiFy8KaA',
    boolean: true
  };
  var callback = function(data, textStatus, jqXHR) {
  };
  console.log({
    url: url, submission: submission
  });
  $.post(url, submission, callback);
});


$(document).ready(function() {
  $(".signup-button-2").click(function(event) {
    // Submit to res api
    $('#signup-error').hide();
    $('#signup-error').empty();
    var url = "https://api.lavaboom.com/accounts";
    var submission = {
      username: $('input[name=username]').val(),
      alt_email: $('input[name=email]').val()
    };
    var callback = function(data, textStatus, jqXHR) {
      var response = data;

      var msg1 = 'Empty input',
      msg2 = 'Not a valid email address',
      msg3 = 'Username not allowed',
      msg4 = 'Username already reserved',
      msg5 = 'Usernames must be at least',
      msg6 = 'Email address length should be',
      msg7 = 'Username length',
      msg_scs = 'You just reserved';

      if (response.success) {
        $('#res_form').hide();
        $('.success-box').fadeIn('slow');
        $('#success-box-text').append(data);
      } else if(response.message == "Invalid request") {
        $('#signup-error').append('Some fields are missing.');
        $('#signup-error').fadeIn('fast');
      } else if(response.message == "Email already used") {
        $('#signup-error').append('Email address already used.');
        $('#signup-error').fadeIn('fast');
        $('#fieldEmail').css('border','solid 1px #E84E1B');
      //} else if() {
      //  $('#signup-error').append('Username not allowed.');
      //  $('#signup-error').fadeIn('fast');
      //  $('.username').css('border','solid 1px #E84E1B');
      } else if(response.message == "Username already used") {
        $('#signup-error').append('Username already reserved.');
        $('#signup-error').fadeIn('fast');
        $('.username').css('border','solid 1px #E84E1B');
      } else if(response.message == "Invalid username") {
        $('#signup-error').append('Usernames must be at least 2 characters long and can only contain letters, numbers, and full stops.');
        $('#signup-error').fadeIn('fast');
        $('.username').css('border','solid 1px #E84E1B');
      } else if(hasPrefix(data, msg6)) {
        $('#signup-error').append('Email addresses must be shorter than 64 characters.');
        $('#signup-error').fadeIn('fast');
        $('#fieldEmail').css('border','solid 1px #E84E1B');
      } else if(hasPrefix(data, msg7)) {
        $('#signup-error').append('Username length must be shorter than 32 characters.');
        $('#signup-error').fadeIn('fast');
        $('.username').css('border','solid 1px #E84E1B');

      }
      // console.log(data);
    };
    $.post(url, submission, callback);
  });
});

//Careers hint for console.
$(document).ready(function(){
  console.log("    _                      _ \n    | |                    | |  \n    | |     __ ___   ____ _| |__   ___   ___  _ __ ___ \n    | |    / _` \\ \\ / / _` | '_ \\ / _ \\ / _ \\| '_ ` _ \\ \n    | |___| (_| |\\ V / (_| | |_) | (_) | (_) | | | | | | \n    |______\\__,_| \\_/ \\__,_|_.__/ \\___/ \\___/|_| |_| |_| \n    ==================================================== \n    Know some code? We're looking for talented people \n    like you... https://Lavaboom.com/jobs \n    ==================================================== \n")

})




// Cryptotext experiment

jQuery.fn.decodeEffect = (function ($) {
  var defaultOptions = {
    duration: 1,
    stepsPerGlyph: 5,
    codeGlyphs: "ABCDEFGHIJKLMNOPQRSTUWVXYZ1234567890",
    className: "cryptotext"
  };

  // get a random string from the given set,
  // or from the 33 - 125 ASCII range
  function randomString(set, length) {
    var string = "",
    i, glyph;
    for (i = 0; i < length; i++) {
      glyph = Math.random() * set.length;
      string += set[glyph | 0];
    }
    return string;
  }

  // this function starts the animation. Basically a closure
  // over the relevant vars. It creates a new separate <p>
  // for the code text, and a stepper function that performs
  // the animation itself
  function animate(element, options) {
    var text = element.html(),
    p = $("<p/>").addClass(options.className).insertAfter(element),
    interval = options.duration / (text.length * options.stepsPerGlyph),
    step = 0,
    length = 0,
    stepper = function () {
      if (++step % options.stepsPerGlyph === 0) {
        length++;
        element.html(text.slice(0, length));
      }
      if (length <= text.length) {
        p.html(randomString(options.codeGlyphs, text.length - length));
        setTimeout(stepper, interval);
      } else {
        p.remove();
      }
    };
    element.text("");
    stepper();
  }

  // Basic jQuery plugin pattern
  return function (options) {
    options = $.extend({}, defaultOptions, (options || {}));
    return this.each(function () {
      animate($(this), options);
    });
  };
}(jQuery));

$('.email_container').hide();
$(".p1").hide();
$(".p2").hide();



$(document).ready(function () {
  setTimeout(function(){
  $(".p1").show();
  $(".p1").decodeEffect(5000,10)
  }, 1000);
  setTimeout(function(){
    $(".p2").show();
    $(".p2").decodeEffect(5000,10)
  }, 3000)
});

$(document).ready(function() {
  setTimeout(function(){
    $('.email_container').delay(4500).fadeIn('slow');
  });
}, 2000);

// 299 - 315 are for filling input fields from URL (useful for invites).
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
}
}

var username = GetURLParameter('username');
var fieldEmail = GetURLParameter('fieldEmail');

$('#fieldEmail').attr("value", fieldEmail);
$('#username').attr("value", username);
