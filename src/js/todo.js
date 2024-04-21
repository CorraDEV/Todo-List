export default class Todo{
	constructor(
        title = 'Title',
        desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, libero similique rerum minima est asperiores repellat harum odit inventore ipsa nam suscipit fuga eos officia tempora sint, aliquid ipsum dicta!',
        due_date = '21-12-2012',
        prio = 'Low',
        check = false
    ){
    	this.title = title;
        this.desc = desc;
        this.due_date = due_date;
        this.prio = prio;
        this.check = check;
    }
}