(function() {

  var allData

  let ENCODETITLE = [" ", "%", "!", "#", "$", "&", "'", "(", ")", "*", "+", ",", "/", ":", ";", "=",
    "?", "@", "[", "]"];
  let ENCODEURL = ["_", "%25", "%21", "%23", "%24", "%26", "%27", "%28", "%29",
    "%2A"< "%2B", "%2C", "%2F", "%3A", "%3B", "%3D", "%3F", "%40", "%5B", "%5D"];

  $( window ).init(function(){
    $("body").css("overflow", "hidden");
    $("#container").css("max-width", "2400px");
    $('.row').width($('#container').width());
    let offset = 78 + $('#second-navbar').height();
    $('.row').css('margin-top', offset + 10);
    $('.col').css('height', $( window ).height() - offset - 10);
    $('#content').html("Loading data...");
    loadAllData();
  });

  function loadAllData(){
    $('.textbox').width($('#sidebar').width());

    $.getJSON("https://raw.githubusercontent.com/faviq/faviq.github.io/main/static/samples.json", function(json) {
      allData = json; 
      loadData();
    });
    /*
    sendAjax("/select", {}, (result) => {
      origData = result;
      allData = result.data;
      loadData();
    });*/
  }
  

  function loadData() {
    $('#sidebar').html('');
    $('#content').html('');
    console.log(allData)
    for (var i=0; i<allData.length; i++) {
      let htmlText = `
      <div id="textbox-` + i + `" class="textbox ` + getClassName(allData[i]) + `">
      ` + allData[i]['claim'] +
      `</div>
      `;
      $('#sidebar').append(htmlText);
    }
    $('.textbox').click(function () {
      $('.textbox-clicked').removeClass('textbox-clicked');
      $('#'+this.id).addClass('textbox-clicked');
      load(parseInt(this.id.substring(8, this.id.length)));
    })
    $('.mode').click(controlDisplay);
    controlDisplay();
  }

  function controlDisplay() {
    let mode = parseInt($('.mode:checked').val());
    ('.textbox-clicked');
    if (mode===0) {
      $('.D_set').show();
      $('.A_set').hide();
      if (getCurrentClassName()==="A_set") {
        $('.textbox-clicked').removeClass('textbox-clicked');
        $('#content').html('');
      }
    } else if (mode===1) {
      $('.D_set').hide();
      $('.A_set').show();
      if (getCurrentClassName()==="D_set") {
        $('.textbox-clicked').removeClass('textbox-clicked');
        $('#content').html('');
      }
    } else {
      $('.D_set').show();
      $('.A_set').show();
    }
   }

  function getClassName(data) {
    //FIXME later
    if (data['div']==="a_set") {
      return "D_set"
    } else {
      return "A_set"
    }
  }

  function getCurrentClassName() {
    let current = $('.textbox-clicked');
    console.assert(current.length<=1);
    if (current.length===1) {
      let currentId = current[0].id;
      return getClassName(allData[parseInt(currentId.substring(8, currentId.length))]);
    }
    return "";
  }

  function load(currentId) {
    $('#content').html("");
    let data = allData[currentId];
    $('#content').append(getPanel("Claim", data["claim"]));
    $('#content').append(getPanel("Label", data["label"]));
  
    htmlText_pos = `
          <p><span class="label label-id">ID</span> ` + data['positive_evidence']['id'] + `</p>
          <p><span class="label label-title">Title</span> ` + data['positive_evidence']['title'] + `</p>
          <p><span class="label label-text">Text</span> ` + data['positive_evidence']['text'] + `</p>
      `;
    $('#content').append(getPanel("Positive Passage", htmlText_pos));
    $('#content').append(`<h5>
      &#8251 Note that the positive passage is not groundtruth,
      but is obtained through TF-IDF and post-processing (details in Appendix C.2 of the paper).
      'N/A' indicates TF-IDF fails to retrieve any reasonable passage.
      </h5>`);
    
    // htmlText_neg = `
    //       <p><span class="label label-id">ID</span> ` + data['negative_evidence']['id'] + `</p>
    //       <p><span class="label label-title">Title</span> ` + data['negative_evidence']['title'] + `</p>
    //       <p><span class="label label-text">Text</span> ` + data['negative_evidence']['text'] + `</p>
    //   `;
    // $('#content').append(getPanel("Negative Passage", htmlText_neg));

  }

  function getPanel(heading, body) {
    return `<div class="panel panel-default panel-inline">
      <div class="panel-heading">` + heading + `
      </div>
      <div class="panel-body">
      ` + ` ` + body +`</div>
    </div>`;
  }

  function sendAjax(url, data, handle){
    $.getJSON(url, data, function(response){
      handle(response.result);
    });
  }

})();
