export default class ScrollSuave {
  constructor(links, options){
    this.linksInternos = document.querySelectorAll(links);
     if(options === undefined){
      this.options = {behavior: "smooth", block: "end", inline: "nearest"}
      console.log('if sim',this.options)
    } else {
      this.options = options;
      console.log('if',this.options)
    }

    this.scrollToSection = this.scrollToSection.bind(this);

  }
   scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
    console.log('metodo',this.options)
  }

  addLinkEvent(){
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init(){
    if (this.linksInternos.length){
      this.addLinkEvent();
    }
    return this
  }
}