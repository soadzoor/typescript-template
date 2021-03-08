import {MyClass} from "MyClass";

export class Main
{
	private _myClass = new MyClass();

	constructor()
	{
		this._myClass.log();
	}
}

const main = new Main();