(function() {

  var allData

  let github = "https://github.com/faviq/faviq"

  let references = {
    "nq": "https://www.mitpressjournals.org/doi/pdf/10.1162/tacl_a_00276",
    "ambigQA": "https://arxiv.org/pdf/2004.10645.pdf",
    "ours": "",
    "ours-bibtex": "",
    "dpr": "https://arxiv.org/pdf/2004.04906.pdf",
    "drqa_github": "https://github.com/facebookresearch/DrQA/tree/master/scripts/retriever",
    "explore":"https://faviq.github.io/explorer.html",
    "kilt":"https://arxiv.org/pdf/2009.02252.pdf"
  };

  $( window ).init(function(){
    $( window ).init(function(){
      let offset = 78;
      $('#container').css('margin-top', offset + 10);
      $('#intro-content').append(`
        <h3>About</h3>
        <br>
        <p> 
        <b>Fa</b>ct <b>V</b>erification from <b>I</b>nformation seeking <b>Q</b>uestions (<b>FaVIQ</b>) is a challenging and realistic fact verification dataset, 
        consisting of claims transformed from information-seeking questions by a pre-trained language model.
        Specifically, we use the ambiguity in information-seeking questions and their disambiguation and automatically convert them to true and false claims.
        These claims are natural and verifying these claims requires a complete understanding of the evidence.
        </p>
        <blockquote>
          Jungsoo Park, Sewon Min, Jaewoo Kang, Luke Zettlemoyer, Hannaneh Hajishirzi.
          <a href="` + references["ours"] + `" target="_blank">"FaVIQ: FAct Verification from Information seeking Questions"</a>.
          [<a href="` + references["ours-bibtex"] + `" target="_blank">BibTeX</a>]
        </blockquote>
      `);

      // load download cards
      let card1 = loadDownloadCard("A Set [train/dev] (13MB)");
      let card2 = loadDownloadCard("R Set [train/dev/test] (205MB)");
      let card3 = loadDownloadCard_single("WikipediaDB.jsonl (10GB)");
      $('#intro-content').append('<hr>');
      $('#intro-content').append(`
        <h3>Data</h3>
        <br>
        <p>
        The data consists of <b>A set</b>  and <b>R set</b>, where the former has 26k claims converted from ambiguous questions in <a href="` + references["ambigQA"] + `" target="_blank">AmbigQA</a> and
        the latter has 188k claims converted from <a href="` + references["nq"] + `" target="_blank">NQ</a>.
        A single instance (in json format) consists of claim, label, and evidence texts (both in positive and negative) used to train 
        <a href="` + references["dpr"] + `" target="_blank">DPR</a> retriever module.
        Note that the evidence texts can be not available for some samples.
        We are hiding the test set from A set, since the test set of <a href="` + references["ambigQA"] + `" target="_blank">AmbigQA</a> is hidden.
        Please contact us if you need the test set from A set.
        Visit <a href="` + references["explorer"] + `" target="_blank">Explore</a> to see some samples! 
        </p>
        <br>
      `);
      $('#intro-content').append("<div class='readme row' style='margin-top: 10px;'>" + card1 + card2  + "</div>");
      $('#intro-content').append('<hr>');
      $('#intro-content').append(`
        <h3>Resources</h3>
        <br>
        <p>
        For solving the fact verification task, an external knowledge source is required. 
        We use the English Wikipedia from 08/01/2019 following <a href="` + references["kilt"] + `" target="_blank">KILT</a> where we modified the original version 
        for creating a collection of passages each having approximately 100 tokens. 
        Note that for experiments in our paper, we concatenated the title with the passage.
        </p>
        <br>
      `);
      $('#intro-content').append("<div class='readme row' style='width: 50%; margin: 0 auto;'>" + card3  + "</div>");
      $('#intro-content').append('<hr>');
      $('.panel').width($('#intro-content').width()/3-30);
      $('.panel').css("margin-right", "10px");
      $('#intro-content').append(`
        <h3>References</h3>
        <br>
        <ul><li style="font-size:18px">Natural Questions: a Benchmark for Question Answering` + loadCitation("nq", "Kwiatkowski et al. (TACL 2019)") + ` </li>
        <li style="font-size:18px">AmbigQA: Answering Ambiguous Open-domain Questions` + loadCitation("ambigQA", "Min et al. (EMNLP 2020)") + ` </li>
        <li style="font-size:18px">KILT: a Benchmark for Knowledge Intensive Language Tasks` + loadCitation("kilt", "Petroni et al. (NAACL 2021)") + ` </li>
        </ul>

      `);
      $('#intro-content').append('<hr>');

      // load references
      $('#intro-content').append(`
        <h3>Contact</h3>
        <br>
        <p style="font-size:18px">
          For any questions about the code or data, please contact Jungsoo Park(<a class="icons-sm email-ic" href="mailto:jungsoopark.1993@gmail.com" target="_blank"><i class="fa fa-envelope-o"></i> Email</a>)
          or Sewon Min
          (<a class="icons-sm email-ic" href="mailto:sewon@cs.washington.edu" target="_blank"><i class="fa fa-envelope-o"></i> Email</a>)
          or leave <a href="` + github + `/issues"><i class="fa fa-github"></i> issues</a>.
        </p>
      `);
    });
  });

  function loadDownloadCard(title, text, url, mem) {
    // return `<div class="panel panel-default panel-inline download-card" style="float: left">
    //   <div class="panel-heading"><a href="` + url + `">
    //     ` + title + ` </a>
    //   </div>     
    // </div>`;
    // return '<a href="' + url + '" class="btn myBtn">' + title + '</a>' 
    return `<div class="col-12 col-md-6 myCardCell">
      <a href="` + url + `" class="btn myBtn">` + `<i class="fa fa-download"></i>    ` +  `<b>` + title + `</b>` + `</a>
    </div>`
  }

  function loadDownloadCard_single(title, text, url, mem) {
    // return `<div class="panel panel-default panel-inline download-card" style="float: left">
    //   <div class="panel-heading"><a href="` + url + `">
    //     ` + title + ` </a>
    //   </div>     
    // </div>`;
    // return '<a href="' + url + '" class="btn myBtn">' + title + '</a>' 
    return `<div class="myCardCell">
      <a href="` + url + `" class="btn myBtn">` + `<i class="fa fa-download"></i>    ` +  `<b>` + title + `</b>` + `</a>
    </div>`
  }


  function loadGithubLink(title, legend) {
    return `<a href="` + github + `/#` + legend + `" target="_blank">` + title + `</a>`;
  }

  function loadCitation(citation, keyword) {
    var text = `, <a target="_blank" href="` + references[citation] + `">` + keyword + `</a>`;
    if (citation==="ours") {
      text += ` [<a target="_blank" href="` + references[citation+"-bibtex"] + `">BibTeX</a>]`
    }
    return text+".";
  }


})();
