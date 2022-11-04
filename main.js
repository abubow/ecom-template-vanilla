import './style.css'
import javascriptLogo from './javascript.svg'
document.querySelector('#app').innerHTML = `
  <div>
    <header>
      <div class="top-bar">
        <span class="logo">
          Loic
        </span>
        <nav>
          <a href="loic.html">Loic</a>
          <a href="#about">About</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>
    </header>
    <main>
      <div class="slider-container">
        <div class="slider">
          <div class="slide slide1">
            <div class="slide-content">
              <h2>Slide 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
              <a href="#" class="btn">Read More</a>
              </div>
            <div class="slide-image">
              <img src="https://source.unsplash.com/800x600/?nature,water" alt="">
            </div>
          </div>
          <div class="slide slide2">
            <div class="slide-content">
              <h2>Slide 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
              <a href="#" class="btn">Read More</a>
            </div>
            <div class="slide-image">
              <img src="https://source.unsplash.com/800x600/?nature,water" alt="">
            </div>
          </div>
          <div class="slide slide3">
            <div class="slide-content">
              <h2>Slide 3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
              <a href="#" class="btn">Read More</a>
            </div>
            <div class="slide-image">
              <img src="https://source.unsplash.com/800x600/?nature,water" alt="">
            </div>
          </div>
        </div>
        <div class="slider-buttons">
          <button class="prev">&#10094;</button>
          <button class="next">&#10095;</button>
        </div>
        <div class="dots-container">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
      <div class="about" id="about">
        <div class="about-content">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
        </div>
        <div class="about-image">
          <img src="https://source.unsplash.com/800x600/?nature,water" alt="">
        </div>
      </div>
      <div class="services">
        <h2>Services</h2>
        <div class="services-container">
          <div class="service">
            <div class="service-icon">
              <i class="fas fa-paint-brush"></i>
              <h3>Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            </div>
            <div class="service-icon">
              <i class="fas fa-code"></i>
              <h3>Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                          </div>
            <div class="service-icon">
              <i class="fas fa-chart-line"></i>
              <h3>Marketing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="work">
        <h2>Work</h2>
        <div class="work-container">
          <div class="work-item">
            <div class="work-image">
              <img src="https://source.unsplash.com/800x600/?nature,water" alt="">
            <div class="work-content">
              <h3>Project 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            </div>
            </div>
          </div>
          <div class="work-item">
            <div class="work-image">
              <img src="https://source.unsplash.com/800x600/?nature,water" alt="">
            </div>
            <div class="work-content">
              <h3>Project 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            </div>
          </div>
          <div class="work-item">
            <div class="work-image">
              <img src="https://source.unsplash.com/800x600/?nature,water" alt="">
            </div>
            <div class="work-content">
              <h3>Project 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            </div>
          </div>
        </div>
        <a href="#" class="btn">View More</a>
        <footer>
          <div class="footer-content">
            <h3>Newsletter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            <form action="">
              <input type="email" placeholder="Enter Email">
              <input type="submit" value="Subscribe">
            </form>
                      </div>
          <div class="footer-bottom">
            Designed by <a href="https://abubow.me">Abuzar Sherazi</a>
          </div>
        </footer>
      </div>
      </div>
      </div>
      </div>
`