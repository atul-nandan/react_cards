import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='flex-col justify-center'>
      <Navbar />
      <div className="p-6 p-auto bg-gray-800 flex flex-wrap justify-center items-center gap-auto" >

        {/* <h1 className="text-2xl font-bold mb-4">Movie List</h1> */}

        <MovieCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX"
          name="Interstellar"
          description="A team of explorers travel through a wormhole in space..."
          rating={3.6}
        />

        <MovieCard
          image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw"
          name="Inception"
          description="A thief who steals corporate secrets through dream-sharing..."
          rating={4.0}
        />
        <MovieCard
          image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQF0TjmtfnNHBJ_S2JMzOhF45NgJAjRKpRZipRZex1tw-KLZQ8R9aIp_TGGDNWBx4iSy3a"
          name="Avengers Endgame"
          description="Avengers builds time machine to kill Thanos..."
          rating={4.5}
        />
        <MovieCard
          image="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4908/1374908-i-7da93f401ac7"
          name="Avengers Infinity-War"
          description="Avengers knew about the infinity stones and tries to stop Thanos..."
          rating={4.0}
        />
        <MovieCard
          image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0IfyAU2VKhi9idE-H29QfleuY1PmgTbmoKsk9ixU-GtYxSSLL8IUKA2wZ6x6ubTEwg7iQ"
          name="Chaava"
          description="Movie on the life of Great Chhatrapati Shambha ji Maharaj..."
          rating={5.0}
        />
        <MovieCard
          image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTl6sB37QlR5nczz7EdqIGnSJImVW559wDdC-nh8wRZAMe2IRdmfL-J6ZGJhDFR-x1sxjml"
          name="Money Heist"
          description="A web-series, story of the Professor and Bank Robbery..."
          rating={3.0}
        />
        <MovieCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX"
          name="Interstellar"
          description="A team of explorers travel through a wormhole in space..."
          rating={3.6}
        />

        <MovieCard
          image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw"
          name="Inception"
          description="A thief who steals corporate secrets through dream-sharing..."
          rating={4.0}
        />
        <MovieCard
          image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQF0TjmtfnNHBJ_S2JMzOhF45NgJAjRKpRZipRZex1tw-KLZQ8R9aIp_TGGDNWBx4iSy3a"
          name="Avengers Endgame"
          description="Avengers builds time machine to kill Thanos..."
          rating={4.5}
        />
      </div>
    </div>

  )
}

export default App



