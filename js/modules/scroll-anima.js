export default class ScrollAnima {

  constructor(sections){
    this.sections = document.querySelectorAll(sections); 
    this.windowMetade = window.innerHeight * 0.6; 
    this.checkDistance = this.checkDistance.bind(this)
  }

  getDistance() {
    // Usando [...arraylike] desestruturando usando spread
    // É o mesmo que usar Array.from(), transforma um arrayLike em Array
    this.distance = [...this.sections].map(itemSection =>{
      const offset = itemSection.offsetTop;
      return {
        element: itemSection,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
    return this.distance
  }


  checkDistance(){
    this.getDistance().forEach(item => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo")
      }
      else if(item.element.classList.contains("ativo")){
        item.element.classList.remove("ativo");
      }
    })
  }
  init(){
    if(this.sections.length){
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop(){
      window.removeEventListener("scroll", this.checkDistance)
  }
}
