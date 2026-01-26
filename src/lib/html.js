
//generates the index html file for the project
export function generateIndexHTML(){
  const html = /*HTML*/ `
  <html>
    <head>

    </head>

    <body>
      <h1>Velkomin í spurningaleik</h1>
      <ul>
        <li>
          <a href="./almenKunnata.html">Almenn Kunnátta</a>
        </li>
        <li>
          <a href="./natturaOgVisindi.html">Náttúra og Vísindi</a>
        </li>
        <li>
          <a href="./bokmentirOgListir.html">Bókmentir og Listir</a>
        </li>
        <li>
          <a href="./saga.html">Saga</a>
        </li>
        <li>
          <a href="./landafradi.html">Landafræði</a>
        </li>
        <li>
          <a href="./skemmtunOgAfreiding.html">Skemmtun og Afþreyfing</a>
        </li>
      </ul>
    </body>
  </html>

  `;
  return html
}


//used to generate html for question q
export function generateQuestionHtml(q){

  const html= /*HTML*/ `
    <section class="question" data-answerd="false" >
      <h3>${q.questoin}</h3>
      <h3>${q.answer}</h3>
      <button type="button" class="button button-correct"> rétt </button>
      <button type="button" class="button button-incorrect"> rangt </button>
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
      <link rel="stylesheet" href="./public/styles.css">
    </head>

    <body>
      <a href="./index.html">til baka</a>
      <div class="maingrid">
        <h1 class="headertwo">spruningar leikur</h1>
        <div class="counter headertwo">
          <div class="correct">0</div>
          <div class="incorrect">0</div>
        </div>
      </div>

      <div class="questions">
        <h2>${title}</h2>
        ${questionsHTML}
      </div>

    </body>

  </html>
  `

  return html;
}
