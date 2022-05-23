import {CustomerType} from './customerType';


export class Customer {
  private _id: number;
  private _name: string;
  private _code: string;
  private _birthday: Date;
  private _gender: boolean;
  private _email: string;
  private _idCard: string;
  private _phone: string;
  private _address: string;
  private _customerType : CustomerType;


  constructor(id: number, name: string, code: string, birthday: Date, gender: boolean, email: string, idCard: string,
              phone: string, address: string, customerType: CustomerType) {
    this._id = id;
    this._name = name;
    this._code = code;
    this._birthday = birthday;
    this._gender = gender;
    this._email = email;
    this._idCard = idCard;
    this._phone = phone;
    this._address = address;
    this._customerType = customerType;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get birthday(): Date {
    return this._birthday;
  }

  set birthday(value: Date) {
    this._birthday = value;
  }

  get gender(): boolean {
    return this._gender;
  }

  set gender(value: boolean) {
    this._gender = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get idCard(): string {
    return this._idCard;
  }

  set idCard(value: string) {
    this._idCard = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get customerType(): CustomerType {
    return this._customerType;
  }

  set customerType(value: CustomerType) {
    this._customerType = value;
  }
}
