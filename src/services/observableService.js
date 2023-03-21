import { Observable } from 'rxjs';

export const getNumber = new Observable(subscriber => {
    //we emit values:
    subscriber.next(1); //emite1
    subscriber.next(2);//emite2
    subscriber.next(3);//emite3
    setTimeout(() => {
        subscriber.next(4);//emite4
        subscriber.complete();// se completa y termina
    }, 1000)
})