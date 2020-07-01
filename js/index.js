class PageRender{
    //properties - variables of the class
    score = 0;
    //is what we will use to target the element
    className;
    idName;
    //our jquery element/object
    jqElement;
    navbarTitle;
    //methods
    //initialize everything
    //options is just an object
    constructor(options){
      //this.score = userScore;
      this.className = options.className;
      this.idName = options.idName;
      this.jqElement = $(this.idName);
      this.navbarTitle = options.navbarTitle;
      this.renderNavbar();
    }

    addOne(){
        this.score += 1;
        //this.score = this.score + 1
    }
    /*
        make this function add this html too the navbar
            <li class="nav-item active">
              <a class="nav-link" href="#">Fourth class</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Questions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Examples</a>
            </li>
        1) you need to select the ul element with class navbar-nav with jquery
        2) after selecting that with jquery you need to add the elements to the selected UL element eg) add the li/a elements
        3) you also need to add the correct classes to the li/a elements  
    */

    renderNavbar(){
      
      for(let i = 0;i < this.navbarTitle.length;i++){
        let titleObject = this.navbarTitle[i];
        let listElement = $("<li></li>");
        listElement.addClass("nav-item");
        //listElement.text(title);
        /*
        <li>Fourth Class</li>
        */
        let linkElement = $('<a></a>');
        linkElement.addClass("nav-link");
        linkElement.text(titleObject.title);
        linkElement.attr("href", titleObject.href);
        listElement.append(linkElement);
        this.jqElement.append(listElement);
      }

      console.log(this.jqElement);
    }
}
//initializing our class

//our instance of the class
//let page1 = new PageRender(5);
//page1.score = 5
//page1.addOne();
//expected score should be 6
//let page2 = new PageRender(2);
//page2.score = 2;
//page2.addOne();
//page2.addOne();
//expected score should be 4
//console.log("page 1: ",page1);
//console.log("page 2: ",page2);

function pageLoad(){
  let navbarOptions = {
    className:".navbar-nav",
    navbarTitle:[
      {
        title:'Fourth class',
        href:'fourth-class.html'
      },
      {
        title:'Questions',
        href:'https://getbootstrap.com/docs/4.0/components/navbar/'
      },
      {
        title:'Examples',
        href:'#'
      }
    ],
    idName:"#main-navbar"
  };

  let navbar = new PageRender(navbarOptions);
  console.log('navbar page render:' ,navbar);
}


//first step
$(document).ready(function(){
  pageLoad();
});
