import { Injectable } from '@nestjs/common';
import { messagesArray } from '../data/message';
import { usersArray, UserType } from '../data/user';

@Injectable()
export class UserService {
	public create = (_id: string) => {
		usersArray.push({ _id } as UserType);
	};

	public getById = (_id: string) => usersArray.find((user) => user._id === _id);

	public getNextAtom = (userId: string) => {
		const lastAtom = usersArray[this.getUserIndex(userId)]?.lastAtomId || 1;
		return messagesArray.find((message) => message.id === lastAtom);
	};

	public setLastAtom = (userId: string, atomId: number) => {
		usersArray[this.getUserIndex(userId)].lastAtomId = atomId;
	};

	public doesUserExist = (_id: string) => !!this.getById(_id);

	private getUserIndex = (userId) => usersArray.findIndex((user) => user._id === userId);
}
