class Questions{
    questionData;
    mainContentClass;
    mainElement;

    constructor(options){
        this.mainContentClass = options.className;
        this.mainElement = $(options.className);
        this.questionData = this.getData();
    }

    getData(){
        return questions;
    }

    buildQuestion(question){
        let questionElement = $("<div></div>");
        let questionTitle = $("<p></p>");
        questionTitle.text(question.title);
        questionElement.append(questionTitle);
        let questionList = $("<ol type='A'></ol>");

        for(let key in question.options){
            let listElement = $("<li></li>");
            let option = question.options[key];
            listElement.text(option);
            questionList.append(listElement);
        }
        
        questionElement.append(questionList);
        //questionElement.text('test');
        return questionElement;
    }

    makeQuestion(index){
        let question = this.questionData[index];
        let questionElement = this.buildQuestion(question);
        this.mainElement.append(questionElement);
    }

    makeAllQuestions(){
        
    }
}