import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataService {

    constructor(private storage: Storage) {}

    saveItem(item): void {
        this.storage.get('items')
            .then((val) => {
                let items: string[] = [];

                if (val) {
                    items = val.split();
                }

                items.push(item);
                this.storage.set('items', items.join());
            });
    }

    getItems(): any {
        return this.storage.get('items');   
    }

    removeItem(items: string[]): void {
        this.storage.set('items', items.join());
    }

}