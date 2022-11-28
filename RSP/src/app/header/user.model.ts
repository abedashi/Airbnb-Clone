export class User {
    constructor(
        public id: string,
        public username: string,
        private _token: string,
        private _exp: Date
    ) {}

    get token() {
        if (!this._exp || new Date() > this._exp) {
            return null;
        }

        return this._token;
    }
}