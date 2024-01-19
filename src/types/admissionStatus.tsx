import { Favorite, Hotel, HourglassBottom, QuestionMark } from '@mui/icons-material';
import { ColorPaletteProp } from '@mui/joy';

export enum AdmissionStatus {
  Unknown,
  Admitted,
  Waiting,
  Discharged
}

export class AdmissionStatusUtil {
  public static toString(status: AdmissionStatus) {
    switch (status) {
      case AdmissionStatus.Unknown: {
        return 'Unknown';
      }
      case AdmissionStatus.Admitted: {
        return 'Admitted';
      }
      case AdmissionStatus.Waiting: {
        return 'Waiting';
      }
      case AdmissionStatus.Discharged: {
        return 'Discharged';
      }
    }
  }

  public static toIconAndColor(status: AdmissionStatus) {
    let element: React.ReactNode = <QuestionMark fontSize='inherit' />;
    let color: ColorPaletteProp = 'neutral';

    switch (status) {
      case AdmissionStatus.Admitted: {
        element = <Hotel fontSize='inherit' />;
        color = 'primary';
        break;
      }
      case AdmissionStatus.Waiting: {
        element = <HourglassBottom fontSize='inherit' />;
        color = 'warning';
        break;
      }
      case AdmissionStatus.Discharged: {
        element = <Favorite fontSize='inherit' />;
        color = 'success';
        break;
      }
    }

    return { element, color };
  }
}
