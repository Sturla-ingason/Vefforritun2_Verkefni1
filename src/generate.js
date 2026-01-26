import fs from 'node:fs/promises'
import { parseLine} from './lib/parse.js';
import { generateIndexHTML, generateQuestionHtml, generateQuestionHTMLSaga } from './lib/html.js';

//-------------------------------------------------------------

const maxQuestionsCategory = 100;
const categoryNames = ["Almenn Kunnátta",
  "Náttúra og vísindi",
  "Bókmentir og Listir",
  "Saga",
  "Landafræði",
  "Skemmtun og Afþreying",
  "Íþróttir og tómstundir"
];

//-------------------------------------------------------------

//Nær í spurningu frá category með quality 3
function questionFromCatagoryNumber(questions, numberCategory){

  const questoinsFromCatagory = questions
    .filter(q => q && q.categoryNumber == numberCategory && q.quality >= '3')
    .slice(0, maxQuestionsCategory);

  return questoinsFromCatagory;

}

//------------------------------------------------------------

//takes inn list of question objects
//reutrns a html list for all questions of each category
function questionMaking(questions){
  const htmlList = [];

  for(let i = 0; i <= 6; i++){
    const qualityHistoryQuestions = questionFromCatagoryNumber(questions, i);
    const questionsHTML = qualityHistoryQuestions.map(generateQuestionHtml);
    const output = generateQuestionHTMLSaga(categoryNames[i - 1], questionsHTML);
    htmlList.push(output)
  }

  return htmlList;
}


//-------------------------------------------------------------

async function main() {

  const distPath = "./dist";
  await fs.mkdir(distPath)
  
  //Erum að lesa inn gögn og setja það í breytu
  //Verðum að vera með await þannig að við getum lesið
  //gögninn inn án þess að javascript panicki :)
  const content = await fs.readFile("./data/questions.csv", 'utf-8')


  //Splitum gögnunum upp eftir línum.
  const lines = content.split('\n');


  //Erum að mappa spurningarnar í questions
  //Questions er Fylki og parseLine líka
  const questions = lines.map(parseLine);


  const htmlQuestions = questionMaking(questions)

  //generateQuestionsHTMlSaga()
  const pathSagaQuestions = './dist/saga.html'
  await fs.writeFile(pathSagaQuestions, htmlQuestions[1], 'utf-8')


  //TODO búa til html skrá fyrir alla hina flokkana okkar.


  //TODO búa til index file
  const indexoutput = generateIndexHTML();
  const pathIndex = './dist/index.html';
  await fs.writeFile(pathIndex, indexoutput, 'utf-8');




}

//-------------------------------------------------------------

main().catch((error) => {
  console.error('error generating', error);
});
