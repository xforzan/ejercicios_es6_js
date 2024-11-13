// 4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newArray = ages.filter((age)=> age> 18 )
console.log(newArray)

// 4.2

const Array = ages.filter((age)=> age%2 ===0 )
console.log(Array)

// 4.3

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}]


const filteredStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');

console.log(filteredStreamers);

// 4.4

const streamersFiltered = streamers.filter(streamer => streamer.name.includes("u"))

console.log(streamersFiltered);

// 4.5

const streamersFilter =streamers.filter(streamer => {

    if (streamer.gameMorePlayed.includes('Legends')) {

      if (streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
      }
      return true;
    }
    return false;
  });

  console.log(streamersFilter)