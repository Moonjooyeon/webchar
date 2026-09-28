import {removeBackground} from '@imgly/background-removal';
export async function cutout(blob,progress){return removeBackground(blob,{device:'cpu',model:'isnet_quint8',proxyToWorker:false,progress:(key,current,total)=>progress?.(Math.round(current/total*100)),output:{format:'image/png',quality:1}})}
