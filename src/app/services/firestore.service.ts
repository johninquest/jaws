import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private _fs: Firestore) {}

  addDocument(_collId: string, _docData: object) {
    let _collRef = collection(this._fs, _collId);
    return addDoc(_collRef, _docData);
  }
}
