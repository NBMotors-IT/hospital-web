export enum Sex {
  Unknown = 0,
  Male = 1,
  Female = 2,
  NotApplicable = 9
}

export class SexUtil {
  public static toString(sex: Sex) {
    switch (sex) {
      case Sex.Unknown: {
        return 'Unknown';
      }
      case Sex.Male: {
        return 'Male';
      }
      case Sex.Female: {
        return 'Female';
      }
      case Sex.NotApplicable: {
        return 'Not Applicable';
      }
    }
  }
}
