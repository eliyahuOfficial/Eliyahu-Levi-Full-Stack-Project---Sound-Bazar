class SoundCardsError {
    status: number;
    message: string;


    constructor(status: number, message: string) {
        this.status = status;
        this.message = message;
    }


    static gen(status: number, message: string) {
        return new SoundCardsError(status, message);
    }
}

export default SoundCardsError;

