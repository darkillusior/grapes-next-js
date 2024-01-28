import Image from "next/image";
import { Inter } from "next/font/google";
import 'grapesjs/dist/css/grapes.min.css';
import gjspresetwebpage from 'grapesjs-preset-webpage';
import {GrapesjsReact} from "grapesjs-react";
import gjsblockbasic from 'grapesjs-blocks-basic'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      gjspresetwebpage,
      gjsblockbasic
    ]}
  />
  );
}
