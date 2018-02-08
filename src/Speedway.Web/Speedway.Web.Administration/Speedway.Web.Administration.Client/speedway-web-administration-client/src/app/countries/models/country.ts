export class Country {
  constructor(private readonly _id: number, private _name: string) {
  }

  get id(): number{
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}
