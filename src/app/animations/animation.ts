/**
 * Created by huangjun on 2017/10/21.
 */
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const animateFlyInOut = trigger('flyInOut', [
                state('in', style({
                  transform: 'translateX(0)'
                })),
                transition(':enter', [
                  animate(500, keyframes([
                    style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                    style({ opacity: 0.6, transform: 'translateX(30px)', offset: 0.5 }),
                    style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
                  ]))
                ]),

                transition(':leave', [
                  animate(200, keyframes([
                    style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                    style({ opacity: 0.6, transform: 'translateX(-20px)', offset: 0.5 }),
                    style({ opacity: 0, transform: 'translateX(100%)', offset: 1 })
                  ]))
                ])
          ]);
