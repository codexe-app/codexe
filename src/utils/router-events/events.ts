import { nprogress } from '@mantine/nprogress';

export function onStart() {
  console.log(`NPROGRESS START`)
  nprogress.start();
}

export function onComplete() {
  console.log(`NPROGRESS COMPLETE`)
  nprogress.complete();
}
