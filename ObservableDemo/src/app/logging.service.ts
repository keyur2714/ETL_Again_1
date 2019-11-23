export class LoggingService {
    constructor(){}
    logInfo(msg : string): void{
        console.log("Info: "+msg);
    }
    logError(msg : string): void{
        console.log("Error: "+msg);
    }
    logDebug(msg : string): void{
        console.log("Debug: "+msg);
    }
}