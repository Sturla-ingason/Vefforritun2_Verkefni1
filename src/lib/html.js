
//generates the index html file for the project
export function generateIndexHTML(){
  const html = /*HTML*/ `
  <html>
    <head>
      <link rel="stylesheet" href="/public/indexstyles.css">
    </head>

    <body>
      <section class="maingrid">
        <h1>Velkomin í spurningaleik</h1>
        <div class="links flex">
          <button type="button" class="button" onclick="location.href='./almenKunnata.html'">Almenn Kunnátta</button>
          <button type="button" class="button" onclick="location.href='./natturaOgVisindi.html'">Náttúra og Vísindi</button>
          <button type="button" class="button" onclick="location.href='./bokmentirOgListir.html'">Bókmentir og Listir</button>
          <button type="button" class="button" onclick="location.href='./saga.html'">Saga</button>
          <button type="button" class="button" onclick="location.href='./landafradi.html'">Landafræði</button>
          <button type="button" class="button" onclick="location.href='./skemmtunOgAfreiding.html'">Skemmtun og Afþreying</button>
        </div>
      </section>
    </body>
  </html>

  `;
  return html
}


//used to generate html for question q
export function generateQuestionHtml(q){

  const html= /*HTML*/ `
    <section class="question flexing" data-answerd="false" >
      <h3>${q.questoin}</h3>
      <button type="button" class="button answerButton">test</button>
      <h3 class="hidden answer">${q.answer}</h3>
      <div class="counter">
        <button type="button" class="button button-correct"> rétt </button>
        <button type="button" class="button button-incorrect"> rangt </button>
      </div>
    </section>
  `;

  return html

}

//used to generate the saga.htlm file and all the questions for that catagory
export function generateQuestionHTMLSaga(title, questionsHTML){
  const html = /*HTML*/ `
  <html>
    <head>
      <script src="scripts.js" type="module"></script>
      <link rel="stylesheet" href="/public/styles.css">
    </head>

    <body class="maingrid">
      <a href="./index.html" class="headertwo">til baka</a>
      <div class="headertwo flexing">
        <h2 class="title">${title}</h2>
        <div class="counter headertwo">
          <div class="correct">0</div>
          <div class="incorrect">0</div>
        </div>
      </div>

      <div class="headertwo">
        ${questionsHTML}
      </div>

    </body>

  </html>
  `

  return html;
}
