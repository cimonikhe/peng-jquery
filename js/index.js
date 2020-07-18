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
    <li class="nav-item active">
      <a class="nav-link" href="#">Fourth class</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Questions</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Examples</a>
    </li>
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

      //undefined = false, 0 = false, null = false
      if(titleObject.click){
        linkElement.click(function(event){
          titleObject.click(event);
          //return false;
        });
      }
      listElement.append(linkElement);
      this.jqElement.append(listElement);
    }

    console.log(this.jqElement);
  }
}

function cleanUpMainArea(contentElement){
  contentElement.empty();
}

//initializing our class

function openQuestions(event){
  //event.stopImmediatePropagation();
  console.log('open question page');
  let contentClass = '.main-content';
  let pageTitle = 'Questions';

  let mainContent = $(contentClass);
  cleanUpMainArea(mainContent);

  let title = $("<h1></h1>");
  title.text(pageTitle);
  mainContent.append(title);
  let questionOptions = {
    className:contentClass
  };
  let questions = new Questions(questionOptions);
  questions.makeQuestion(2);
}

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
        href:'#',
        click:openQuestions
      },
      {
        title:'Examples',
        href:'#'
      },
      {
        title:'new thing',
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
