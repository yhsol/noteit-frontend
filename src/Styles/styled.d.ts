import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
    whiteColor: string;
    blackColor: string;
    greyColor: string;
    darkGreyColor: string;
    redColor: string;
    blueColor: string;
    navyColor: string;
    borderRadius: string;
    boxBorder: string;
    whiteBox: string;
    uiColorOrange: string;
    uiColorBlue: string;
    uiColorPupple: string;
    uiColorDeepPupple: string;
    uiColorNavy: string;
  }
}
