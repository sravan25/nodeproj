const event = {
    name:"Sravan Reddy",
    printName:function() {
        console.log("This name = ",this.name);
    },
    printFName:() =>{
        console.log("arrow name=",this.name);
    }
}

event.printFName();
event.printName();
