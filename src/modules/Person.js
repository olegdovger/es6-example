class Person
{
	constructor(firstName)
	{
		this.firstName = firstName;
	}
	
	sayName(text)
	{
		console.log("sup:", this.firstName, '-', text);
	}
}

export default Person;