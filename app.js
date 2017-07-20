
$("#search").on("click", function(event) {
      event.preventDefault();
      var queryURL = "https://api.transitandtrails.org/api/v1/trailheads.xml";

      $.ajax({
          url: queryURL,
          method: "GET",

          headers: ('Authorization: ', {
            key: '4229776c13cfedab92d888c89c59178ef14793956a1f7fada15ff8507476e9cf'
            
        })
        .done(function(response) {
          var results = response.data;
          $("#info").html(results);
          });

    });
