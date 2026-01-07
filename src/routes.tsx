import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load page components
const NamaoHome = lazy(() => import('./pages/NamaoHome'));
const Namao_Story = lazy(() => import('./pages/Namao_Story'));
const PictureGallery = lazy(() => import('./pages/PictureGallery'));
const VideoGallery = lazy(() => import('./pages/VideoGallery'));
const ResearchReports = lazy(() => import('./pages/ResearchReports'));
const LettersLibrary = lazy(() => import('./pages/LettersLibrary'));
const SenatorMessage = lazy(() => import('./pages/SenatorMessage'));
const SatelliteView = lazy(() => import('./pages/SatelliteView'));
const LinksOfInterest = lazy(() => import('./pages/LinksOfInterest'));

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <NamaoHome />,
      },
      {
        path: '/story',
        element: <Namao_Story />,
      },
      {
        path: '/gallery',
        element: <PictureGallery />,
      },
      {
        path: '/videos',
        element: <VideoGallery />,
      },
      {
        path: '/research',
        element: <ResearchReports />,
      },
      {
        path: '/letters',
        element: <LettersLibrary />,
      },
      {
        path: '/senator-message',
        element: <SenatorMessage />,
      },
      {
        path: '/satellite',
        element: <SatelliteView />,
      },
      {
        path: '/links',
        element: <LinksOfInterest />,
      },
    ],
  },
];