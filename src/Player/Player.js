export class Player {
  name = '';
  id = 0;
  hp = 0;
  armor = 0;
  damage = 0;
  initiative = 0;

  constructor({ name, hp, damage, initiative, armor, id }) {
    this.name = name;
    this.id = id;
    this.hp = hp;
    this.armor = armor;
    this.damage = damage;
    this.initiative = initiative;
  }

  /**
   *
   * @param {{name: string; hp: number; damage: number; initiative: number; armor: number; id: number;}} playerObj
   */
  static create(playerObj = {}) {
    return new Player(playerObj);
  }
}
