import { observable } from 'mobx';

type ITitle = string;

export type ICommonStore = {
  title: ITitle;
};
export class CommonStore {
  @observable
  title: ITitle = 'Hello!';
}
const commonStore = new CommonStore();
export default commonStore;
