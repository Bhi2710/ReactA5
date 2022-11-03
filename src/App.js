import Main from './components/Main.js'
import share from './assetes/share.png';
import heart from './assetes/heart.png';
import sms from './assetes/sms.png';

function App() {

  const movie = [
    {
      movie_img:"https://thearrowhead.net/wp-content/uploads/2018/02/Bright.jpg",
      movie_name:"Bright",
      year:"2017",
      Director:"David Ayer",
      time:"117 min",
      type:"Action, Crime, Fantasy",
      description:"Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for",
      icon_share:{share},
      icon_heart:{heart},
      icon_sms:{sms},
    },
    {
      movie_img:"https://c4.wallpaperflare.com/wallpaper/230/997/118/tomb-raider-2018-alicia-vikander-lara-croft-tomb-raider-wallpaper-preview.jpg",
      movie_name:"Tomb Raider",
      year:"2018",
      Director:"Roar Uthaung",
      time:"125 min",
      type:"Action, Fantasy",
      description:"Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
      icon_share:{share},
      icon_heart:{heart},
      icon_sms:{sms},
    },
    {
      movie_img:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      movie_name:"The Shawshank Redemption",
      year:"1994",
      Director:"Frank Darabont",
      time:"142 min",
      type:"Crime, Drama",
      description:"Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
      icon_share:{share},
      icon_heart:{heart},
      icon_sms:{sms},
    },
    {
      movie_img:"https://m.media-amazon.com/images/M/MV5BMWU4ZjNlNTQtOGE2MS00NDI0LWFlYjMtMmY3ZWVkMjJkNGRmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg",
      movie_name:"Uri: The Surgical Strike",
      year:"2019",
      Director:"Aditya Dhar",
      time:"138 min",
      type:"War, Action, Thriller, Drama",
      description:"Indian army special forces execute a covert operation, avenging the killing of fellow army men at their base by a terrorist group.",
      icon_share:{share},
      icon_heart:{heart},
      icon_sms:{sms},
    },
    {
      movie_img:"https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_SX300.jpg",
      movie_name:"Avatar",
      year:"2009",
      Director:"James Cameron",
      time:"162 min",
      type:"Adventure, Fantasy, Science friction",
      description:"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      icon_share:{share},
      icon_heart:{heart},
      icon_sms:{sms},
    },
  ]

  return (
    <div>
    {
      movie.map((e,idx)=>{
        return(
          <Main key={idx} movie_name={e.movie_name}  movie_img={e.movie_img} year={e.year} Director={e.Director} time={e.time}
          type={e.type} description={e.description} icon_share={share} icon_heart={heart} icon_sms={sms} />
        )
      })
    }  
    </div>
  );
}

export default App;
