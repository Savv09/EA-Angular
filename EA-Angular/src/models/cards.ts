export interface ITab {
  tabtitle: string;
  card: ICard[];
}

export interface ICard {
  imgUrl: string;
  logoInc: string;
  data: string;
  title: string;
  text: string;
}
