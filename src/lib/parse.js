
const categoryNames = ["Almenn Kunnátta",
  "Náttúra og vísindi",
  "Bókmentir og Listir",
  "Saga",
  "Landafræði",
  "Skemmtun og Afþreying",
  "Íþróttir og tómstundir"
];

export function parseLine(line){
  const split = line.split(',')

    //TODO Mappa categoryNumber yfir í strengi skv skjölun!

    if(split.length !== 6){
      return null;
    }

    //segja hvaða split er hvað
    const categoryNumber = split[0];
    const subCategory = split[1]
    const difficulty = split[2]
    const quality = split[3]
    const questoin = split[4]
    const answer = split[5]

    const categoryName = categoryNames[(split[0] - 1)];

    // búm til object af spurningum
    //notum {} til að búa til object
    const q = {
      categoryNumber,
      categoryName,
      subCategory,
      difficulty,
      quality,
      questoin,
      answer
    }

    return q

}
