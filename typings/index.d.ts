// support NodeJS modules without type definitions
/* eslint-disable */
declare module '*';

declare var ENV: string;
declare var HMR: boolean;
declare var System: SystemJS;

import RootStore from "@/stores";
import { AxiosResponse } from "axios";
import "react";
import "axios";
import { match } from "react-router-dom";

interface SystemJS {
  import: (path?: string) => Promise<any>;
}

interface GlobalEnvironment {
  ENV: string;
  HMR: boolean;
  SystemJS: SystemJS;
  System: SystemJS;
}

// Extend typings
interface Global extends GlobalEnvironment { 
  
}

declare global {

  type IRootStore = typeof RootStore;

  interface IProps {
    store?: IRootStore;
    history?: History;
    match?: match<{ [propName: string]: string }>; // Record<string, any>;
  }
}