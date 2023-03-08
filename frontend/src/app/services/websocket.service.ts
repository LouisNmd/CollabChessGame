import { Injectable } from '@angular/core';
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  
  private obsStompConnection!: Observable<any>;
  private subscribers: Array<any> = [];
  private subscriberIndex = 0;

  constructor(private stompService: RxStompService) {
    // Initialise a list of possible subscribers.
    this.createObservableSocket();
    // Activate subscription to broker.
    this.connect();
  }

  private createObservableSocket = () => {
    this.obsStompConnection = new Observable(observer => {
      const subscriberIndex = this.subscriberIndex++;
      this.addToSubscribers({ index: subscriberIndex, observer });
      return () => {
        this.removeFromSubscribers(subscriberIndex);
      };
    });
  }

  private removeFromSubscribers = (index: number) => {
    for (let i = 0; i < this.subscribers.length; i++) {
      if (i === index) {
        this.subscribers.splice(i, 1);
        break;
      }
    }
  }
  
  private addToSubscribers = (subscriber: { index: number; observer: Subscriber<any>; }) => {
    this.subscribers.push(subscriber);
  }

  private connect = () => {
    this.stompService.stompClient.onConnect = this.onSocketConnect;
    this.stompService.stompClient.onStompError = this.onSocketError;
    this.stompService.stompClient.activate();
  }
  
  private onSocketError = (errorMsg: any) => {
    console.log('Broker reported error: ' + errorMsg);
    this.subscribers.forEach(subscriber => {
      console.log("error");
    });
  }

  /**
   * On each connect / reconnect, we subscribe all broker clients.
   */
    private onSocketConnect = (frame: any) => {
      this.stompService.stompClient.subscribe("http://localhost:8080", this.socketListener);
    }

    private socketListener = (frame: any) => {
      this.subscribers.forEach(subscriber => {
        subscriber.observer.next();
      });
    }
      
  /**
   * Return an observable containing a subscribers list to the broker.
   */
  public getObservable = () => {
    return this.obsStompConnection;
  }
}
