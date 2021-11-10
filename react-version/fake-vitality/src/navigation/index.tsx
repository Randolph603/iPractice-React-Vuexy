import { ReactNode } from 'react';
import { Mail, Home } from 'react-feather';
interface iNavigation {
  id: string;
  title: string;
  icon: ReactNode;
  navLink: string;
}
const navigation: iNavigation[] = [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: (<Mail size={20} />),
    navLink: '/second-page'
  }
];
export default navigation
