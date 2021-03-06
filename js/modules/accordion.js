export default class Accordion {
  constructor(list){
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);

  }

  // Add events for accordion
    addAccordionEvent() {
      this.accordionList.forEach((item) => {
        item.addEventListener("click", () => this.toggleAccordion(item));
      });
    }
    // inicialize fuction
    init(){
    if (this.accordionList.length) {
      // Active first item
      this.toggleAccordion(this.accordionList[0])
      this.addAccordionEvent();
    }
  }
}


