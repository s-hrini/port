import { useState } from 'react'
import Photo from './assets/photo.jpeg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSlider from './Imageslider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='home'>
        <div className='nv'>
          <h1 className='h1'>Victim</h1>
        <nav className='nav'>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_m79nQoo41p5alm64QEPx4fkKKhX73AdH1A&s" className='img' alt="" />
        <div className='main'>
        <h1 id='hi'>Hi, I'm Williams <br /> Web Designer</h1>
        <p id='on'>Behind the word mountains, far from the countries vokalia and conson antia and, <br />
        there seed Behind the word mountains, far from the countries vokalia and conson <br />
        antia, there seed far from the countries there seed behind the word.
        </p>
        <br />
        <button className='btn1'>Hire Me</button>
        <button className='btn2'>Latest works</button>
        </div>
      </section>
      <section className='ab'>
        <div>
        <img src="https://vdemo.softhopper.studio/wp-content/uploads/2019/12/personal-images-1.jpg" className='img2' alt="" />
        </div>
        <div className='l1'>
        <h1 id='pro'>I Make <br />
             a professional <br />
            and creative design</h1>
        <p id='orp'>Now there is more fashion. There is no so-called trends. Now chase <br />
         after anything not necessary – nor for fashionable color nor the <br /> shape, nor for style. Here choose yourself like that, without any <br />
          looking back, do your personal, home, small fashion, and all will be <br />
           well. like that, without any looking back, do your personal, home, <br />
           small fashion, and all will be well</p>
           <h1 id='io'>10</h1>
           <h3 id='ye'>Years of <br /> Experience</h3>
           </div>
      </section>
      <section className='sthree'>
        <div className='wwm'>
        <h1 id='ro'>What We Make</h1>
        <p id='or'>We understand the importance of approaching each work integrally and <br />
        believe in the power of simple and easy communication</p>
        </div>
        <ImageSlider/>
        <div className='wwm'>
        <h1 id='ro'>My Work Process</h1>
        <p id='or'>We understand the importance of approaching each work integrally and <br />
        believe in the power of simple and easy communication</p>
        </div> <br />
        <div className='sds'>
          <div>
            <br /><br />
            <b>Sketching</b>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi id nesciunt illo neq</p>          
          </div>
          <div>
          <br /><br />
            <b>Designing</b>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi id nesciunt illo neq</p>  
          </div>
          <div>
          <br /><br />
            <b>Sending</b>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi id nesciunt illo neq</p>  
          </div>
        </div>
      </section>
      <section className='services'>
      <div className='wwm'>
        <h1 id='ro'>Our Pro Services</h1>
        <p id='or'>We understand the importance of approaching each work integrally and <br />
        believe in the power of simple and easy communication</p>
        </div> <br />
        <table className='table' cellSpacing={15}>
          <tr>
            <td><h3><b>Web development</b></h3></td>
            <td><h3><b>Reasearch & Sketch</b></h3></td>
            <td><h3><b>Help & Support</b></h3></td>
          </tr>
          <tr>
            <td><h3> <b>Open Source</b></h3></td>
            <td><h3><b>Responsive Layout</b></h3></td>
            <td><h3><b>Community Forum</b></h3></td>
          </tr>
          <tr>
            <td><h3><b>Web development</b></h3></td>
            <td><h3><b>Reasearch & Sketch</b></h3></td>
            <td><h3><b>Help & Support</b></h3></td>
          </tr>
        </table>
      </section>
      <br /><br /><br /><br />
      <section className='contact'>
        <br /><br />
      <div className='lwt'>
        <h1 id='ti'>Let's Work Together </h1>
        <p id='it'>We understand the importance of approaching each work integrally and <br />
        believe in the power of simple and easy communication</p>
        </div> <br />
        <i className="fa-solid fa-phone" style={{color:'red'}}></i>
        <div>
        call me  
        <h2>+212 6 46 05 26 56</h2>
        </div>
        <i class="fa-regular fa-envelope" style={{color:'red'}}></i>
        <div>
        email us 
        <h2>Example@Example.com</h2>
        </div>
        <i class="fa-solid fa-location-crosshairs" style={{color:'red'}}></i>
        <div>
        Get me here
        <h2>12/A, London, Uk</h2>
        </div>
      </section>
    </>
  )
}

export default App
