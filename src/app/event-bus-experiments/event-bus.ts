export interface Observer {
    notify(data:any);
}

interface Subject {
    registerObserver(observer:Observer);
    unRegisterObserver(observer:Observer);
    notifyObservers(data:any);
}

class EventBus implements Subject{

    private observers: Observer[]  = [];
    
    registerObserver(observer: Observer) {
       this.observers.push(observer);   
    }
    unRegisterObserver(observer: Observer) {
        throw new Error('Method not implemented.');
    }
    notifyObservers(data: any) {
        throw new Error('Method not implemented.');
    }

}