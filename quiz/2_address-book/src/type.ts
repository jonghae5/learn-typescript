interface PhoneNumberDictionary {
  //어느 규격이 오더라도 num이 와야한다는 말 home, office 아무거나 들어올 수 있음
  [phone: string]: {
    num: number;
  };
}
interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Studio = 'studio',
  Home = 'home',
  Office = 'office',
}

export { PhoneNumberDictionary, PhoneType, Contact };
