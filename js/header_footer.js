import {phonelist} from "../modules/phone_list.js";
class navbar extends HTMLElement {
    connectedCallback() {
      this.parentNode.innerHTML = `
      <picture class="logo">
          <source media="(min-width: 1024px)" srcset="pictures/ICEMARK.webp">
          <source media="(max-width: 768px)" srcset="pictures/ICEMARK.webp">
          <a href="index.html">
              <img src="pictures/ICEMARK.webp" alt="Icemark">
          </a>
      </picture>
      <nav class="head_menu">
          <ul>
              <li><a href="BaiguullagiinTaniltsuulga.html">КОМПАНЫ ТУХАЙ</a></li>
              <li><a href="bvteegdehvvn_tanilcuulga&tus.html"
                      aria-label="Бүтээгдэхүүний зургууд, дэлгэрэнгүй мэдээлэл">БҮТЭЭГДЭХҮҮНИЙ ТАНИЛЦУУЛГА</a></li>
              <li><a href="News.html">МЭДЭЭ МЭДЭЭЛЭЛ</a></li>
              <li class="border"><a href="sanalHuselt.html">САНАЛ ХҮСЭЛТ</a></li>
          </ul>
          <div id="white"></div>
          <i class="fas fa-globe" id="world"></i>
      </nav>
      <i class="fas fa-list-ul" id="list"></i>`;
    }
  }
  customElements.define("icemark-header",navbar);
  


  class footer extends HTMLElement {
    connectedCallback() {
      this.parentNode.innerHTML = `
      <section id="footer-top-section">
      <address class="address">
          <i class="fa-solid fa-map-location-dot"></i>
          <a
              href="https://www.google.com/maps/place/ICEMARK+LLC/@47.9139544,106.8085597,17z/data=!3m1!4b1!4m5!3m4!1s0x5d96ed4ab2b827b5:0xa980f62584e64ab2!8m2!3d47.9139508!4d106.8107483">
              <article>
                  <h3>ХАЯГ БАЙРШИЛ</h3>
                  <ul>
                      <li>СХД 18-хороо</li>
                      <li>21-р хороолол 68/2</li>
                  </ul>
              </article>
          </a>
      </address>
      <address class="address">
          <i class="fa-solid fa-clock"></i>
          <article>
              <h3>ЦАГИЙН ХУВААРЬ</h3>
              <ul>
                  <li>Да-Ба: 8:00 AM-6:00PM</li>
                  <li>Бя-Ня: Амралтын өдөр</li>
              </ul>
          </article>
      </address>
      <address class="address">
          <i class="fa-solid fa-phone"></i>
          <a href="tel:+97675756262">
              <article>
                  <h3>МЭДЭЭЛЭЛ</h3>
                  <ul>
                      <li>Утас: (976)7575 - 6262</li>
                      <li>Факс: (976)7575 - 6262</li>
                  </ul>
              </article>
          </a>
      </address>
      <address class="address">
          <i class="fa-solid fa-envelope"></i>
          <article>
              <h3>ИМЭЙЛ ХАЯГ</h3>
              <ul>
                  <li><a href="mailto: contact@teso.mn">contact@teso.mn</a></li>
                  <li><a href="mailto: info@teso.mn">info@teso.mn</a></li>
              </ul>
          </article>
      </address>
  </section>
  <section class="bottom">
      <h4>© 2013 - 2022 <a href="http://www.teso.mn/">ТЭСО ГРУПП</a> - <a href="index.html">АЙСМАРК ХХК</a></h4>
      <address>
          <a href="https://www.facebook.com/icemark.mn/?ref=br_rs"><img src="pictures/icons8-facebook-90.png"
                  alt="Facebook icon"></a>
          <a href="https://www.instagram.com/icemark_____/"><img src="pictures/icons8-instagram-90.png"
                  alt="Instagram icon"></a>
          <a href="https://twitter.com/icelandmongolia"><img src="pictures/icons8-twitter-90.png"
                  alt="Twitter icon"></a>
          <a href="mailto: contact@teso.mn"><img src="pictures/icons8-google-96 20- 20Copy.png" alt="Google"></a>
          <a href="https://www.youtube.com/channel/UCXC01QJ4wx_vDjXV5fscvmw"><img
                  src="pictures/icons8-youtube-logo-90.png" alt="youtube"></a>
      </address>
  </section>`;
    }
  }
  customElements.define("icemark-footer",footer);
  


  class openlist extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <article class="opened_list">
      <ul>
          <li><a href="BaiguullagiinTaniltsuulga.html">КОМПАНЫ ТУХАЙ</a></li>
          <li><a href="bvteegdehvvn_tanilcuulga&tus.html" aria-label="Бүтээгдэхүүний зургууд, дэлгэрэнгүй мэдээлэл">БҮТЭЭГДЭХҮҮНИЙ ТАНИЛЦУУЛГА</a></li>
          <li><a href="News.html">МЭДЭЭ МЭДЭЭЛЭЛ</a></li>
          <li class="border"><a href="sanalHuselt.html">САНАЛ ХҮСЭЛТ</a></li>
      </ul>
      <div>
      <i class="fas fa-globe" id="world"></i>
      <p>EN&nbsp;</p><p>|</p><p>&nbsp;MON</p>
      </div>
    </article>
      `;
    }
  }
  customElements.define("icemark-open",openlist);
  



 





let scrollbar=`<style>
    ::-webkit-scrollbar {
        width: 1px;
        scrollbar-width: thin;
        scrollbar-color: #90A4AE  #CFD8DC;
    }
    ::-webkit-scrollbar-track {
        background: #CFD8DC;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #90A4AE;
        border-radius: 1rem;
    }
    </style>`;
document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeEnd",scrollbar);

let plist= new phonelist(800,"list","opened_list");
plist.event();
plist.mediaquery_event();