export enum BloodType {
  ORhMinus,
  ORhPlus,
  BRhMinus,
  BRhPlus,
  ARhMinus,
  ARhPlus,
  ABRhMinus,
  ABRhPlus
}

export class BloodTypeUtil {
  public static toString(blood: BloodType) {
    switch (blood) {
      case BloodType.ORhMinus: {
        return '0 Rh-';
      }
      case BloodType.ORhPlus: {
        return '0 Rh+';
      }
      case BloodType.BRhMinus: {
        return 'B Rh-';
      }
      case BloodType.BRhPlus: {
        return 'B Rh+';
      }
      case BloodType.ARhMinus: {
        return 'A Rh-';
      }
      case BloodType.ARhPlus: {
        return 'A Rh+';
      }
      case BloodType.ABRhMinus: {
        return 'AB Rh-';
      }
      case BloodType.ABRhPlus: {
        return 'AB Rh+';
      }
    }
  }
}
