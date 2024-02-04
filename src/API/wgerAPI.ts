export const getExerciseByName = async (name: string) => {
  fetch(`https://wger.de/api/v2/exercise/search/?language=english&term=${name}`)
    .then((res) => res.json())
    .then((data) => console.log(`Here is the data: ${JSON.stringify(data)}`));
};
