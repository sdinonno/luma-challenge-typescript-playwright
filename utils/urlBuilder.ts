import uiPages from '../utils/pagesUrl';

export function buildUrl(page: string, params?: Record<any, any>) {
  const uiPath = uiPages[page];
    
  const qParams = new URLSearchParams(params);
  
  const url = params
  ? `${uiPath.concat('?')}${qParams.toString()}`
  : uiPath;

  return url;
}