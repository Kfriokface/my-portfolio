import "./Skills.css";

export const Skills = () => `
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide">0</li>
        <li class="glide__slide">1</li>
        <li class="glide__slide">2</li>
      </ul>
    </div>
  </div>
  <div data-glide-el="controls">
    <button data-glide-dir="<<">Start</button>
    <button data-glide-dir=">>">End</button>
  </div>
  <div class="glide-arrows">
    <div class="glide__track" data-glide-el="track">...</div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
    </div>
  </div>
  <div class="glide-bullets">
    <div class="glide__track" data-glide-el="track">...</div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
      <button class="glide__bullet" data-glide-dir="=0"></button>
      <button class="glide__bullet" data-glide-dir="=1"></button>
      <button class="glide__bullet" data-glide-dir="=2"></button>
    </div>
  </div>
`
