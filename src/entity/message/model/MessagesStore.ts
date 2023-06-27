import {makeAutoObservable, runInAction} from "mobx";
import {Message} from "./Message";


const messageText = "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n" +
    "\n" +
    "Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.";


export default class MessagesStore {
    private _messages: Message[] = [
        {yours: false, text: messageText, date: new Date()},
        {yours: true, text: "Круто", date: new Date()},
        {yours: false, text: messageText, date: new Date()},
        {yours: true, text: "Круто", date: new Date()},
        {yours: false, text: messageText, date: new Date()},
        {yours: true, text: "Круто", date: new Date()}
    ];

    constructor() {
        makeAutoObservable(this);
    }

    get messages(): Message[] {
        return this._messages;
    }

    set messages(value: Message[]) {
        runInAction(() => {
            this._messages = value;
        });
    }
}