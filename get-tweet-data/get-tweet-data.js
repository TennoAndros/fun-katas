// Please do not change the name of this function
function getTweetData(tweet) {
  const tweetData = {
    tags: [],
    mentions: [],
    length: tweet.length,
  };
  const tags = {};
  const mentions = {};

  const splittedTweet = tweet.split(" ");
  for (let word of splittedTweet) {
    if (word[0] === "@") {
      if (!mentions[word]) {
        mentions[word] = 1;
        tweetData.mentions.push(word);
      }
    } else if (word[0] === "#") {
      if (!tags[word]) {
        tags[word] = 1;
        tweetData.tags.push(word);
      }
    }
  }

  tweetData.tagCount = tweetData.tags.length;
  tweetData.mentionCount = tweetData.mentions.length;

  return tweetData;
}

module.exports = getTweetData;

/*
ftiaxnw tweetData obj
koitaw th leksh an periexei @ h #

an to prwto gramma einai @
mentions.push(leksh)  
mentioncount ++
  
  

epistrefw tweetData

*/
