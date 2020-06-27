class PageRender{
    //properties - variables of the class
    score = 0;
    
    //methods
    constructor(userScore){
        this.score = userScore;
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

    }
}

let page1 = new PageRender(5);
//page1.score = 5
page1.addOne();
let page2 = new PageRender(2);
//page2.score = 2;
page2.addOne();
page2.addOne();
console.log("page 1: ",page1);
console.log("page 2: ",page2);