export default class Tooltip {
  constructor(tooltips){

    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

    onMouseMove(event) {

      if (event.pageX > window.innerWidth * 0.5) {
      this.tooltipBox.style.left = event.pageX + -200 + 'px';  
      } 
      else{
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
      }

      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      
    }
      
  
    onMouseLeave(event) {
      this.tooltipBox.remove();
      
      event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
      event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }

    criarTooltipBox(element) {
      const tooltipBox = document.createElement('div');
      const text = element.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      this.tooltipBox = tooltipBox;
    }

      onMouseOver(event) {
        this.criarTooltipBox(event.currentTarget);
        event.currentTarget.addEventListener('mousemove', this.onMouseMove);
        event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    }

    addToolTipsEvent(){
      this.tooltips.forEach((item) => {
        item.addEventListener('mouseover', this.onMouseOver);
      })
    }

    init(){
      if (this.tooltips.length) {
        this.addToolTipsEvent()
      }
      return this;
    }


    

}
