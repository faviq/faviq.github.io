(function() {

  var allData

  let github = "https://github.com/faviq/faviq"

  let references = {
    "nq": "https://www.mitpressjournals.org/doi/pdf/10.1162/tacl_a_00276",
    "ambigQA": "https://arxiv.org/pdf/2004.10645.pdf",
    "ours": "https://arxiv.org/pdf/2107.02153.pdf",
    "ours-bibtex": "https://raw.githubusercontent.com/faviq/faviq/main/park2021faviq.txt",
    "dpr": "https://arxiv.org/pdf/2004.04906.pdf",
    "drqa_github": "https://github.com/facebookresearch/DrQA/tree/master/scripts/retriever",
    "explorer":"https://faviq.github.io/explorer.html",
    "kilt":"https://arxiv.org/pdf/2009.02252.pdf",
    "readme":"https://github.com/faviq#faviq",
    "baselines":"https://github.com/faviq/faviq/tree/main/codes",
    "request-test-data": "https://github.com/faviq#request-test-data",
    "fact_correction":"https://arxiv.org/pdf/2012.15788.pdf"
  };

  $( window ).init(function(){
    $( window ).init(function(){
      let offset = 78;
      $('#container').css('margin-top', offset + 10);
      $('#intro-content').append(`
        <h3>About</h3>
        <br>
        <p> 
          We introduce <b>FaVIQ</b>
          (<b>Fa</b>ct <b>V</b>erification from <b>I</b>nformation-seeking <b>Q</b>uestions),
          a challenging and realistic fact verification dataset that reflects confusions raised by real users.
          We use the ambiguity in information-seeking questions and their disambiguation, and
          automatically convert them to true and false claims.
          These claims are natural, and require a complete understanding of the evidence for verification.
          FaVIQ serves as a challenging benchmark for natural language understanding, and
          improves performance in professional fact checking.
        </p>
        <p>
          Details can be found in our paper:
        </p>
        <blockquote>
          Jungsoo Park*, Sewon Min*, Jaewoo Kang, Luke Zettlemoyer, Hannaneh Hajishirzi.
          <a href="` + references["ours"] + `" target="_blank">"FaVIQ: FAct Verification from Information seeking Questions"</a>.
          [<a href="` + references["ours-bibtex"] + `" target="_blank">BibTeX</a>]
        </blockquote>
      `);

      $('#intro-content').append('<hr>');
      $('#intro-content').append(`
        <h3>Update</h3>
        <br>
        <p>
        <b> Update (Nov 2021) </b> We updated the positive/negative silver evidence for the refute samples.  
        </p>
      `);

      // load download cards
      let card1 = loadDownloadCard("A Set [train/dev] (13MB)", 'https://nlp.cs.washington.edu/ambigqa/data/faviq_a_set_v1.2.zip');
      let card2 = loadDownloadCard("R Set [train/dev/test] (100MB)", 'https://nlp.cs.washington.edu/ambigqa/data/faviq_r_set_v1.2.zip');
      let card3 = loadDownloadCard_single("WikipediaDB.jsonl (10GB)", 'https://nlp.cs.washington.edu/ambigqa/data/wikipedia_20190801.jsonl');
      let card4 = loadDownloadCard("Fact Correction - A Set [train/dev] (482KB)", 'https://nlp.cs.washington.edu/ambigqa/data/fact_correction_a_set.zip');
      let card5 = loadDownloadCard("Fact Correction - R Set [train/dev/test] (2.9MB)", 'https://nlp.cs.washington.edu/ambigqa/data/fact_correction_r_set.zip');
      $('#intro-content').append('<hr>');
      $('#intro-content').append(`
        <h3>Data</h3>
        <br>
        <p>
        The data consists of <b>A set</b>  and <b>R set</b>.
        <b>A set</b> is our main dataset, consisting of 26k claims converted from ambiguous questions and their disambiguations.
        <b>R set</b> is an additional dataset, consisting of 188k claims converted from regular question-answer pairs.
        Please refer to <a href="` + references["readme"] + `" target="_blank">README</a> for the detailed data format.
        Visit <a href="` + references["explorer"] + `" target="_blank">Explorer</a> to see some samples! 
        </p>
        <p>
        <em>&#8251 Test data of the A set is hidden. In order to get the test data,
        please follow the instructions in <a href="` + references["request-test-data"] + `" target="_blank">README</a>.</em>
        </p>
        <br>
      `);
      $('#intro-content').append("<div class='readme row' style='margin-top: 10px;'>" + card1 + card2 + "</div>");
      $('#intro-content').append('<hr>');
      $('#intro-content').append(`
        <h3>Resources</h3>
        <br>
        <p>
          We release baseline implementations and checkpoints <a href="` + references["baselines"] + `" blank="_blank">here</a>.
          We use the English Wikipedia from 08/01/2019 following <a href="` + references["kilt"] + `" target="_blank">KILT</a>
          for primary knowledge sources with minor modification.
          Download it here!
          Please refer to the paper for the details of the baselines and how we use Wikipedia as knowledge sources.
        </p>
        <br>
      `);
      $('#intro-content').append("<div class='readme row' style='width: 50%; margin: 0 auto;'>" + card3 + "</div>");
      $('#intro-content').append(` 
        <br>
        <p>
        We further modify and release the FaVIQ in fact correction task format, a task recently studied in this <a href="` + references["fact_correction"] + `" target="_blank">paper</a> that requires a model to correct the refuted claims.
        The modified dataset consists of instances with the refuted claim and a list of corrected claims.
        We hope the release will be helpful for future research on the task. 
        </p>
        <br>
      `);
      $('#intro-content').append("<div class='readme row' style='margin-top: 10px;'>" + card4 + card5 + "</div>");
      $('#intro-content').append('<hr>');
      $('.panel').width($('#intro-content').width()/3-30);
      $('.panel').css("margin-right", "10px");
      $('#intro-content').append(`
        <h3>References</h3>
        <br>
        <p>
          <ul>
            <li>For information-seeking questions and regular question-answer pairs, we use ` +
            loadCitation("nq", "Natural Questions: a Benchmark for Question Answering (Kwiatkowski et al. TACL 2019)") + ` </li>
            <li>For ambiguity/disambiguations of information-seeking questions, we use ` + 
            loadCitation("ambigQA", "AmbigQA: Answering Ambiguous Open-domain Questions (Min et al. EMNLP 2020)") + ` </li>
            <li>For the knowledge source (Wikipedia), we use ` + 
            loadCitation("kilt", "KILT: a Benchmark for Knowledge Intensive Language Tasks (Petroni et al. NAACL 2021)") + ` </li>
          </ul>
        </p>
      `);
      $('#intro-content').append('<hr>');

      // load references
      $('#intro-content').append(`
        <h3>Contact</h3>
        <br>
        <p>
          For any questions about the code or data, please contact
          Jungsoo Park (<a class="icons-sm email-ic" href="mailto:jungsoopark.1993@gmail.com" target="_blank"><i class="fa fa-envelope-o"></i> Email</a>)
          or Sewon Min (<a class="icons-sm email-ic" href="mailto:sewon@cs.washington.edu" target="_blank"><i class="fa fa-envelope-o"></i> Email</a>)
          or leave <a href="` + github + `/issues"><i class="fa fa-github"></i> issues</a>.
        </p>
      `);
    });
  });

  function loadDownloadCard(title, url) {
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

  function loadDownloadCard_single(title, url) {
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

  function loadCitation(citation, keyword) {
    var text = `<a target="_blank" href="` + references[citation] + `">` + keyword + `</a>`;
    if (citation==="ours") {
      text += ` [<a target="_blank" href="` + references[citation+"-bibtex"] + `">BibTeX</a>]`
    }
    return text+".";
  }


})();
