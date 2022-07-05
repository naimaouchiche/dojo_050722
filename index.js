const scores = [
    {
      "player": "Maggie",
      "score": 762
    },
    {
      "player": "Annie",
      "score": 102
    },
    {
      "player": "Sanchez",
      "score": 882
    },
    {
      "player": "Dee",
      "score": 609
    }
  ];
  updateScore(scores, "Sanchez", 100)
  function updateScore(array, player, score) {
    array.map((item) => {
        item.player == player ? item.score += score : "";
    });
    return array;
  }
  console.log(updateScore(scores, "Sanchez", 100));
  
  /*function podium(array) {
    array.sort((a, b) => {
        return b.score - a.score;
    });
    const result = [];
    for(let i = 0; i<3; i++) {
        result.push(array[i]);
    }
    return result;
  }
  console.log(podium(scores));*/

  function updateScore (array, name, points) {
    array.filter((element) => element.player == name).map((player) => (player.score += points))
    return array;
}
function podium (scores) {
    const triScore = scores.sort((a, b) => b.score - a.score);
        return triScore.slice(0, 3);
};
console.log(updateScore(scores, "Sanchez", 100))
console.log(podium(scores))
  