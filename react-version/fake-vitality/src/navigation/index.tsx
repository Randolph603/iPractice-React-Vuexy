import { ReactNode } from 'react';
import { FaReact, FaVuejs, FaAngular } from 'react-icons/fa';
import { SiBlazor, SiElectron } from 'react-icons/si';
interface iNavigation {
  id: string;
  title: string;
  icon: ReactNode;
  navLink: string;
}
const navigation: iNavigation[] = [
  {
    id: 'react',
    title: 'React JS',
    icon: <FaReact size={20} />,
    navLink: '/react'
  },
  {
    id: 'vue',
    title: 'Vue JS',
    icon: (<FaVuejs size={20} />),
    navLink: '/vue'
  },
  {
    id: 'angular',
    title: 'Angular JS',
    icon: (<FaAngular  size={20} />),
    navLink: '/angular'
  },
  {
    id: 'blazor',
    title: 'Blazor',
    icon: (<SiBlazor size={20} />),
    navLink: '/blazor'
  },
  {
    id: 'electron',
    title: 'Electron',
    icon: (<SiElectron size={20} />),
    navLink: '/electron'
  }
];
export default navigation
