import 'styled-components';

import { ITheme } from 'modules/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}